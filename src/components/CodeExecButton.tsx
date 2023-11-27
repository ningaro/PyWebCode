import { Button } from "@mantine/core"

interface CodeExecButtonProps {
  codeExec?: () => void
}

export const CodeExecButton = ({ codeExec }: CodeExecButtonProps) => (
  <Button onClick={codeExec} fullWidth>
    Run code
  </Button>
)
