import { createTheme } from "@uiw/codemirror-themes"
import { tags as t } from "@lezer/highlight"
import { getThemeColor, rgba } from "@mantine/core"

export const theme = createTheme({
  theme: "dark",
  settings: {
    background: "#25262B",
    foreground: "var(--mantine-color-text)",
    caret: "var(--mantine-color-bright)",
    selection: rgba("#4C6EF5", 0.3),
    selectionMatch: rgba("#4C6EF5", 0.3),
    lineHighlight: "#8a91991a",
    gutterBackground: "var(--mantine-color-default-hover)",
    gutterForeground: "var(--mantine-color-text)",
  },
  styles: [
    { tag: t.comment, color: "var(--mantine-color-gray-6)" },
    { tag: t.string, color: "var(--mantine-color-yellow-4)" },
    {
      tag: [t.keyword, t.operator, t.tagName],
      color: "var(--mantine-color-indigo-4)",
    },
    {
      tag: [
        t.definition(t.variableName),
        t.function(t.variableName),
        t.className,
        t.attributeName,
      ],
      color: "var(--mantine-color-teal-4)",
    },
  ],
})
