import { Home, Search, Settings } from "lucide-react"
import { Dock, DockIcon } from "@/components/ui/dock"
import { BlurFade } from "./ui/blur-fade"
import { NavLink } from "react-router"

export const Bottombar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md flex justify-center z-50">
      <BlurFade delay={0.25} inView>
        <Dock className="relative shadow-black shadow-md bg-white/70 dark:shadow-white dark:shadow-sm dark:bg-[#0a0a0a]/90 dark:text-gray-300 border-black/10 dark:border-white/10 rounded-xl">
          <DockIcon>
            <NavLink to="/"><Home /></NavLink>
          </DockIcon>
          <DockIcon><Search /></DockIcon>
          <DockIcon><Settings /></DockIcon>
        </Dock>
      </BlurFade>
    </div>
  )
}

