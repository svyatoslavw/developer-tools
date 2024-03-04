import { PageContainer } from "@/components/ui/container"
import { Home } from "@/pages/home/page"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/")({
  component: () => (
    <PageContainer className="space-x-32">
      <Home />
    </PageContainer>
  )
})
