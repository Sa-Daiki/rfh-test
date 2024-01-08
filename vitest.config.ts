import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
  resolve: {
    // https://stackoverflow.com/questions/75798479/how-can-i-solve-the-issue-of-failed-to-resolve-import-in-vitest
    alias: [{ find: "@", replacement: resolve(__dirname, "./") }],
  },
});
