import { PageContainer } from "@/components/ui/container"
import { GeneratedCode } from "./components/GeneratedCode/GeneratedCode"
import { OptionsBar } from "./components/Sidebar/OptionsBar"
import { GeneratorForm } from "./form/GeneratorForm"

export default function JSONGenerator() {
  return (
    <PageContainer>
      <OptionsBar />
      <GeneratorForm />
      <GeneratedCode />
    </PageContainer>
  )
}
