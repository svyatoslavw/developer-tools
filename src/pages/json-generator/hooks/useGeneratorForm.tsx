import { Option } from "@/types/json-gen.types"
import { faker } from "@faker-js/faker"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { FormOptSchema, generateInitialOptions } from "../utils/constants/options.constant"
import { getValuesFromLS, setValuesToLS } from "../utils/helpers/generator.helper"
import { useJSONCode } from "./useCode"

const useGeneratorForm = () => {
  const { setCode } = useJSONCode()

  const [userOptions, setUserOptions] = React.useState(
    getValuesFromLS("options") ? JSON.parse(getValuesFromLS("options")!) : {}
  )

  const addCustomOption = (key: string, value: string | number) => {
    setUserOptions({ ...userOptions, [key]: value })
    setValuesToLS("options", JSON.stringify({ ...userOptions, [key]: value }))
  }

  const generateOptions = () => {
    console.log("@gen")
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

  const options = React.useMemo(() => generateOptions(), [generateOptions])

  const form = useForm<z.infer<typeof FormOptSchema>>({
    resolver: zodResolver(FormOptSchema),
    defaultValues: {
      count: "1",
      items: []
    }
  })

  function onSubmit(data: z.infer<typeof FormOptSchema>) {
    return new Promise<void>((resolve) => {
      const res: Option[] = Array.from({ length: +data.count }, () => {
        const newOptions: Option = generateOptions()
        return data.items.reduce((acc, item) => ({ ...acc, [item.id]: newOptions[item.id] }), {})
      })

      setTimeout(() => {
        setCode(res)
        toast.success("Values successfully generated", { cancel: { label: "Close" } })
        resolve()
      }, 500)
    })
  }

  const items = (Object.keys(options) as Array<keyof typeof options>).map((key) => ({
    id: key,
    label: key.toString().charAt(0).toUpperCase() + key.toString().slice(1),
    option: options[key]
  }))

  return {
    state: {
      isLoading: form.formState.isSubmitting,
      items,
      options
    },
    form,
    functions: { onSubmit, addCustomOption }
  }
}

export default useGeneratorForm
