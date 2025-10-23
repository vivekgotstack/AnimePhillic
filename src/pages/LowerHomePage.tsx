import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Globe } from "@/components/ui/globe";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { OrbitingCirclesAnimation } from "@/components/ui/orbitAnimation";
import { PointerAnimation } from "@/components/ui/PointerAnimation";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";

export const LowerHomePage = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pb-8 ">
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
            <TextAnimate animation="blurInUp" by="character" once duration={2}>
              Dive into a vast world of anime, handpicked for true fans
            </TextAnimate>
            <TextAnimate animation="blurInUp" by="character" once delay={2} duration={2}>
              No subscriptions, no limits, just pure entertainment
            </TextAnimate>
          </div>
          <div>
          <InteractiveHoverButton>
            <p className="flex gap text-center items-center">Get Started</p>
          </InteractiveHoverButton>
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
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
      </div>
    </section>
  );
};
