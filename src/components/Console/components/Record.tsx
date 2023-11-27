import { Flex, Text } from "@mantine/core"
import { HowLongAgo } from "./HowLongAgo"

interface RecordProps {
  value?: string
  type: "Error" | "Log"
  dateTime?: string
}

export function Record({ value, type, dateTime }: RecordProps) {
  const isError = type === "Error"

  return (
    <Flex gap="sm" direction="column">
      <Flex gap="sm">
        <Text fw="700" c={isError ? "red.2" : "indigo.2"}>
          {isError ? "[ERROR]" : "[LOG]"}
        </Text>
        <HowLongAgo dateTime={dateTime} />
      </Flex>
      <Flex direction="column">
        {value?.split("\n").map((line) => (
          <Text ff="monospace">{line}</Text>
        ))}
      </Flex>
    </Flex>
  )
}
