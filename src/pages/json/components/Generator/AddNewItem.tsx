import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import React from "react"

interface IAddNewItem {
  addCustomOption: (key: string, value: string | number) => void
}

const AddNewItemSheet = ({ addCustomOption }: IAddNewItem) => {
  const [key, setKey] = React.useState("")
  const [value, setValue] = React.useState<string | number | null>(null)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-custom hover:bg-custom/70">Add new option</Button>
      </SheetTrigger>
      <SheetContent className="bg-background">
        <SheetHeader>
          <SheetTitle>Adding option</SheetTitle>
          <SheetDescription>
            Add a new option from the{" "}
            <a className="underline underline-offset-2" href="https://fakerjs.dev/">
              faker.js
            </a>{" "}
            library.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Your Key</Label>
            <Input
              id="name"
              onChange={(e) => setKey(e.target.value)}
              placeholder="Your personal key"
              className="col-span-3"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="username">Faker function</Label>
            <Input
              onChange={(e) => setValue(parseFloat(e.target.value) || e.target.value)}
              id="username"
              placeholder="Your function (check description)"
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="submit"
              className="rounded bg-custom hover:bg-custom/70"
              onClick={() => addCustomOption(key, value || "")}
            >
              Create option
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export { AddNewItemSheet }
