import { CodeArea } from "./components/CodeArea"
import { CodeExecButton } from "./components/CodeExecButton"
import { Console } from "./components/Console"
import { useCodeExec } from "./hooks/useCodeExec"

export default function App() {
  const { code, consoleHistory, setCode, codeExec } = useCodeExec()

  return (
    <>
      <CodeArea code={code} setCode={setCode} />
      <br />
      <CodeExecButton codeExec={codeExec} />
      <br />
      <Console data={consoleHistory} />
    </>
  )
}
