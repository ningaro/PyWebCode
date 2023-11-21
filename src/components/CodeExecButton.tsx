interface CodeExecButtonProps {
  codeExec?: () => void
}

export const CodeExecButton = ({ codeExec }: CodeExecButtonProps) => (
  <button onClick={codeExec}>Run code</button>
)
