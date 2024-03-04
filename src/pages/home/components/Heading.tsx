import { TypeAnimation } from "react-type-animation"

const Heading = () => {
  return (
    <div className="w-[42%]">
      <span className="text-[2.7em] font-bold">
        Useful tools for React Developers to work with{" "}
        <TypeAnimation
          sequence={["Scrollbar Styling", 1500, "JSON Data", 1500, "Grid Markup", 1500]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ display: "inline-block", color: "#5bb98a", fontWeight: 700 }}
        />
      </span>
      <p className="py-10 font-medium tracking-wider">
        Using this service you can create a JSON data array of any length, with any options that the
        faker.js library provides. And also play with styles for the scrollbar or create a personal
        table using grid.
      </p>
      <p className="text-sm font-medium tracking-wider">
        If this helped you solve your problems or you saved time, I'm waiting for a star in the{" "}
        <a
          target="_blank"
          href="https://github.com/svyatoslavw/developer-tools"
          className=" cursor-pointer underline underline-offset-2"
        >
          github repo
        </a>
      </p>
    </div>
  )
}

export { Heading }
