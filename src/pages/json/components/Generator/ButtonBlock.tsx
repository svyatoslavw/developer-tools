import { SpinnerIcon } from "@/components/icons/SpinnerIcon"
import { AddNewItemSheet } from "./AddNewItem"
import { RemoveItems } from "./RemoveItems"

interface IButtonBlock {
  isLoading: boolean
  addCustomOption: (key: string, value: string | number) => void
}
const ButtonBlock = ({ addCustomOption, isLoading }: IButtonBlock) => {
  return (
    <div className="flex flex-col space-y-3">
      <button
        disabled={isLoading}
        type="submit"
        className="rounded-lg bg-white px-3 py-1 text-black transition-colors hover:bg-white/70"
      >
        {isLoading && <SpinnerIcon />}
        Generate
      </button>
      <div className="flex w-full gap-5">
        <AddNewItemSheet addCustomOption={addCustomOption} />
        <RemoveItems />
      </div>
    </div>
  )
}

export { ButtonBlock }
