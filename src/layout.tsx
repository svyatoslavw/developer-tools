import { Link, Outlet } from "@tanstack/react-router"
import { GithubIcon } from "./components/icons/GithubIcon"
import { Toaster } from "./components/ui/sonner"
import { links } from "./lib/constants/sidebar.constants"
import { cn } from "./lib/utils"

export default function Layout() {
  return (
    <main className="flex h-svh flex-col items-center space-y-1.5 px-10">
      <div className="flex w-full items-center justify-center space-x-4 py-1 font-[poppins]">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="mt-1.5 w-44 rounded py-0.5 text-center font-medium [&.active]:bg-custom"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className={cn("dark w-full rounded-xl bg-secondary/50 backdrop-blur-3xl ")}>
        <Outlet />
      </div>
      <div className="flex w-full items-center justify-center gap-2 pt-1 text-xs">
        <GithubIcon className="size-4" />
        <a className="cursor-pointer underline-offset-2 hover:underline">View on Github</a>
      </div>
      <Toaster duration={2000} />
    </main>
  )
}
