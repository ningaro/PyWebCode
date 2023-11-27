import { memo } from "react"
import { IConsoleData as IConsoleData } from "../types"
import { Textarea } from "@mantine/core"

interface ConsoleProps {
  data: IConsoleData[]
}

export const Console = memo(function ConsoleMemo({ data }: ConsoleProps) {
  const value = data.reduce(
    (prev, { value, isError }) =>
      prev + `${isError ? "[Ошибка!]: " : "[Логи]: "} ${value}\n`,
    ""
  )

  return (
    <Textarea
      styles={{
        root: { flex: 1, display: "flex", flexDirection: "column" },
        wrapper: { flex: 1, display: "flex" },
        input: { flex: 1, display: "flex" },
      }}
      label="Console"
      value={value}
      readOnly
    />
  )
})
