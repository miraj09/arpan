import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { routing } from "@/i18n/routing";
import { HtmlLang } from "@/components/html-lang";

export const metadata: Metadata = {
  title: "Arpan — Shop with Purpose",
  description:
    "Discover premium ethical products. Every purchase funds quality healthcare through UHDP.",
  icons: { icon: "/favicon.ico" },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <>
      <HtmlLang locale={locale} />
      <NextIntlClientProvider messages={messages} locale={locale}>
        {children}
      </NextIntlClientProvider>
      {process.env.NODE_ENV === "production" && <Analytics />}
    </>
  );
}
