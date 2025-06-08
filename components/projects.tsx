"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Code, Lock, Play } from "lucide-react"
import Link from "next/link"
import { toast } from "@/components/ui/use-toast"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  // Handle demo button click
  const handleDemoClick = (projectTitle: string) => {
    toast({
      title: "Demo not available",
      description: `The demo for "${projectTitle}" is not deployed yet.`,
      variant: "destructive",
    })
  }

  // Handle view code button click
  const handleViewCodeClick = (projectTitle: string) => {
    toast({
      title: "Source code not available",
      description: `The code for "${projectTitle}" is not uploaded to GitHub yet.`,
      variant: "destructive",
    })
  }

  const projects = [
    {
      title: "Snake & Ladder Robot",
      period: "Mar – May 2023",
      description: "Designed an ATmega2560-based robot with line-following algorithms and game logic implementation.",
      details: [
        "Designed ATmega2560-based robot with line-following algorithms.",
        "Implemented adaptive velocity control for battery-dependent performance.",
        "Programmed game logic (random moves, ladder climbs, victory dance).",
      ],
      tags: ["ATmega2560", "Embedded C", "Robotics", "Algorithms"],
      image: "/robotic-race.png",
      securityLevel: "Low",
    },
    {
      title: "Research: Security in IoT Devices",
      period: "Oct – Dec 2023",
      description: "Co-authored paper analyzing credential-based attacks and data anonymization risks in IoT devices.",
      details: [
        "Co-authored paper analyzing credential-based attacks and data anonymization risks.",
        "Investigated real-world breaches (Mirai botnet, Bluetooth vulnerabilities).",
        "Proposed encryption/device management solutions.",
      ],
      tags: ["IoT Security", "Research", "Cybersecurity", "Data Privacy"],
      image: "/interconnected-iot-security.png",
      securityLevel: "Critical",
    },
    {
      title: "IoT Smart Door System",
      period: "Oct – Dec 2024",
      description:
        "Developed ESP32-based door with ultrasonic proximity detection and MQTT protocol for real-time monitoring.",
      details: [
        "Developed ESP32-based door with ultrasonic proximity detection (20cm range).",
        "Implemented MQTT protocol for real-time remote monitoring via Node-RED.",
        "Programmed C++ firmware with 5s auto-close functionality.",
      ],
      tags: ["ESP32", "MQTT", "Node-RED", "C++", "IoT"],
      image: "/smart-door-proximity.png",
      securityLevel: "High",
    },
    {
      title: "Machine Learning Regression",
      period: "Jun 2024",
      description: "Predicted vehicle MPG using various machine learning models with high accuracy.",
      details: [
        "Predicted vehicle MPG using Linear/SVM/Random Forest models.",
        "Optimized hyperparameters via cross-validation.",
        "Achieved 92% test accuracy.",
      ],
      tags: ["Machine Learning", "Python", "Scikit-learn", "Regression"],
      image: "/regression-model-visualization.png",
      securityLevel: "Medium",
    },
    {
      title: "Deep Learning Image Classification",
      period: "Jan 2025",
      description: "Built rock-type classifier using advanced CNN architectures with high validation accuracy.",
      details: [
        "Built rock-type classifier using InceptionResNetV2/DenseNet201.",
        "Customized CNNs with BatchNorm/Dropout layers (15–35%).",
        "Achieved 95% validation accuracy.",
      ],
      tags: ["Deep Learning", "TensorFlow", "CNN", "Image Classification"],
      image: "/rock-classification-grid.png",
      securityLevel: "Medium",
    },
    {
      title: "Toll Gate System",
      period: "March 2025",
      description: "Developed a C++ console-based toll management system to simulate vehicle entries and exits.",
      details: [
        "Developed a C++ console-based toll management system to simulate vehicle entries and exits.",
        "Implemented data structures to track vehicle types, timestamps, and toll charges dynamically.",
        "Added features for admin authentication, real-time fee calculation, and daily revenue summary.",
      ],
      tags: ["C++", "Data Structures", "Console Application", "System Design"],
      image: "/toll-gate-console.png",
      securityLevel: "Medium",
      githubLink: "https://github.com/Nishanth1378/Toll-gate-system",
    },
  ]

  const toggleProject = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null)
    } else {
      setExpandedProject(index)
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const getSecurityLevelColor = (level: string) => {
    switch (level) {
      case "Critical":
        return "text-red-500 border-red-500/50"
      case "High":
        return "text-orange-500 border-orange-500/50"
      case "Medium":
        return "text-yellow-500 border-yellow-500/50"
      case "Low":
        return "text-blue-500 border-blue-500/50"
      default:
        return "text-[#00ff00] border-[#00ff00]/50"
    }
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-[url('/hex-bg.png')] opacity-5 pointer-events-none"></div>
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <div className="space-y-2 text-center">
            <div className="inline-block bg-black/50 border border-[#00ff00]/30 rounded-md px-4 py-1 mb-2">
              <h2 className="text-3xl font-mono font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="text-[#00ff00]/70">&gt;</span> cat projects.json
              </h2>
            </div>
            <p className="mx-auto max-w-[700px] text-[#00ff00]/70 font-mono">
              A showcase of my technical projects and research work.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={item} className="h-full">
                <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow duration-300 bg-black/50 border border-[#00ff00]/30">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />

                    {/* Security level badge */}
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant="outline"
                        className={`text-xs font-mono bg-black/70 ${getSecurityLevelColor(project.securityLevel)}`}
                      >
                        <Lock className="h-3 w-3 mr-1" />
                        {project.securityLevel} Security
                      </Badge>
                    </div>

                    {/* Scan effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-[#00ff00]/5 to-transparent h-[5px] pointer-events-none"
                      animate={{
                        y: ["0%", "100%", "0%"],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        ease: "linear",
                        delay: index * 0.2,
                      }}
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className="font-mono text-[#00ff00]">{project.title}</CardTitle>
                    <CardDescription className="font-mono text-[#00ff00]/70">{project.period}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-sm font-mono text-[#00ff00]/80">{project.description}</p>

                    {expandedProject === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <ul className="list-disc pl-5 space-y-1 text-sm font-mono text-[#00ff00]/80">
                          {project.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </CardContent>

                  <CardFooter className="flex flex-col space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs font-mono bg-black border-[#00ff00]/30 text-[#00ff00]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between w-full">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleProject(index)}
                        className="text-xs flex items-center font-mono text-[#00ff00] hover:bg-[#00ff00]/10"
                      >
                        {expandedProject === index ? (
                          <>
                            <ChevronUp className="h-3 w-3 mr-1" />
                            collapse
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-3 w-3 mr-1" />
                            expand
                          </>
                        )}
                      </Button>

                      <div className="flex space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDemoClick(project.title)}
                          className="text-xs flex items-center font-mono text-[#00ff00] hover:bg-[#00ff00]/10"
                        >
                          <Play className="h-3 w-3 mr-1" />
                          demo
                        </Button>

                        {project.githubLink ? (
                          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-xs flex items-center font-mono text-[#00ff00] hover:bg-[#00ff00]/10"
                            >
                              <Code className="h-3 w-3 mr-1" />
                              view_source
                            </Button>
                          </Link>
                        ) : (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleViewCodeClick(project.title)}
                            className="text-xs flex items-center font-mono text-[#00ff00] hover:bg-[#00ff00]/10"
                          >
                            <Code className="h-3 w-3 mr-1" />
                            view_source
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
