import { SettingsProvider } from "@/lib/contexts/SettingsContext"
import { CodeProvider } from "@/pages/grid/context/CodeContext"
import { Grid } from "@/pages/grid/page"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/grid")({
  component: () => (
    <SettingsProvider type="grid">
      <CodeProvider>
        <Grid />
      </CodeProvider>
    </SettingsProvider>
  )
})
