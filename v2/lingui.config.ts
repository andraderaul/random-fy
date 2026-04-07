import { defineConfig } from "@lingui/conf";

export default defineConfig({
  locales: ["en", "pt", "es"],
  sourceLocale: "en",
  catalogs: [
    {
      path: "<rootDir>/src/lib/i18n/locales/{locale}/messages",
      include: ["src/**"],
    },
  ],
  format: "po",
});
