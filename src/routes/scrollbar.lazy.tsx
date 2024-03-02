import { SettingsProvider } from "@/lib/contexts/SettingsContext"
import { Scrollbar } from "@/pages/scrollbar/page"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/scrollbar")({
  component: () => (
    <SettingsProvider type="scroll">
      <Scrollbar />
    </SettingsProvider>
  )
})
