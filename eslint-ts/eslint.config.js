import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

// /** @type {import("typescript-eslint".Config)} */
// 实用的工具函数，为我们编写扁平化的eslint配置提供了良好的类型提示
export default tseslint.config(
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["**/dist/**"],
  }
);
