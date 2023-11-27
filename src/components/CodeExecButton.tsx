import { Button } from "@mantine/core"
import { IconSparkles } from "@tabler/icons-react"

interface CodeExecButtonProps {
  codeExec?: () => void
  disabled?: boolean
}

export const CodeExecButton = ({ codeExec, disabled }: CodeExecButtonProps) => {
  return (
    <Button
      onClick={codeExec}
      variant="gradient"
      gradient={{ from: "teal.7", to: "indigo.8", deg: 45 }}
      fullWidth
      disabled={disabled}
      leftSection={<IconSparkles size="14" />}
    >
      Run code
    </Button>
  )
}
