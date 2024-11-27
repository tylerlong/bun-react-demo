import { type BunPlugin } from "bun";
import { compile as sassCompile } from "sass";

const sassPlugin: BunPlugin = {
  name: "sass-loader",
  setup(build) {
    build.onLoad({ filter: /\.(scss)$/ }, async (args) => {
      const result = sassCompile(args.path);
      return {
        loader: "css",
        contents: result.css,
      };
    });
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
