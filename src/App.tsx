import { Flex } from "@mantine/core"
import { CodeArea } from "./components/CodeArea"
import { CodeExecButton } from "./components/CodeExecButton"
import { Console } from "./components/Console"
import { ReloadPrompt } from "./components/ReloadPromt"
import { useCodeExec } from "./hooks/useCodeExec"
import { PyodideStatuses } from "./types"

export default function App() {
  const {
    code,
    consoleHistory,
    pyodideStatus,
    setCode,
    codeExec,
    clearConsoleHistory,
  } = useCodeExec()

  return (
    <>
      <ReloadPrompt />
      <Flex direction="column" p="sm" h="100%" gap="md">
        <CodeArea code={code} setCode={setCode} />
        <CodeExecButton
          codeExec={codeExec}
          disabled={
            code.length === 0 ||
            pyodideStatus === PyodideStatuses.loading ||
            pyodideStatus === PyodideStatuses.executing
          }
        />
        <Console
          data={consoleHistory}
          clearConsoleHistory={clearConsoleHistory}
        />
      </Flex>
    </>
  )
}
