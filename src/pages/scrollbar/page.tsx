import { PageContainer } from "@/components/ui/container"
import { GeneratedCode } from "./components/GeneratedCode/GeneratedCode"
import { Settings } from "./components/Settings/Settings"

const Scrollbar = () => {
  return (
    <PageContainer>
      <div className="flex w-2/3 justify-between">
        <Settings />
        <GeneratedCode />
      </div>
    </PageContainer>
  )
}

export { Scrollbar }
