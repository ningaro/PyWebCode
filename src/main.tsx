import ReactDOM from "react-dom/client"
import App from "./App.tsx"
// Mantine core styles
import "@mantine/core/styles.css"
// Custom styles
import "./theme-styles/globalStyles.css"
import { theme } from "./theme-styles/mainTheme.ts"
import { MantineProvider } from "@mantine/core"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider defaultColorScheme="dark" theme={theme}>
    <App />
  </MantineProvider>
)
