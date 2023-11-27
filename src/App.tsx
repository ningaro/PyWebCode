import { Flex } from "@mantine/core"
import { CodeArea } from "./components/CodeArea"
import { CodeExecButton } from "./components/CodeExecButton"
import { Console } from "./components/Console"
import { ReloadPrompt } from "./components/ReloadPromt"
import { useCodeExec } from "./hooks/useCodeExec"

export default function App() {
  const { code, consoleHistory, setCode, codeExec, clearConsoleHistory } =
    useCodeExec()

  return (
    <>
      <ReloadPrompt />
      <Flex direction="column" p="sm" h="100%" gap="md">
        <CodeArea code={code} setCode={setCode} />
        <CodeExecButton codeExec={codeExec} disabled={code.length === 0} />
        <Console
          data={consoleHistory}
          clearConsoleHistory={clearConsoleHistory}
        />
      </Flex>
    </>
  )
}
