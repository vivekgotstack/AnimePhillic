import { useEffect, useState } from "react";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { RetroGrid } from "@/components/ui/retro-grid";
import { BlurFade } from "@/components/ui/blur-fade";
import { MorphingText } from "@/components/ui/morphing-text";

export const UpperHomePage = () => {
    const [shadowColor, setShadowColor] = useState("black");
    const texts = [
        "Epic",
        "Prime",
        "Bold",
        "Glory",
        "Vivid",
        "Royal",
        "Valor",
        "Noble",
        "Swift",
        "True",
        "Sharp",
        "Nova",
        "Pulse"
    ];

    useEffect(() => {
        const updateShadow = () => {
            const isDark = document.documentElement.classList.contains("dark");
            setShadowColor(isDark ? "white" : "rgba(0,0,0,1)");
        };

        updateShadow();

        const observer = new MutationObserver(() => updateShadow());
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);

    return (
        <BlurFade delay={0.5} className="bg-background relative flex h-[70vh] md:h-screen w-full flex-col gap-10 items-center justify-center overflow-hidden rounded-lg border">
            <h1 className="text-6xl leading-none font-semibold tracking-tighter text-balance sm:text-7xl md:text-8xl lg:text-9xl">
                Anime
                <LineShadowText className="italic" shadowColor={shadowColor}>
                    Phillic
                </LineShadowText>
            </h1>
            <div className="mt-4 w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-4 leading-snug flex justify-center flex-wrap" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <span style={{ fontFamily: "'Great Vibes', cursive" }}>The&nbsp;</span>
                <span
                    className="tracking-tighter font-semibold inline-flex justify-center p-2 -translate-y-4"
                    style={{ minWidth: `${Math.max(...texts.map(t => t.length))}ch` }}
                >
                    <MorphingText texts={texts} />
                </span>
                <span style={{ fontFamily: "'Great Vibes', cursive" }}>&nbsp;Destination to Watch, Discover, and Live Anime Like Never Before</span>
            </div>

            <RetroGrid />
        </BlurFade>
    );
};
