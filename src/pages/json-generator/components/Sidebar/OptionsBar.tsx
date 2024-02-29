import { OPTIONS_WITH_LINK } from "../../utils/constants/options.constant"

const OptionsBar = () => {
  return (
    <div className="flex w-96 flex-col border-r pr-4 text-sm text-primary/50">
      {OPTIONS_WITH_LINK.map((option) => (
        <a
          key={option.name}
          className="flex items-center gap-2 rounded-lg px-2 py-0.5 hover:bg-secondary"
          target="_blank"
          href={option.href}
        >
          <span className="text-lg">&sdot;</span> {option.name}
        </a>
      ))}
    </div>
  )
}

export { OptionsBar }
