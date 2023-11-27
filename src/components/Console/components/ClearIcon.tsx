import { ActionIcon } from "@mantine/core"
import { IconTrashX } from "@tabler/icons-react"

interface ClearIconProps {
  onClick: () => void
  isVisible?: boolean
}

export function ClearIcon({ onClick, isVisible = true }: ClearIconProps) {
  return (
    <ActionIcon
      onClick={onClick}
      variant="light"
      color="red"
      aria-label="Clear console"
      style={{
        position: "absolute",
        right: "var(--mantine-spacing-sm)",
        top: "var(--mantine-spacing-xl)",
        display: isVisible ? "inherit" : "none",
      }}
    >
      <IconTrashX style={{ width: "70%", height: "70%" }} stroke={1.5} />
    </ActionIcon>
  )
}
