import { CodeArea } from "./components/CodeArea"
import { CodeExecButton } from "./components/CodeExecButton"
import { Console } from "./components/Console"
import { ReloadPrompt } from "./components/ReloadPromt"
import { useCodeExec } from "./hooks/useCodeExec"

export default function App() {
  const { code, consoleHistory, setCode, codeExec } = useCodeExec()

  return (
    <>
      <ReloadPrompt />
      <CodeArea code={code} setCode={setCode} />
      <br />
      <CodeExecButton codeExec={codeExec} />
      <br />
      <Console data={consoleHistory} />
    </>
  )
}
