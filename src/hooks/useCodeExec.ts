import { useCallback, useEffect, useMemo, useState } from "react"

import {
  IPyodideMessage,
  IConsoleData,
  ConsoleTypes,
  PyodideStatuses,
} from "../types"

export function useCodeExec() {
  const [code, setCode] = useState<string>(
    '# You`re code here\nprint("🎉 Hello world!")'
  )
  const [pyodideStatus, setPyodideStatus] = useState<PyodideStatuses>(
    PyodideStatuses.loading
  )
  const [consoleHistory, setConsoleHistory] = useState<IConsoleData[]>([])

  const worker = useMemo(
    () =>
      new Worker(new URL("../workers/python", import.meta.url), {
        type: "module",
      }),
    []
  )

  const compile = useCallback(
    async (code: string) => {
      setPyodideStatus(PyodideStatuses.executing)
      const consoleRow: IConsoleData = {
        type: ConsoleTypes.info,
        value: "Execution starting...",
        dateTime: new Date().toISOString(),
      }
      setConsoleHistory((prev) => [...prev, consoleRow])
      worker.postMessage(code)
    },
    [worker]
  )

  useEffect(() => {
    if (window.Worker) {
      worker.onmessage = ({ data }: MessageEvent<IPyodideMessage>) => {
        if (data.type === "std")
          setConsoleHistory((prev) => [...prev, data.data])
        if (data.type === "status" && data.data === PyodideStatuses.executed) {
          setPyodideStatus(data.data)
          const consoleRow: IConsoleData = {
            type: ConsoleTypes.info,
            value: "Execution completed",
            dateTime: new Date().toISOString(),
          }
          setConsoleHistory((prev) => [...prev, consoleRow])
        }
        if (data.type === "status") setPyodideStatus(data.data)
      }
    }
  }, [worker])

  const codeExec = useCallback(() => {
    compile(code)
  }, [code, compile])

  const clearConsoleHistory = () => {
    setConsoleHistory([])
  }

  return {
    code,
    consoleHistory,
    pyodideStatus,
    setCode,
    codeExec,
    clearConsoleHistory,
  }
}
