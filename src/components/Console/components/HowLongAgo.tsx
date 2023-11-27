import { Text } from "@mantine/core"
import moment from "moment"
import { useCallback, useEffect, useState } from "react"

interface HowLongAgoProps {
  dateTime?: string
}

export function HowLongAgo({ dateTime }: HowLongAgoProps) {
  const [howLongAgo, setHowLongAgo] = useState("")

  moment.relativeTimeThreshold("s", 60)
  moment.relativeTimeThreshold("ss", -1)

  const updateTime = useCallback(() => {
    setHowLongAgo(moment(dateTime).fromNow())
  }, [dateTime])

  useEffect(() => {
    updateTime()

    const updateInterval = setInterval(() => {
      updateTime()
    }, 5000)

    return () => clearInterval(updateInterval)
  }, [dateTime, updateTime])

  return <Text>{howLongAgo}</Text>
}
