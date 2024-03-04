import { Checkbox } from "@/components/ui/checkbox"
import { Item, Option } from "@/types/json-gen.types"
import { Controller, UseFormReturn } from "react-hook-form"
import { z } from "zod"
import { FormOptSchema } from "../../utils/constants/options.constant"

interface IGeneratorItem {
  form: UseFormReturn<z.infer<typeof FormOptSchema>>
  options: Option
  items: Item[]
}

const GeneratorItem = ({ form, items, options }: IGeneratorItem) => {
  return (
    <div className="flex max-h-44 flex-wrap overflow-y-auto px-1">
      {items.map((item) => (
        <div key={item.label} className="w-1/3">
          <Controller
            key={item.id}
            control={form.control}
            name="items"
            render={({ field: { onChange, value } }) => (
              <div className="my-2 flex items-center gap-2">
                <Checkbox
                  checked={value.some((value) => value.id === item.id)}
                  id={item.id.toString()}
                  className="h-5 w-5"
                  onCheckedChange={(checked) => {
                    checked
                      ? onChange([
                          ...value,
                          { id: item.id, option: options[item.id], label: item.label }
                        ])
                      : onChange(value.filter((el) => el.id !== item.id))
                  }}
                />
                <label
                  htmlFor={item.id.toString()}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.label}
                </label>
              </div>
            )}
          />
        </div>
      ))}
    </div>
  )
}

export { GeneratorItem }
