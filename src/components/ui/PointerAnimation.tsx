import { MagicCard } from "./magic-card";
import { TextAnimate } from "./text-animate";

export function PointerAnimation() {
    const cards = [
        {
            title: "All anime. Zero limits.",
            desc: "Ad-free streaming made for real fans.",
        },
        {
            title: "Your anime world awaits.",
            desc: "Dive deep into endless anime.",
        },
        {
            title: "Discover. Stream. Feel.",
            desc: "Every frame hits different.",
        },
        {
            title: "All your favorites here.",
            desc: "Welcome to the next era of anime.",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg">
            {cards.map((card, i) => (
                <MagicCard key={i}>
                    <div className="flex h-40 flex-col items-center justify-center border border-border rounded-lg p-4 text-center">
                        <TextAnimate once delay={0.5} className="text-xl font-semibold">{card.title}</TextAnimate>
                        <TextAnimate once animation="slideLeft" by="character" className="text-muted-foreground text-sm" delay={0.8}>{card.desc}</TextAnimate>
                    </div>
                </MagicCard>
            ))}
        </div>
    );
}
