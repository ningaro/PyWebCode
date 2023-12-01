import { DefaultMantineColor, Flex, Text } from "@mantine/core"
import { HowLongAgo } from "./HowLongAgo"
import { ConsoleTypes } from "../../../types"

interface RecordProps {
  value?: string
  type: ConsoleTypes
  dateTime?: string
}

export function Record({ value, type, dateTime }: RecordProps) {
  const typeColors: Record<ConsoleTypes, DefaultMantineColor> = {
    [ConsoleTypes.err]: "red.2",
    [ConsoleTypes.info]: "gray.2",
    [ConsoleTypes.log]: "indigo.2",
  }

  return (
    <Flex gap="sm" direction="column">
      <Flex gap="sm">
        <Text fw="700" c={typeColors[type]}>
          [{type}]
        </Text>
        <HowLongAgo dateTime={dateTime} />
      </Flex>
      <Flex direction="column">
        {value?.split("\n").map((line) => (
          <Text key={line} ff="monospace">
            {line}
          </Text>
        ))}
      </Flex>
    </Flex>
  )
}
