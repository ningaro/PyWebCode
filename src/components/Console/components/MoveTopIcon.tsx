import { ActionIcon } from "@mantine/core"
import { IconArrowUp } from "@tabler/icons-react"

interface MoveTopIconProps {
  onClick: () => void
}

export function MoveTopIcon({ onClick }: MoveTopIconProps) {
  return (
    <ActionIcon
      onClick={onClick}
      variant="light"
      color="gray"
      size="lg"
      radius="lg"
      aria-label="Scroll to top"
      style={{
        position: "absolute",
        right: "var(--mantine-spacing-sm)",
        bottom: "var(--mantine-spacing-lg)",
      }}
    >
      <IconArrowUp style={{ width: "70%", height: "70%" }} stroke={1.5} />
    </ActionIcon>
  )
}
