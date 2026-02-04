import { Sparkles } from "lucide-react"
import { Card, CardContent } from "./card"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Badge } from "./badge"


const TESTIMONIALS = [
  {
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Sarah Johnson",
    role: "Anime obsessed",
    quote:
      "I opened AnimePhillic just to look around and somehow ended up with a longer watchlist than before. Every time I visit, I find something new that makes me say, ‘Okay… just one more episode.’"
  },
  {
    image:
      "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Michael Chen",
    role: "Certified couch potato",
    quote:
      "After a long day, I just want to sit on my couch and figure out what to watch without effort. AnimePhillic makes that part easy, which means I get to stay comfortable longer."
  },
  {
    image:
      "https://images.unsplash.com/photo-1641906840000-4b88f1d44de6?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Emma Rodriguez",
    role: "Random binge watcher",
    quote:
      "I don’t plan my watch sessions at all. I click around, follow my mood, and suddenly hours pass. AnimePhillic fits perfectly with that kind of chaos."
  },
];

export function TestimonialBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <Badge variant="outline" className="mx-auto mb-8 w-max">
            <Sparkles className="mr-2 h-4 w-4" />
            Testimonials
          </Badge>
          <h2 className="mb-4 text-3xl font-bold">What Our Viewers Say</h2>
          <p className="text-muted-foreground mx-auto max-w-lg text-lg">
            Real feedback from anime lovers using AnimePhillic to track,
            discover, and enjoy anime without the usual noise.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, image, role, quote }, key) => (
            <Card key={key} className="border-0 bg-transparent shadow-none">
              <CardContent className="p-0 text-center">
                <Avatar className="mx-auto mb-4 h-20 w-20">
                  <AvatarImage src={image} alt={`${name} image`} />
                  <AvatarFallback>
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <p className="mb-1 text-lg font-semibold">{name}</p>
                <p className="text-muted-foreground mb-4 text-sm">{role}</p>
                <blockquote className="text-muted-foreground mx-auto max-w-lg">
                  &quot;{quote}&quot;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
