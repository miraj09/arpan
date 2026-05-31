import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { PRODUCTS } from "@/components/homepage/data";
import ProductDetails from "@/components/product/ProductDetails";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    PRODUCTS.map((p) => ({ locale, id: String(p.id) })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === Number(id));
  if (!product) return {};
  return {
    title: `${product.name} — Arpan`,
    description: `Buy ${product.name} on Arpan. ${product.impact}. Shop with purpose, fund healthcare.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  setRequestLocale(locale);

  const product = PRODUCTS.find((p) => p.id === Number(id));
  if (!product) notFound();

  const sameCategory = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id,
  );
  const others = PRODUCTS.filter((p) => p.category !== product.category);
  const related = [...sameCategory, ...others].slice(0, 4);

  return <ProductDetails product={product} related={related} />;
}
