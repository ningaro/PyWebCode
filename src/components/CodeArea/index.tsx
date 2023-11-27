import CodeMirror from "@uiw/react-codemirror"
import { python } from "@codemirror/lang-python"
import { theme } from "./theme"
import { Flex, Input } from "@mantine/core"

interface CodeAreaProps {
  code?: string
  setCode: (code: string) => void
}

export function CodeArea({ code, setCode }: CodeAreaProps) {
  return (
    <Input.Wrapper
      label="Code"
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 3 / 5,
        overflow: "auto",
      }}
    >
      <Flex
        style={{
          overflow: "auto",
          flex: 1,
          border:
            "calc(.0625rem*var(--mantine-scale)) solid var(--mantine-color-default-border)",
          borderRadius: "var(--mantine-radius-sm)",
          background: "var(--mantine-color-default)",
        }}
      >
        <CodeMirror
          value={code}
          height="100%"
          style={{ flex: 1 }}
          extensions={[python()]}
          onChange={(value) => setCode(value)}
          theme={theme}
        />
      </Flex>
    </Input.Wrapper>
  )
}
