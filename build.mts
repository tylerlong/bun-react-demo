import { type BunPlugin } from "bun";
import { compile as sassCompile } from "sass";

const sassPlugin: BunPlugin = {
  name: "sass-loader",
  setup() {
    const result = sassCompile("./src/index.scss");
    Bun.write("./public/index.css", result.css);
  },
};

await Bun.build({
  entrypoints: ["./src/index.tsx"],
  outdir: "./public",
  target: "browser",
  plugins: [sassPlugin],
  naming: {
    asset: "[dir]/[name].[ext]",
  },
});
