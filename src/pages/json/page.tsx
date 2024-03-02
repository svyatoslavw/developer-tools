import { PageContainer } from "@/components/ui/container"
import { GeneratedCode } from "./components/GeneratedCode/GeneratedCode"
import { GeneratorForm } from "./components/Generator/GeneratorForm"
import { OptionsBar } from "./components/Sidebar/OptionsBar"

const JSON = () => {
  return (
    <PageContainer>
      <OptionsBar />
      <GeneratorForm />
      <GeneratedCode />
    </PageContainer>
  )
}
export { JSON }
