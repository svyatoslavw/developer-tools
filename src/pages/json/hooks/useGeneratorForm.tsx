import { Option } from "@/types/json-gen.types"
import { faker } from "@faker-js/faker"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { FormOptSchema, generateInitialOptions } from "../utils/constants/options.constant"
import { getValuesFromLS, setValuesToLS } from "../utils/helpers/generator.helper"
import { useCode } from "./useCode"

const useGeneratorForm = () => {
  const { setCode } = useCode()

  const [userOptions, setUserOptions] = React.useState(
    getValuesFromLS("options") ? JSON.parse(getValuesFromLS("options")!) : {}
  )

  const addCustomOption = (key: string, value: string | number) => {
    setUserOptions({ ...userOptions, [key]: value })
    setValuesToLS("options", JSON.stringify({ ...userOptions, [key]: value }))
  }

  const generateOption = () => {
    const options: Option = { ...generateInitialOptions(), ...userOptions }
    for (const key in options) {
      if (options.hasOwnProperty(key) && options[key].toString().startsWith("faker")) {
        try {
          options[key] = new Function("faker", `return (${options[key]})`)(faker)
        } catch {
          console.log(`@error generating value for ${key}`)
        }
      }
    }

    return options
  }

  const option = React.useMemo(() => generateOption(), [userOptions])

  const items = (Object.keys(option) as Array<keyof typeof option>).map((key) => ({
    id: key,
    label: key.toString().charAt(0).toUpperCase() + key.toString().slice(1),
    option: option[key]
  }))

  const form = useForm<z.infer<typeof FormOptSchema>>({
    resolver: zodResolver(FormOptSchema),
    defaultValues: {
      count: "",
      items: []
    }
  })

  const onSubmit = async (data: z.infer<typeof FormOptSchema>) => {
    const res: Option[] = Array.from({ length: +data.count }, () => {
      const newOption: Option = generateOption()
      return data.items.reduce((acc, item) => ({ ...acc, [item.id]: newOption[item.id] }), {})
    })
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        setCode(res)
        toast.success("Values successfully generated", { cancel: { label: "Close" } })
        resolve()
      }, 300)
    })
  }

  return {
    state: {
      isLoading: form.formState.isSubmitting,
      items,
      option
    },
    form,
    functions: { onSubmit, addCustomOption }
  }
}

export default useGeneratorForm
