import { loadPyodide } from "pyodide"

const pyodideVersion = "0.24.1"

// Load python
const p = await loadPyodide({
  indexURL: `https://cdn.jsdelivr.net/pyodide/v${pyodideVersion}/full`,
})

// Setup stdout
p.setStdout({
  batched(msg) {
    self.postMessage({ isError: false, value: msg })
  },
})

self.onmessage = async ({ data }: MessageEvent<string>) => {
  try {
    await p.runPythonAsync(data)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Execute error", { error })
    self.postMessage({ isError: true, value: error?.message ?? error })
  }
}
