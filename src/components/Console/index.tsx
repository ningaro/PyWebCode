import { memo, useCallback, useMemo, useRef } from "react"
import { IConsoleData as IConsoleData } from "../../types"
import { Flex, Input } from "@mantine/core"
import { Record } from "./components/Record"
import { ClearIcon } from "./components/ClearIcon"
import { MoveTopIcon } from "./components/MoveTopIcon"

interface ConsoleProps {
  data: IConsoleData[]
  clearConsoleHistory: () => void
}

export const Console = memo(function ConsoleMemo({
  data,
  clearConsoleHistory,
}: ConsoleProps) {
  const isDataEmpty = useMemo(() => !!data.length, [data.length])

  const recordsListRef = useRef<HTMLDivElement>(null)

  const scrollToTopRecordsList = useCallback(() => {
    if (recordsListRef.current) {
      const { scrollTop } = recordsListRef.current
      recordsListRef.current.scroll({ top: 0 - scrollTop, behavior: "smooth" })
    }
  }, [recordsListRef])

  return (
    <Input.Wrapper
      style={{
        flex: 2 / 5,
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        position: "relative",
      }}
      label="Console"
    >
      <ClearIcon onClick={clearConsoleHistory} isVisible={isDataEmpty} />
      <MoveTopIcon onClick={scrollToTopRecordsList} />
      <Flex
        p="sm"
        style={{
          height: "100%",
          overflow: "auto",
          border:
            "calc(.0625rem*var(--mantine-scale)) solid var(--mantine-color-default-border)",
          borderRadius: "var(--mantine-radius-sm)",
          background: "var(--mantine-color-default)",
          flexDirection: "column",
        }}
        ref={recordsListRef}
        gap="md"
      >
        {data.toReversed().map(({ value, type, dateTime }) => (
          <Record
            key={value + dateTime}
            value={value}
            type={type}
            dateTime={dateTime}
          />
        ))}
      </Flex>
    </Input.Wrapper>
  )
})
