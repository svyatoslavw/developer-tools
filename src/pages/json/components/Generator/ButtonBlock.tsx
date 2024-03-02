import { SpinnerIcon } from "@/components/icons/SpinnerIcon"
import { Button } from "@/components/ui/button"
import { AddNewItemSheet } from "./AddNewItem"

interface IButtonBlock {
  isLoading: boolean
  addCustomOption: (key: string, value: string | number) => void
}
const ButtonBlock = ({ addCustomOption, isLoading }: IButtonBlock) => {
  return (
    <div className="flex space-x-5">
      <Button disabled={isLoading} type="submit">
        {isLoading && <SpinnerIcon />}
        Generate
      </Button>
      <AddNewItemSheet addCustomOption={addCustomOption} />
    </div>
  )
}

export { ButtonBlock }
