"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building2, Code2, Cpu, Star, Users } from "lucide-react";

interface TestimonialProps {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  icon: React.ReactNode;
}

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "BIM Manager",
    company: "ArchTech Solutions",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    content:
      "This plugin has revolutionized our CAD-to-Revit workflow. We've reduced conversion time by 75% and eliminated most manual corrections. The auto-update feature ensures we're always working with the latest capabilities.",
    icon: <Building2 className="h-8 w-8 text-primary" />,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Senior Architect",
    company: "Global Design Partners",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    content:
      "After trying multiple conversion tools, this is the only one that accurately preserves our complex CAD geometries. The installation process was seamless, and the documentation is comprehensive and easy to follow.",
    icon: <Code2 className="h-8 w-8 text-primary" />,
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "IT Director",
    company: "Rodriguez Engineering",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    content:
      "From an IT perspective, this plugin is a dream to deploy. The auto-update functionality works flawlessly across our organization, and the system requirement checker saved us countless support tickets.",
    icon: <Cpu className="h-8 w-8 text-primary" />,
  },
  {
    id: 4,
    name: "Emily Taylor",
    role: "Project Coordinator",
    company: "Innovative Builders",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    content:
      "Our team of 50+ designers now relies on this plugin daily. The time savings are substantial, and the accuracy of the conversions has improved our client deliverables significantly.",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
];

const TestimonialsSection = ({
  customTestimonials = testimonials,
}: {
  customTestimonials?: TestimonialProps[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % customTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [customTestimonials.length]);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const cards = sectionRef.current.querySelectorAll(".testimonial-card");
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const scrollPosition = window.scrollY;

      cards.forEach((card, index) => {
        const cardElement = card as HTMLElement;
        // Different parallax speeds for different cards
        const speed = 0.05 + index * 0.01;
        const yOffset = (scrollPosition - sectionTop) * speed;

        if (
          sectionTop < window.innerHeight &&
          sectionTop > -sectionRef.current!.offsetHeight
        ) {
          cardElement.style.transform = `translateY(${yOffset}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden"
      id="testimonials"
    >
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how professionals across the industry are transforming their
            workflows with our Revit plugin
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="mb-16 max-w-4xl mx-auto">
          <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-6 flex-col md:flex-row">
                <div className="flex-shrink-0">
                  <Avatar className="h-20 w-20 border-2 border-primary/20">
                    <AvatarImage
                      src={customTestimonials[activeIndex].avatar}
                      alt={customTestimonials[activeIndex].name}
                    />
                    <AvatarFallback>
                      {customTestimonials[activeIndex].name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg italic">
                    "{customTestimonials[activeIndex].content}"
                  </blockquote>
                  <div>
                    <p className="font-semibold">
                      {customTestimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {customTestimonials[activeIndex].role},{" "}
                      {customTestimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial grid with parallax effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customTestimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`testimonial-card border-primary/10 hover:border-primary/30 transition-all duration-500 ${index === activeIndex ? "opacity-50" : "opacity-100"}`}
              onClick={() => setActiveIndex(index)}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">{testimonial.icon}</div>
                <blockquote className="text-sm mb-4 flex-grow">
                  "{testimonial.content.substring(0, 100)}..."
                </blockquote>
                <div className="flex items-center gap-3 mt-auto">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Join hundreds of professionals who have transformed their Revit
            workflow
          </p>
          <a
            href="#download"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Try It Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
