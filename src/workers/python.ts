import { loadPyodide } from "pyodide"
import { IConsoleData } from "../types"

// Load python
const p = await loadPyodide({
  indexURL:
    import.meta.env.MODE === "production" ? "pyodide" : "/node_modules/pyodide",
})

// Setup stdout
p.setStdout({
  batched(msg) {
    const answer: IConsoleData = {
      isError: false,
      value: msg,
      dateTime: new Date().toISOString(),
    }
    self.postMessage(answer)
  },
})

self.onmessage = async ({ data }: MessageEvent<string>) => {
  try {
    await p.runPythonAsync(data)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Execute error", { error })
    const answer: IConsoleData = {
      isError: true,
      value: error?.message ?? error,
      dateTime: new Date().toISOString(),
    }
    self.postMessage(answer)
  }
}
