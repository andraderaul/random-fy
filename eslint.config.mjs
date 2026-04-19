import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginImport from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const FEATURES = ["auth", "discover", "playlist", "result"];

const crossFeatureZones = FEATURES.map((feature) => {
  const otherFeatures = FEATURES.filter((f) => f !== feature);
  return {
    target: `./src/features/${feature}`,
    from: otherFeatures.map((f) => `./src/features/${f}`),
    except: otherFeatures.map((f) => `./src/features/${f}/index.ts`),
    message:
      "features/ can only import from other features via their public barrel (index.ts) (ADR-002)",
  };
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      // Enforce layer dependency rules from ADR-002
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            // features/ cannot import from other features (ADR-002)
            ...crossFeatureZones,
            // features/ cannot import from app/
            {
              target: "./src/features",
              from: "./src/app",
              message: "features/ cannot import from app/ (ADR-002)",
            },
            // components/ cannot import from features/ or app/
            {
              target: "./src/components",
              from: "./src/features",
              message: "components/ cannot import from features/ (ADR-002)",
            },
            {
              target: "./src/components",
              from: "./src/app",
              message: "components/ cannot import from app/ (ADR-002)",
            },
            // lib/ cannot import from features/, components/, or app/
            {
              target: "./src/lib",
              from: "./src/features",
              message: "lib/ cannot import from features/ (ADR-002)",
            },
            {
              target: "./src/lib",
              from: "./src/components",
              message: "lib/ cannot import from components/ (ADR-002)",
            },
            {
              target: "./src/lib",
              from: "./src/app",
              message: "lib/ cannot import from app/ (ADR-002)",
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
