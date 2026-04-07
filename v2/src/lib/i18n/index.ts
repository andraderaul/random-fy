import { i18n } from "@lingui/core";

export type Locale = "en" | "pt" | "es";

export const defaultLocale: Locale = "en";

export async function loadCatalog(locale: Locale) {
  const { messages } = await import(`./locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}

export { i18n };
