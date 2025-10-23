import { Home, Search, Settings } from "lucide-react"
import { Dock, DockIcon } from "@/components/ui/dock"
import { BlurFade } from "./ui/blur-fade"
import { NavLink } from "react-router"

export const Bottombar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
      <BlurFade delay={0.25} inView>
        <Dock className="backdrop-blur-lg bg-white/20 dark:bg-black/20 rounded-xl shadow-lg border border-white/10 dark:border-black/20">
          <DockIcon className="cursor-none"><NavLink to='/'><Home /></NavLink></DockIcon>
          <DockIcon className="cursor-none"><Search /></DockIcon>
          <DockIcon className="cursor-none"><Settings /></DockIcon>
        </Dock>
      </BlurFade>
    </div>
  )
}
