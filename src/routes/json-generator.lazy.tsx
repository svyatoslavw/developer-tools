import { CodeProvider } from "@/pages/json-generator/contexts/CodeProvider"
import JSONGenerator from "@/pages/json-generator/page"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/json-generator")({
  component: () => (
    <CodeProvider>
      <JSONGenerator />
    </CodeProvider>
  )
})
