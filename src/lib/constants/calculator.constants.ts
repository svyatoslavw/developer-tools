import { TComplexArr, TSimpleFunction } from "@/types/calculator.types"
import { EraserIcon, MoveLeftIcon } from "lucide-react"

export const buttonsCalc = [7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="]

export const simpleFuncCalc: TSimpleFunction[] = ["sin", "cos", "tan", "cot"]

export const bracketsCalc = ["(", ")"]

export const clearCalc = [
  {
    label: "clear",
    Icon: EraserIcon
  },
  {
    label: "back",
    Icon: MoveLeftIcon
  }
]

export const complexFuncCalc: TComplexArr[] = [
  {
    label: "√x",
    type: "sqrt"
  },
  {
    label: "^2",
    type: "pow"
  },
  {
    label: "log",
    type: "log"
  },
  {
    label: "log2",
    type: "log2"
  }
]
