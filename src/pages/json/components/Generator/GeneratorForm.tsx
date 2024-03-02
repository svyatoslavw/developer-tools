import useGeneratorForm from "../../hooks/useGeneratorForm"
import { ButtonBlock } from "./ButtonBlock"
import { ErrorsBlock } from "./ErrorsBlock"
import { GeneratorItem } from "./GeneratorItem"
import { InputForm } from "./InputForm"

const GeneratorForm = () => {
  const { form, functions, state } = useGeneratorForm()

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <form onSubmit={form.handleSubmit(functions.onSubmit)} className="w-1/2 space-y-5">
        <GeneratorItem form={form} items={state.items} options={state.option} />
        <InputForm form={form} />
        <ErrorsBlock errors={form.formState.errors} />
        <ButtonBlock addCustomOption={functions.addCustomOption} isLoading={state.isLoading} />
      </form>
    </div>
  )
}

export { GeneratorForm }
