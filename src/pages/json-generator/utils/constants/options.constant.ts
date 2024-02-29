import { faker } from "@faker-js/faker"
import { z } from "zod"

export const OPTIONS_WITH_LINK = [
  { name: "Airline", href: "https://fakerjs.dev/api/airline.html" },
  { name: "Animal", href: "https://fakerjs.dev/api/animal.html" },
  { name: "Color", href: "https://fakerjs.dev/api/color.html" },
  { name: "Commerce", href: "https://fakerjs.dev/api/commerce.html" },
  { name: "Company", href: "https://fakerjs.dev/api/company.html" },
  { name: "Database", href: "https://fakerjs.dev/api/database.html" },
  { name: "Datatype", href: "https://fakerjs.dev/api/datatype.html" },
  { name: "Date", href: "https://fakerjs.dev/api/date.html" },
  { name: "Finance", href: "https://fakerjs.dev/api/finance.html" },
  { name: "Git", href: "https://fakerjs.dev/api/git.html" },
  { name: "Hacker", href: "https://fakerjs.dev/api/hacker.html" },
  { name: "Helpers", href: "https://fakerjs.dev/api/helpers.html" },
  { name: "Image", href: "https://fakerjs.dev/api/image.html" },
  { name: "Internet", href: "https://fakerjs.dev/api/internet.html" },
  { name: "Location", href: "https://fakerjs.dev/api/location.html" },
  { name: "Lorem", href: "https://fakerjs.dev/api/lorem.html" },
  { name: "Music", href: "https://fakerjs.dev/api/music.html" },
  { name: "Number", href: "https://fakerjs.dev/api/number.html" },
  { name: "Person", href: "https://fakerjs.dev/api/person.html" },
  { name: "Phone", href: "https://fakerjs.dev/api/phone.html" },
  { name: "Random", href: "https://fakerjs.dev/api/random.html" },
  { name: "Science", href: "https://fakerjs.dev/api/science.html" },
  { name: "String", href: "https://fakerjs.dev/api/string.html" },
  { name: "System", href: "https://fakerjs.dev/api/system.html" },
  { name: "Vehicle", href: "https://fakerjs.dev/api/vehicle.html" },
  { name: "Word", href: "https://fakerjs.dev/api/word.html" }
]

export const generateInitialOptions = () => {
  return {
    name: faker.person.fullName(),
    city: faker.location.city(),
    country: faker.location.country(),
    image: faker.image.url(),
    phone: faker.phone.number(),
    number: faker.number.int({ min: 100, max: 99999 }),
    price: faker.commerce.price({ min: 0, max: 100000, dec: 0, symbol: "$" }),
    product: faker.commerce.product(),
    date: faker.date.anytime().toISOString()
  }
}

export const FormOptItemSchema = z.object({
  id: z.string(),
  label: z.string(),
  option: z.union([z.string(), z.number()])
})

export const FormOptSchema = z.object({
  count: z
    .string()
    .min(1, "Quantity must be at least 1 character")
    .max(300)
    .refine(
      (value) => {
        const count = +value
        return !isNaN(count) && count <= 300
      },
      {
        message: "Max quantity of objects = 300"
      }
    ),
  items: z.array(FormOptItemSchema).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item."
  })
})
