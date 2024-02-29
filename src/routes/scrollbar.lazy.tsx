import { SettingsProvider } from "@/pages/scrollbar/contexts/ScrollbarContext"
import { Scrollbar } from "@/pages/scrollbar/page"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/scrollbar")({
  component: () => (
    <SettingsProvider>
      <Scrollbar />
    </SettingsProvider>
  )
})
