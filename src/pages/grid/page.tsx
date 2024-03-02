import { PageContainer } from "@/components/ui/container"
import { GeneratedCode } from "./components/GeneratedCode/GeneratedCode"
import { GridSettings } from "./components/GridSettings/GridSettings"
import { GridTable } from "./components/GridTable/GridTable"

const Grid = () => {
  return (
    <PageContainer className="space-x-32">
      <GridTable />
      <div className="flex flex-col space-y-4">
        <GridSettings />
        <GeneratedCode />
      </div>
    </PageContainer>
  )
}

export { Grid }
