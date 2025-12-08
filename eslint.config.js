// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import svelte from "eslint-plugin-svelte"; 
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Astro
  ...astro.configs["flat/recommended"],

  // React
  {
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // Svelte
  ...svelte.configs["flat/recommended"],

  // Import plugin (opcional pero útil)
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/order": "error",
      // tus reglas de import favoritas
    },
  },

  {
    files: ["**/*.{js,ts,jsx,tsx,astro,svelte}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },

  {
    ignores: ["dist/", ".astro/", "build/", "node_modules/"],
  }
);