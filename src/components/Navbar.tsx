import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { LineShadowText } from "./ui/line-shadow-text";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-black shadow-md dark:bg-linear-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-gray-300 dark:shadow-[0_6px_40px_rgba(255,255,255,0.6)]">
      <nav className="w-full flex flex-col sm:flex-row items-center justify-between px-4 py-3 md:px-8 lg:px-10 md:py-4 
        shadow-sm z-50 backdrop-blur-xl bg-white/30 dark:bg-black/30 border-b border-white/10 dark:border-black/10">
        <h1 className="text-lg flex flex-col px-4 leading-none font-semibold tracking-tighter text-balance sm:text-lg md:text-xl lg:text-xl">
          Anime
          <LineShadowText className="italic dark:text-gray-300">
            Phillic
          </LineShadowText>
        </h1>
        <div className="flex justify-between w-full">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild><a href="https://x.com/vivekgotstack">X</a></NavigationMenuLink>
                  <NavigationMenuLink asChild><a href="https://www.linkedin.com/in/randomvivek">LinkedIn</a></NavigationMenuLink>
                  <NavigationMenuLink asChild><a href="https://www.instagram.com/randomvivek">Instagram</a></NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <AnimatedThemeToggler />
        </div>
      </nav>
    </div>
  );
}
