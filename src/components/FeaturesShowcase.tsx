"use client";

import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { Cpu, FileCode2, Layers, RefreshCw, Zap } from "lucide-react";

// ✅ تعريف النوع المسموح للقيمة demoType
type DemoType = "video" | "image" | "gif";

const FeaturesShowcase = () => {
  const features: {
    title: string;
    description: string;
    icon: JSX.Element;
    demoUrl: string;
    demoType: DemoType;
    demoThumbnail: string;
  }[] = [
    {
      title: "Intelligent Geometry Conversion",
      description:
        "Automatically convert CAD lines, arcs, and polylines to native Revit elements with precise geometry preservation.",
      icon: <Layers className="h-6 w-6" />,
      demoUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
      demoType: "image",
      demoThumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&q=60",
    },
    {
      title: "Smart Property Mapping",
      description:
        "Transfer CAD layer properties to Revit parameters automatically with our intelligent mapping system.",
      icon: <FileCode2 className="h-6 w-6" />,
      demoUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      demoType: "image",
      demoThumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=60",
    },
    {
      title: "Automatic Updates",
      description:
        "Keep your plugin up-to-date with our seamless update system that ensures you always have the latest features.",
      icon: <RefreshCw className="h-6 w-6" />,
      demoUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      demoType: "image",
      demoThumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=60",
    },
    {
      title: "High-Performance Processing",
      description:
        "Convert even the most complex CAD files quickly with our optimized processing engine that leverages multi-threading.",
      icon: <Cpu className="h-6 w-6" />,
      demoUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      demoType: "image",
      demoThumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=60",
    },
    {
      title: "Batch Conversion",
      description:
        "Process multiple CAD files at once with our powerful batch conversion tool, saving hours of manual work.",
      icon: <Zap className="h-6 w-6" />,
      demoUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      demoType: "image",
      demoThumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=60",
    },
    {
      title: "Custom Mapping Rules",
      description:
        "Create your own mapping rules to match your specific workflow and standards for consistent results.",
      icon: <FileCode2 className="h-6 w-6" />,
      demoUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      demoType: "image",
      demoThumbnail: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=60",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="w-full py-24 bg-gradient-to-b from-background via-background/95 to-muted/30 relative overflow-hidden"
      id="features"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 gradient-text inline-block">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our plugin offers a comprehensive set of tools designed to streamline your CAD-to-Revit workflow.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                demoUrl={feature.demoUrl}
                demoType={feature.demoType}
                demoThumbnail={feature.demoThumbnail}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Zap className="h-4 w-4 mr-2 animate-pulse" />
            <span>New features added regularly</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
