import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { PRODUCTS } from "@/components/homepage/data";

const orderSchema = z.object({
  customer: z.object({
    firstName: z.string().trim().min(1).max(80),
    lastName: z.string().trim().min(1).max(80),
    email: z.string().trim().email(),
    phone: z.string().trim().max(40).optional(),
  }),
  shippingAddress: z.object({
    address: z.string().trim().min(1).max(200),
    area: z.string().trim().min(1).max(100),
    city: z.string().trim().min(1).max(100),
    postalCode: z.string().trim().min(1).max(30),
    notes: z.string().trim().max(500).optional(),
  }),
  paymentMethod: z.enum(["cod", "bank"]),
  items: z
    .array(
      z.object({
        id: z.number().int(),
        quantity: z.number().int().positive().max(100),
      }),
    )
    .min(1)
    .max(50),
  locale: z.enum(["en", "bn"]).default("en"),
});

type Order = z.infer<typeof orderSchema>;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function paymentLabel(paymentMethod: Order["paymentMethod"]) {
  return paymentMethod === "cod" ? "Cash on Delivery" : "Manual Bank Transfer";
}

function buildOrderDetails(order: Order) {
  const catalogItems = order.items.map((item) => {
    const product = PRODUCTS.find((candidate) => candidate.id === item.id);
    if (!product) {
      throw new Error(`Unknown product: ${item.id}`);
    }

    return {
      name: product.name,
      quantity: item.quantity,
      price: product.price,
      lineTotal: product.price * item.quantity,
    };
  });

  const subtotal = catalogItems.reduce((sum, item) => sum + item.lineTotal, 0);
  const shipping = subtotal >= 75 ? 0 : 8;

  return {
    items: catalogItems,
    subtotal,
    shipping,
    total: subtotal + shipping,
  };
}

function orderHtml(order: Order, details: ReturnType<typeof buildOrderDetails>) {
  const customerName = `${escapeHtml(order.customer.firstName)} ${escapeHtml(order.customer.lastName)}`;
  const items = details.items
    .map(
      (item) =>
        `<li>${escapeHtml(item.name)} x ${item.quantity}: BDT ${item.lineTotal.toLocaleString("en-BD")}</li>`,
    )
    .join("");

  return `
    <h2>Arpan order received</h2>
    <p><strong>Customer:</strong> ${customerName}</p>
    <p><strong>Email:</strong> ${escapeHtml(order.customer.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(order.customer.phone || "Not provided")}</p>
    <p><strong>Payment:</strong> ${paymentLabel(order.paymentMethod)}</p>
    <h3>Items</h3>
    <ul>${items}</ul>
    <p><strong>Subtotal:</strong> BDT ${details.subtotal.toLocaleString("en-BD")}</p>
    <p><strong>Shipping:</strong> ${details.shipping === 0 ? "Free" : `BDT ${details.shipping.toLocaleString("en-BD")}`}</p>
    <p><strong>Total:</strong> BDT ${details.total.toLocaleString("en-BD")}</p>
    <h3>Shipping address</h3>
    <p>${escapeHtml(order.shippingAddress.address)}<br />
      ${escapeHtml(order.shippingAddress.area)}, ${escapeHtml(order.shippingAddress.city)}<br />
      ${escapeHtml(order.shippingAddress.postalCode)}</p>
    <p><strong>Notes:</strong> ${escapeHtml(order.shippingAddress.notes || "None")}</p>
  `;
}

function orderText(order: Order, details: ReturnType<typeof buildOrderDetails>) {
  const items = details.items
    .map((item) => `${item.name} x ${item.quantity}: BDT ${item.lineTotal.toLocaleString("en-BD")}`)
    .join("\n");

  return [
    "Arpan order received",
    `Customer: ${order.customer.firstName} ${order.customer.lastName}`,
    `Email: ${order.customer.email}`,
    `Phone: ${order.customer.phone || "Not provided"}`,
    `Payment: ${paymentLabel(order.paymentMethod)}`,
    "",
    "Items:",
    items,
    `Subtotal: BDT ${details.subtotal.toLocaleString("en-BD")}`,
    `Shipping: ${details.shipping === 0 ? "Free" : `BDT ${details.shipping.toLocaleString("en-BD")}`}`,
    `Total: BDT ${details.total.toLocaleString("en-BD")}`,
    "",
    "Shipping address:",
    order.shippingAddress.address,
    `${order.shippingAddress.area}, ${order.shippingAddress.city}`,
    order.shippingAddress.postalCode,
    `Notes: ${order.shippingAddress.notes || "None"}`,
  ].join("\n");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const notificationEmail = process.env.ORDER_NOTIFICATION_EMAIL;

  if (!apiKey || !fromEmail || !notificationEmail) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  try {
    const parsedOrder = orderSchema.safeParse(await request.json());
    if (!parsedOrder.success) {
      return NextResponse.json(
        { error: "Please check the order details and try again." },
        { status: 400 },
      );
    }

    const order = parsedOrder.data;
    const details = buildOrderDetails(order);
    const html = orderHtml(order, details);
    const text = orderText(order, details);
    const resend = new Resend(apiKey);

    const adminEmail = await resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      replyTo: order.customer.email,
      subject: `New Arpan order from ${order.customer.firstName} ${order.customer.lastName}`,
      html,
      text,
    });

    if (adminEmail.error) {
      console.error("Resend admin email error:", adminEmail.error);
      return NextResponse.json(
        { error: "The order email could not be sent." },
        { status: 502 },
      );
    }

    const customerEmail = await resend.emails.send({
      from: fromEmail,
      to: order.customer.email,
      subject: "Your Arpan order confirmation",
      html: html.replace("Arpan order received", "Thank you for your Arpan order"),
      text: text.replace("Arpan order received", "Thank you for your Arpan order"),
    });

    if (customerEmail.error) {
      console.error("Resend customer email error:", customerEmail.error);
      return NextResponse.json(
        { error: "The order was received, but the customer email could not be sent." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Order email request failed:", error);
    return NextResponse.json(
      { error: "Unable to place the order right now." },
      { status: 500 },
    );
  }
}
