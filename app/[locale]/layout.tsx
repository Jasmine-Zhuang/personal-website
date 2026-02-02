import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { locales } from "@/lib/i18n";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocaleSetter } from "@/components/LocaleSetter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <ThemeProvider>
        <LocaleSetter locale={params.locale} />
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(15,118,110,0.08),_transparent_45%)]">
          <Header />
          <main className="mx-auto w-full max-w-6xl px-6 md:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
