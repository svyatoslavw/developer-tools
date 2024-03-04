import { Input } from "@/components/ui/input"
import { UseFormReturn } from "react-hook-form"
import { z } from "zod"
import { FormOptSchema } from "../../utils/constants/options.constant"

const InputForm = ({ form }: { form: UseFormReturn<z.infer<typeof FormOptSchema>> }) => {
  return (
    <Input
      autoCapitalize="off"
      autoComplete="off"
      autoCorrect="off"
      placeholder="count objects"
      {...form.register("count")}
      className="my-2 w-full text-base"
      onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
        if (
          !/[0-9]/.test(event.key) &&
          event.key !== "Backspace" &&
          event.key !== "Tab" &&
          event.key !== "Enter" &&
          event.key !== "ArrowLeft" &&
          event.key !== "ArrowRight"
        ) {
          event.preventDefault()
        }
      }}
    />
  )
}

export { InputForm }
