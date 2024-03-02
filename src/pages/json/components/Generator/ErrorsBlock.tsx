import { FieldErrors } from "react-hook-form"
import { z } from "zod"
import { FormOptSchema } from "../../utils/constants/options.constant"

const ErrorsBlock = ({ errors }: { errors: FieldErrors<z.infer<typeof FormOptSchema>> }) => {
  return (
    <div className="space-y-0.5">
      {errors.items && <p className="text-sm text-red-500">{errors.items.message}</p>}
      {errors.count && <p className="text-sm text-red-500">{errors.count.message}</p>}
    </div>
  )
}

export { ErrorsBlock }
