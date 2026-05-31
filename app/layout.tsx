// Minimal root layout — the [locale]/layout.tsx provides <html>, <body>, and NextIntlClientProvider
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
