import TranslationsProvider from "@/components/provider/recoil/TranslationsProvider";
import LanguageChanger from "@/components/i18n/LanguageChanger";
import ExampleClientComponent from "@/components/example/ExampleClientComponent";
import FormLogin from "@/components/form/FormLogin";
import initTranslations from "@/i18n/translations";
const i18nNamespaces = ["common"];

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <main>
        <h1>{t("pages.home.title")}</h1>
        <ExampleClientComponent />
        <LanguageChanger />
        <FormLogin />
      </main>
    </TranslationsProvider>
  );
}
