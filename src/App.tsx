import { Flex } from "@mantine/core"
import { CodeArea } from "./components/CodeArea"
import { CodeExecButton } from "./components/CodeExecButton"
import { Console } from "./components/Console"
import { ReloadPrompt } from "./components/ReloadPromt"
import { useCodeExec } from "./hooks/useCodeExec"

export default function App() {
  const { code, consoleHistory, setCode, codeExec } = useCodeExec()

  return (
    <Flex direction="column" p="sm" h="100%">
      <ReloadPrompt />
      <CodeArea code={code} setCode={setCode} />
      <CodeExecButton codeExec={codeExec} />
      <Console data={consoleHistory} />
    </Flex>
  )
}
