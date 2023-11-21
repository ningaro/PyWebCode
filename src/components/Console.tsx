import { memo } from "react"
import { IConsoleData as IConsoleData } from "../types"

interface ConsoleProps {
  data: IConsoleData[]
}

export const Console = memo(function ConsoleMemo({ data }: ConsoleProps) {
  const value = data.reduce(
    (prev, { value, isError }) =>
      prev + `${isError ? "[Ошибка!]: " : "[Логи]: "} ${value}\n`,
    ""
  )

  return <textarea value={value} readOnly />
})
