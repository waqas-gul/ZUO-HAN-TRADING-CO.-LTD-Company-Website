"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Fatima Al Hashmi",
    company: "Luxe Beauty Brand",
    content:
      "Zuohan helped me launch my skincare line without any manufacturing headaches. They sourced amazing products and applied my branding perfectly.",
    rating: 5,
  },
  {
    name: "David Chen",
    company: "Tech Accessories Co.",
    content:
      "Incredible service! They found high-quality tech gadgets and created beautiful branded packaging. My products look premium and professional.",
    rating: 5,
  },
  {
    name: "Sofia Rodriguez",
    company: "Eco Lifestyle Brand",
    content:
      "The complete solution I needed. From sourcing sustainable products to handling all logistics - they made brand launching effortless.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    company: "Urban Apparel Co.",
    content:
      "As a first-time entrepreneur, Zuohan guided me through the entire process. The clothing quality exceeded expectations and the branding was flawless.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    company: "Organic Home Goods",
    content:
      "Turned my concept into reality in just 8 weeks. Their sourcing team found exactly what I envisioned and the packaging design was stunning.",
    rating: 5,
  },
  {
    name: "James Wilson",
    company: "Fitness Gear Pro",
    content:
      "From product development to final delivery, Zuohan handled everything professionally. My fitness equipment line looks and feels premium.",
    rating: 5,
  },
  {
    name: "Lena Kowalski",
    company: "Artisan Coffee Co.",
    content:
      "They sourced premium coffee beans and created beautiful packaging that tells my brand story. Sales have doubled since the rebrand.",
    rating: 5,
  },
  {
    name: "Rajiv Kapoor",
    company: "Smart Home Solutions",
    content:
      "Exceptional quality control and attention to detail. My smart home devices have zero defects and the unboxing experience is luxurious.",
    rating: 5,
  },
  {
    name: "Chloe Williams",
    company: "Pet Luxury Brands",
    content:
      "Zuohan understood my vision for premium pet products immediately. The manufacturing quality and branding consistency are outstanding.",
    rating: 5,
  },
  {
    name: "Kenji Tanaka",
    company: "Minimalist Electronics",
    content:
      "Perfect execution from concept to market. They managed complex electronics manufacturing while maintaining my minimalist design aesthetic.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-background">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 rounded-full bg-accent/10 w-fit px-4 py-2 mx-auto mb-4 border border-accent/30">
            <span className="text-sm font-semibold text-accent">Success Stories</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Brands We've Helped Launch</h2>
          <p className="mx-auto max-w-2xl text-lg text-secondary">
            Entrepreneurs and businesses trust us to bring their product ideas to life under their own brand names.
          </p>
        </div>

        <div className="px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="group relative rounded-lg border border-border bg-gradient-to-br from-slate-800 to-slate-900 p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 h-full">
                      <CardContent className="p-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
                        
                        <div className="relative">
                          <div className="mb-4 flex gap-1">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} size={16} className="fill-accent text-accent" />
                            ))}
                          </div>
                          <p className="mb-4 text-secondary italic">"{testimonial.content}"</p>
                          <div>
                            <p className="font-semibold text-white">{testimonial.name}</p>
                            <p className="text-sm text-muted">{testimonial.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-14">
              <CarouselPrevious className="relative static  size-14 transform-none cursor-pointer" size={"icon-lg"}/>
              <CarouselNext className="relative static transform- size-14 cursor-pointer" size={'icon-lg'}/>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}