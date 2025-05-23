import {defineConfig} from "tsup";

export default defineConfig({
  entry: ["src/postinstall.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  swc: {
    jsc: {
      transform: {
        useDefineForClassFields: true,
      },
    },
  },
});
