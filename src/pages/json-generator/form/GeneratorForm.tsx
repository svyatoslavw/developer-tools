import { SpinnerIcon } from "@/components/icons/SpinnerIcon"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Controller } from "react-hook-form"
import useGeneratorForm from "../hooks/useGeneratorForm"
import { AddNewItemSheet } from "./AddNewItem"

const GeneratorForm = () => {
  const { form, functions, state } = useGeneratorForm()

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <form onSubmit={form.handleSubmit(functions.onSubmit)} className="w-full space-y-5 px-10">
        <div className="flex flex-wrap px-1">
          {state.items.map((item) => (
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
                              { id: item.id, option: state.options[item.id], label: item.label }
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
        <Input
          placeholder="count objects"
          {...form.register("count")}
          className="my-2 w-40"
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
        {form.formState.errors.items && (
          <p className="text-sm text-red-500">{form.formState.errors.items.message}</p>
        )}
        {form.formState.errors.count && (
          <p className="text-sm text-red-500">{form.formState.errors.count.message}</p>
        )}

        <div className="flex space-x-5">
          <Button disabled={state.isLoading} type="submit">
            {state.isLoading && <SpinnerIcon />}
            Generate
          </Button>
          <AddNewItemSheet addCustomOption={functions.addCustomOption} />
        </div>
      </form>
    </div>
  )
}

export { GeneratorForm }
