import { loadPyodide } from "pyodide"
import { ConsoleTypes, IPyodideMessage, PyodideStatuses } from "../types"

// Load python
const p = await loadPyodide({
  indexURL:
    import.meta.env.MODE === "production" ? "pyodide" : "/node_modules/pyodide",
})

// Setup stdout
p.setStdout({
  batched(msg) {
    const answer: IPyodideMessage = {
      type: "std",
      data: {
        type: ConsoleTypes.log,
        value: msg,
        dateTime: new Date().toISOString(),
      },
    }
    self.postMessage(answer)
  },
})

// Setup code execute
async function runCode(code: string) {
  try {
    await p.runPythonAsync(code)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Execute error", { error })
    const answer: IPyodideMessage = {
      type: "std",
      data: {
        type: ConsoleTypes.err,
        value: error?.message ?? error,
        dateTime: new Date().toISOString(),
      },
    }
    self.postMessage(answer)
  } finally {
    const answer: IPyodideMessage = {
      type: "status",
      data: PyodideStatuses.executed,
    }
    self.postMessage(answer)
  }
}

self.postMessage({
  type: "std",
  data: {
    type: ConsoleTypes.info,
    value: `Pyodide ${p.version} loaded!`,
    dateTime: new Date().toISOString(),
  },
})

self.postMessage({
  type: "status",
  data: PyodideStatuses.loaded,
})

const pythonInit = `
import sys
print(f"Python version {sys.version}")
`

await p.runPythonAsync(pythonInit)

self.onmessage = async ({ data }: MessageEvent<string>) => runCode(data)
