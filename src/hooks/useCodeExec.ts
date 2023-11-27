import { useCallback, useEffect, useMemo, useState } from "react"

import { IConsoleData } from "../types"

export function useCodeExec() {
  const [code, setCode] = useState<string>("Test text")
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
      worker.postMessage(code)
    },
    [worker]
  )

  useEffect(() => {
    if (window.Worker) {
      worker.onmessage = ({ data }: MessageEvent<IConsoleData>) => {
        setConsoleHistory((prev) => [...prev, data])
      }
    }
  }, [worker])

  const codeExec = useCallback(() => {
    compile(code)
  }, [code, compile])

  const clearConsoleHistory = () => {
    setConsoleHistory([])
  }

  return { code, consoleHistory, setCode, codeExec, clearConsoleHistory }
}
