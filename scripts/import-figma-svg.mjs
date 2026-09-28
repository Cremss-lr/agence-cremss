// Turns the raw SVG exports from Figma into the optimised files the <CremssLogo> component loads.
//
// In Figma, the "cremss-verre" and "cremss-texte" frames have an SVG export preset with
// "Include id attribute". Figma then writes each layer name as an `id`; the animation finds
// the pieces it moves through those names (menthe-1, glacon-2, lettre-3…).
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { optimize } from "svgo";

const source = new URL("../figma-export/", import.meta.url);
const target = new URL("../src/components/cremss-logo/svg/", import.meta.url);

/** Keeps the names of the frame's direct layers as `data-part` and drops every other id. */
const layerNamesToParts = {
  name: "layerNamesToParts",
  fn: () => ({
    root: {
      enter(root) {
        const elements = (node) => node.children.filter((child) => child.type === "element");
        const svg = elements(root).find((node) => node.name === "svg");
        const top = elements(svg);
        // Figma wraps the frame's content in a <g id="frame-name">
        const layers = top.length === 1 && top[0].name === "g" ? elements(top[0]) : top;
        for (const layer of layers) {
          if (layer.attributes.id) layer.attributes["data-part"] = layer.attributes.id;
        }
      },
    },
    element: {
      enter(node) {
        delete node.attributes.id;
      },
    },
  }),
};

await mkdir(target, { recursive: true });
const files = (await readdir(source)).filter((file) => file.endsWith(".svg"));
if (files.length === 0) throw new Error("No SVG in figma-export/. Export the frames from Figma first.");

for (const file of files) {
  const raw = await readFile(new URL(file, source), "utf8");
  const { data } = optimize(raw, {
    multipass: true,
    floatPrecision: 2,
    plugins: [layerNamesToParts, "preset-default"],
  });
  await writeFile(new URL(file, target), data);
  const parts = [...data.matchAll(/data-part="([^"]+)"/g)].map((match) => match[1]);
  console.log(`${file}: ${(raw.length / 1024).toFixed(0)} Ko → ${(data.length / 1024).toFixed(0)} Ko — ${parts.join(", ")}`);
}
