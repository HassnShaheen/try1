"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Check,
  Download,
  HelpCircle,
  Info,
  Laptop,
  Server,
  Shield,
  X,
} from "lucide-react";

interface SystemRequirement {
  name: string;
  required: string;
  recommended: string;
  status: "pass" | "warning" | "fail";
}

interface InstallationStep {
  title: string;
  description: string;
  image: string;
}

interface DownloadSectionProps {
  version?: string;
  releaseDate?: string;
  fileSize?: string;
  systemRequirements?: SystemRequirement[];
  installationSteps?: InstallationStep[];
}

const DownloadSection = ({
  version = "2.4.1",
  releaseDate = "June 15, 2023",
  fileSize = "42.8 MB",
  systemRequirements = [
    {
      name: "Operating System",
      required: "Windows 10 (64-bit)",
      recommended: "Windows 11 (64-bit)",
      status: "pass",
    },
    {
      name: "Revit Version",
      required: "Revit 2021+",
      recommended: "Revit 2023+",
      status: "pass",
    },
    {
      name: "RAM",
      required: "8 GB",
      recommended: "16 GB",
      status: "warning",
    },
    {
      name: ".NET Framework",
      required: "4.8",
      recommended: "4.8+",
      status: "pass",
    },
    {
      name: "Disk Space",
      required: "200 MB",
      recommended: "500 MB",
      status: "pass",
    },
  ],
  installationSteps = [
    {
      title: "Download the installer",
      description:
        "Click the download button to get the latest version of our Revit plugin.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    },
    {
      title: "Close Revit",
      description:
        "Ensure all Revit instances are closed before proceeding with installation.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    },
    {
      title: "Run the installer",
      description:
        "Double-click the downloaded file and follow the on-screen instructions.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
    {
      title: "Launch Revit",
      description:
        "Open Revit and verify the plugin appears in the Add-Ins tab.",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80",
    },
  ],
}: DownloadSectionProps) => {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState("requirements");

  const handleDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);

    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          return 100;
        }
        return prev + 5;
      });
    }, 300);
  };

  const getStatusIcon = (status: "pass" | "warning" | "fail") => {
    switch (status) {
      case "pass":
        return <Check className="h-5 w-5 text-green-500" />;
      case "warning":
        return <Info className="h-5 w-5 text-amber-500" />;
      case "fail":
        return <X className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Download & Installation
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Get started with our powerful CAD-to-Revit conversion plugin in
            minutes. Simple installation, automatic updates, and seamless
            integration with your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Download Card */}
          <Card className="col-span-1 lg:col-span-1 shadow-lg border-0">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Download Now</CardTitle>
              <CardDescription>
                Latest version: {version} <span className="mx-2">•</span>{" "}
                Released: {releaseDate}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Server className="h-5 w-5 text-slate-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {fileSize}
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800"
                >
                  Latest Release
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">
                    Compatible with:
                  </span>
                  <span className="font-medium">Revit 2021-2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">
                    License:
                  </span>
                  <span className="font-medium">Commercial</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">
                    Updates:
                  </span>
                  <span className="font-medium">Automatic</span>
                </div>
              </div>

              {isDownloading && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      {downloadProgress}%
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {Math.round(
                        (downloadProgress / 100) * parseInt(fileSize),
                      )}{" "}
                      MB / {fileSize}
                    </span>
                  </div>
                  <Progress value={downloadProgress} className="h-2" />
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                size="lg"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <span className="flex items-center">
                    Downloading...{" "}
                    <Download className="ml-2 h-4 w-4 animate-bounce" />
                  </span>
                ) : (
                  <span className="flex items-center">
                    Download <Download className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </CardFooter>
          </Card>

          {/* Requirements & Installation Tabs */}
          <Card className="col-span-1 lg:col-span-2 shadow-lg border-0">
            <CardHeader className="pb-4">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="requirements">
                    System Requirements
                  </TabsTrigger>
                  <TabsTrigger value="installation">
                    Installation Guide
                  </TabsTrigger>
                </TabsList>
                <CardContent>
                  <TabsContent value="requirements" className="mt-0 space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <div className="grid grid-cols-5 gap-4 font-medium text-sm mb-2 px-2">
                        <div className="col-span-2">Requirement</div>
                        <div className="col-span-1">Minimum</div>
                        <div className="col-span-1">Recommended</div>
                        <div className="col-span-1 text-center">Status</div>
                      </div>
                      <Separator className="my-2" />
                      {systemRequirements.map((req, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-5 gap-4 py-3 text-sm px-2 items-center"
                        >
                          <div className="col-span-2 font-medium">
                            {req.name}
                          </div>
                          <div className="col-span-1 text-slate-600 dark:text-slate-400">
                            {req.required}
                          </div>
                          <div className="col-span-1 text-slate-600 dark:text-slate-400">
                            {req.recommended}
                          </div>
                          <div className="col-span-1 flex justify-center">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div>{getStatusIcon(req.status)}</div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  {req.status === "pass" &&
                                    "Meets requirements"}
                                  {req.status === "warning" &&
                                    "Meets minimum requirements"}
                                  {req.status === "fail" &&
                                    "Does not meet requirements"}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                      <HelpCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                      <p className="text-sm text-amber-800 dark:text-amber-300">
                        Not sure if your system is compatible? Use our online
                        system checker tool or contact support for assistance.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="installation" className="mt-0">
                    <div className="space-y-6">
                      {installationSteps.map((step, index) => (
                        <div
                          key={index}
                          className="flex flex-col md:flex-row gap-6 items-start"
                        >
                          <div className="relative flex-shrink-0">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                              {index + 1}
                            </div>
                            {index < installationSteps.length - 1 && (
                              <div className="absolute top-16 bottom-0 left-1/2 w-0.5 -ml-px h-12 bg-slate-200 dark:bg-slate-700 hidden md:block" />
                            )}
                          </div>
                          <div className="flex-1 space-y-3">
                            <h3 className="text-lg font-medium">
                              {step.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                              {step.description}
                            </p>
                            <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                              <img
                                src={step.image}
                                alt={`Installation step ${index + 1}: ${step.title}`}
                                className="w-full h-48 object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </CardContent>
              </Tabs>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg mb-4">
            <Shield className="h-6 w-6 text-primary mr-2" />
            <span className="text-sm font-medium">
              Secure download with automatic virus scanning
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Having trouble with installation? Check out our{" "}
            <a href="#" className="text-primary underline underline-offset-2">
              troubleshooting guide
            </a>{" "}
            or{" "}
            <a href="#" className="text-primary underline underline-offset-2">
              contact our support team
            </a>{" "}
            for assistance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
