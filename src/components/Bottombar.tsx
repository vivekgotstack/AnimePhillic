import { Home, Search, Settings } from "lucide-react"
import { Dock, DockIcon } from "@/components/ui/dock"
import { BlurFade } from "./ui/blur-fade"
import { NavLink } from "react-router"

export const Bottombar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50 flex justify-center">
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 flex justify-center">
        <div className="h-[59px] w-48 bg-white/10 dark:bg-black/10 backdrop-blur-xs rounded-xl" />
      </div>

      <BlurFade delay={0.25} inView>
        <Dock className="relative bg-white/10 dark:bg-black/10 rounded-xl">
          <DockIcon><NavLink to='/'><Home /></NavLink></DockIcon>
          <DockIcon><Search /></DockIcon>
          <DockIcon><Settings /></DockIcon>
        </Dock>
      </BlurFade>
    </div>
  )
}

