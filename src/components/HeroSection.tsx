"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        {/* Lightning effects */}
        <div className="absolute top-1/4 left-1/4 w-1 h-40 bg-accent/80 rotate-45 animate-lightning blur-sm" />
        <div className="absolute top-1/3 right-1/3 w-1 h-60 bg-accent/80 -rotate-45 animate-lightning blur-sm" />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-40 bg-accent/80 rotate-45 animate-lightning blur-sm" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-2">
              <Zap className="h-4 w-4 mr-2 animate-pulse" />
              <span>Revolutionary CAD to Revit Conversion</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight gradient-text">
              Transform CAD to Revit
              <span className="block">In One Click</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-[600px]">
              Our plugin uses advanced AI to convert CAD files to native Revit
              elements with perfect geometry and properties preservation, saving
              you hours of manual work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="group lightning-border">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                Watch Demo
                <span className="ml-2 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <span className="sr-only">Play</span>
                  <svg
                    width="6"
                    height="8"
                    viewBox="0 0 6 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.5 0.5V7.5L5.5 4L0.5 0.5Z" fill="currentColor" />
                  </svg>
                </span>
              </Button>
            </div>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                    alt={`User ${i}`}
                    className="w-8 h-8 rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <span>Trusted by 10,000+ architects & engineers</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: scrollY * -0.1 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur-xl opacity-50 animate-pulse-slow"></div>
              <div className="relative bg-card rounded-xl shadow-2xl overflow-hidden border border-border">
                <div className="p-1">
                  <img
                    src="https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800&q=80"
                    alt="CAD to Revit Conversion"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">
                        Before: CAD Drawing
                      </div>
                      <div className="text-xs text-muted-foreground">
                        2D lines and arcs
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">
                        After: Revit Model
                      </div>
                      <div className="text-xs text-muted-foreground">
                        3D BIM elements
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 w-full bg-muted rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>

                {/* Floating UI elements */}
                <div className="absolute top-6 right-6 px-3 py-1.5 bg-primary/90 text-primary-foreground rounded-md text-sm font-medium animate-float shadow-lg">
                  <span className="flex items-center">
                    <Zap className="h-3.5 w-3.5 mr-1.5" />
                    Intelligent Mapping
                  </span>
                </div>

                <div
                  className="absolute top-1/3 left-6 px-3 py-1.5 bg-secondary/90 text-secondary-foreground rounded-md text-sm font-medium animate-float shadow-lg"
                  style={{ animationDelay: "0.5s" }}
                >
                  <span className="flex items-center">
                    <svg
                      className="h-3.5 w-3.5 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 7.5V6.75C21 5.50736 19.9926 4.5 18.75 4.5H5.25C4.00736 4.5 3 5.50736 3 6.75V17.25C3 18.4926 4.00736 19.5 5.25 19.5H18.75C19.9926 19.5 21 18.4926 21 17.25V16.5M12 12L21 7.5M12 12L3 7.5M12 12L12 21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Property Transfer
                  </span>
                </div>

                <div
                  className="absolute bottom-1/3 right-6 px-3 py-1.5 bg-accent/90 text-accent-foreground rounded-md text-sm font-medium animate-float shadow-lg"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="flex items-center">
                    <svg
                      className="h-3.5 w-3.5 mr-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33789 17L9.16789 11.17M14.8379 17H20.6679M3.33789 7H9.16789M14.8379 7L20.6679 12.83"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Precise Geometry
                  </span>
                </div>
              </div>
            </div>

            {/* Logos */}
            <div
              className="absolute -bottom-8 -right-8 w-24 h-24 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-border animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Autodesk_Logo.svg/1200px-Autodesk_Logo.svg.png"
                alt="Autodesk Logo"
                className="w-16 h-auto"
              />
            </div>

            <div
              className="absolute -top-6 -left-6 w-20 h-20 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-border animate-float"
              style={{ animationDelay: "0.8s" }}
            >
              <img
                src="https://seeklogo.com/images/A/autodesk-revit-logo-C3F5E6D48D-seeklogo.com.png"
                alt="Revit Logo"
                className="w-12 h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
