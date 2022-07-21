import Markdown from "@nuxt/content/parsers/markdown";
import { getDefaults, processMarkdownOptions } from "@nuxt/content/lib/utils";

export async function parseMarkdown(md) {
  if (!md) return false;

  const options = getDefaults();
  await processMarkdownOptions(options);
  const markdownRaw = new Markdown(options.markdown);
  const markdownJson = await markdownRaw.toJSON(md); // toJSON() is async
  return markdownJson;
}
