import { PageContainer } from "@/components/ui/container"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/")({
  component: () => (
    <PageContainer>
      <div>home</div>
    </PageContainer>
  )
})
