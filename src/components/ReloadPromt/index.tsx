import {
  Box,
  Button,
  Group,
  Notification,
  Overlay,
  Stack,
  Text,
} from "@mantine/core"

import { useRegisterSW } from "virtual:pwa-register/react"

export function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line prefer-template
      console.log("SW Registered: " + r)
    },
    onRegisterError(error) {
      console.log("SW registration error", error)
    },
  })

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  return (
    <>
      {(offlineReady || needRefresh) && <Overlay blur="3" />}
      <Box
        style={({ breakpoints }) => ({
          position: "fixed",
          left: 0,
          right: 0,
          top: "1rem",
          margin: "auto",
          width: "50vw",
          zIndex: "300",
          [`@media (maxWidth: ${breakpoints.xl})`]: {
            width: "80vw",
          },
        })}
      >
        {(offlineReady || needRefresh) && (
          <Notification
            color="cyan"
            title={
              offlineReady ? "Ready to work offline" : "New content available"
            }
            style={{}}
            onClose={() => close()}
          >
            {needRefresh && (
              <Stack align="flex-start" gap="xs">
                <Text size="sm">Click on reload button to update</Text>
                <Button size="xs" onClick={() => updateServiceWorker(true)}>
                  Reload
                </Button>
              </Stack>
            )}
          </Notification>
        )}
      </Box>
    </>
  )
}
