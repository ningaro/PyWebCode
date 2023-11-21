interface CodeAreaProps {
  code?: string
  setCode: (code: string) => void
}

export function CodeArea({ code, setCode }: CodeAreaProps) {
  return (
    <textarea onChange={({ target }) => setCode(target.value)} value={code} />
  )
}
