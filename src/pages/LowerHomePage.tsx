import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Globe } from "@/components/ui/globe";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { OrbitingCirclesAnimation } from "@/components/ui/orbitAnimation";
import { PointerAnimation } from "@/components/ui/PointerAnimation";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";
import { cn } from "@/lib/utils";

export const LowerHomePage = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pb-8">
      <DotPattern />
      <div className="flex flex-col pt-30 md:flex-row items-center justify-center w-full max-w-6xl gap-12 md:gap-20">
        <div className="relative shrink-0 w-64 sm:w-80 md:w-96 lg:w-md animate-float">
          <Globe className="relative w-full h-auto" />
        </div>

        <div className="flex-1 text-center md:text-left space-y-4">
          <div className="z-10 flex items-center justify-center md:justify-start">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>Zero Ads ✨</span>
              </AnimatedShinyText>
            </div>
          </div>
          <AuroraText className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Unlimited Anime, Zero Cost
          </AuroraText>
          <div className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed pb-2">
            <BlurFade delay={0.2} inView>
              Dive into a vast world of anime, handpicked for true fans
            </BlurFade>
            <BlurFade delay={0.4} inView>
              No subscriptions, no limits, just pure entertainment
            </BlurFade>
          </div>
          <div className="relative inline-flex items-center gap-2">
            <InteractiveHoverButton>
              <p className="flex gap text-center items-center">Get Started</p>
            </InteractiveHoverButton>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 125"
              className="w-14 h-auto text-gray-700 dark:text-white opacity-60 absolute top-2 left-38"
              fill="currentColor"
            >
              <path d="M63.657 54.183c-1.122-.784-2.362-1.475-3.279-2.46-1.4-1.503-3.062-2.367-4.986-2.901-2.39-.663-3.52-.165-4.46 2.112-.222.537-.346 1.117-.476 1.687-.137.602.001 1.113.416 1.625 1.481 1.827 2.951 3.68 4.849 5.081 3.551 2.62 7.289 4.68 12.213 2.844-.779-2.307-1.621-4.48-2.701-6.556-.662-.653-1.307-1.018-1.979-1.432z" />
              <path d="M89.556 37.619c-.19-.825-.406-1.644-.624-2.462-.774-2.897-1.411-5.891-3.547-8.154-3.443-3.648-6.984-7.201-11.583-9.449-2.856-1.396-5.6-3.064-8.788-3.654-1.705-.315-3.366-.753-5.154-.724-3.598.058-7.174-.681-10.805-.22-3.151.4-6.341.082-9.515.193-3.897.137-7.805-.239-11.713-.123-.273.008-.66.038-.808-.573 2.117-1.588 3.977-3.606 6.382-4.957.452-.254.916-.514 1.297-.858.343-.31.543-.757.27-1.236-.291-.511-.748-.454-1.196-.269-.481.198-.982.382-1.412.666-1.435.948-3.034 1.46-4.676 1.881-.375.096-.753.208-1.1.376-2.098 1.013-4.191 2.037-6.28 3.07-3.191 1.578-6.536 2.848-9.443 4.991-.593.437-1.036.762-.982 1.473.07.921.84 1.091 1.55 1.192 1.611.23 3.24.273 4.854.523 6.684 1.033 13.547.311 20.164 2.034.365.095.631-.027.845-.309.259-.339.309-.701.128-1.098-.207-.454-.603-.666-1.028-.85-1.615-.701-3.204-1.457-4.912-1.936-.586-.164-1.319-.113-1.787-.86 3.724-.547 7.413-.374 11.085-.496.317-.011.644.096.958.181 1.078.292 2.173.432 3.29.394 5.146-.172 10.284-.149 15.399.566 1.674.234 3.41.318 4.936 1.043 2.817 1.34 5.58 2.802 8.31 4.315 2.849 1.578 5.254 3.694 6.618 6.713 1.367 3.026 3.021 5.903 4.485 8.878 1.445 2.937 1.668 5.852.85 8.896-.421 1.567-1.064 3.081-1.694 4.582-1.025 2.442-2.668 4.485-4.519 6.325-1.588 1.578-3.604 2.479-5.912 3.028-1.242-4.407-3.282-8.165-5.956-11.533-1.189-1.497-2.358-3.154-4.188-4.014-4.212-1.979-8.543-3.422-13.313-2.986-2.324.213-3.004.697-3.65 2.985-.177.627-.325 1.265-.55 1.874-1.29 3.489-.294 6.625 1.49 9.624 1.176 1.976 3.003 3.345 4.702 4.819 2.039 1.768 4.599 2.655 6.909 3.964 1.829 1.036 3.784 1.588 5.966 1.483 1.174-.056 2.404.18 3.65.119.3 2.906.353 5.578-.527 8.273-.833 2.551-2.446 4.571-3.884 6.734-1.405 2.114-3.517 3.486-5.444 4.97-1.714 1.32-3.843 2.191-5.905 2.943-1.802.657-3.572 1.552-5.593 1.539-1.929-.013-3.856-.024-5.782-.069-1.853-.043-3.609-.221-5.25-.981-1.313-.608-2.947-.771-3.65-2.414-.235-.551-.81-1.017-1.633-.811.005.195-.062.427.026.542.706.922 1.422 1.838 2.18 2.718.246.286.606.496.949.672 3.589 1.843 7.205 3.604 11.398 3.477.685-.021 1.242.63 2.053.236 1.065-.517 2.288-.411 3.448-.543 2.006-.229 3.942-.628 5.863-1.378 2.6-1.016 4.776-2.66 7.059-4.142 2.266-1.471 4.06-3.521 5.458-5.792 1.471-2.388 2.301-5.098 2.969-7.832.635-2.602 1.022-5.244 1.266-7.908.06-.653.039-1.345.837-1.602 1.934-.623 3.538-1.906 5.389-2.691.738-.313 1.349-.806 1.892-1.367 1.042-1.077 2.065-2.174 3.047-3.306.988-1.14 1.776-2.399 2.242-3.864.612-1.923 1.248-3.843 1.98-5.722.914-2.355.965-6.055.101-9.813z" />
            </svg>
          </div>
        </div>
      </div>
      <BlurFade
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8 pt-16"
        delay={0.2}
        inView
      >
        <div className="w-full md:w-1/2 text-center md:text-left">
          <PointerAnimation />
        </div>

        <div className="relative flex h-[500px] w-full md:w-1/2 flex-col items-center justify-center">
          <OrbitingCirclesAnimation />
        </div>
      </BlurFade>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <ScrollVelocityContainer className="text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-20">
          <ScrollVelocityRow baseVelocity={20} direction={1}>
            Anime
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={20} direction={-1} className="italic">
            Phillic
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </section>
  );
};
