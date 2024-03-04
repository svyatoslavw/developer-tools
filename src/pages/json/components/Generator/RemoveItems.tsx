import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { removeValuesFromLS } from "../../utils/helpers/generator.helper"

const RemoveItems = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="w-1/2 rounded-lg bg-black px-3 py-1 transition-colors hover:bg-neutral-800"
        >
          Delete your options
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete options</DialogTitle>
        </DialogHeader>
        <div className=" flex justify-center py-8 text-center font-medium">
          Are you sure you want to delete your all options?
        </div>
        <DialogFooter>
          <button
            type="button"
            className="text- rounded bg-red-600 px-4 py-2 text-sm transition-colors hover:bg-red-600/70"
            onClick={() => {
              removeValuesFromLS("options")
              window.location.reload()
            }}
          >
            Delete
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { RemoveItems }
