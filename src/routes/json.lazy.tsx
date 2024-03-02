import { CodeProvider } from "@/pages/json/contexts/CodeProvider"
import { JSON } from "@/pages/json/page"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/json")({
  component: () => (
    <CodeProvider>
      <JSON />
    </CodeProvider>
  )
})
