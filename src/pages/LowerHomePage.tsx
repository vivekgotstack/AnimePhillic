import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BlurFade } from "@/components/ui/blur-fade"
import { TestimonialBlock } from "@/components/ui/testimonials"
import { ContactSection } from "./ContactSection"
import { Ripple } from "@/components/ui/ripple";

export default function LowererHomePage() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pb-8">
            <div className="pt-36">
                <Accordion type="single" collapsible defaultValue="discover">
                    <AccordionItem value="discover">
                        <AccordionTrigger className="tracking-tight text-2xl font-bold">
                            Discover Anime
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed text-lg font-medium">
                            Explore trending, top-rated, and hidden-gem anime across genres.
                            AnimePhillic helps you discover what to watch next without the noise.
                            Find anime based on mood, genre, popularity, and community interest.
                            Stop endless scrolling and start watching what actually fits your taste.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="watchlist">
                        <AccordionTrigger className="tracking-tight text-2xl font-bold">
                            Personal Watchlist
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed text-lg font-medium">
                            Save anime you love or plan to watch later.
                            Your watchlist stays synced with your account across devices.
                            Keep track of completed, ongoing, and planned anime effortlessly.
                            Never forget where you left off or what you wanted to watch next.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="recommendations">
                        <AccordionTrigger className="tracking-tight text-2xl font-bold">
                            Smart Recommendations
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed text-lg font-medium">
                            Get anime recommendations based on your interests and watch history.
                            Discover shows suggested by trends and community activity.
                            Recommendations improve as you interact and explore more anime.
                            No random picks—only suggestions that match your taste.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>

            <BlurFade
                className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8 pt-16"
                delay={0.6}
                inView
            >
                <TestimonialBlock />
            </BlurFade>

            <BlurFade
                className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8 pt-16"
                delay={0.6}
                inView
            >
                <ContactSection />
            </BlurFade>
            <Ripple />
        </section>
    );
}