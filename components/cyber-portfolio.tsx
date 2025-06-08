"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"
import {
  ArrowUp,
  ChevronDown,
  ChevronUp,
  Code,
  Github,
  Linkedin,
  Lock,
  Mail,
  Shield,
  MenuIcon,
  XIcon,
  Play,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { useMediaQuery } from "@/hooks/use-media-query"
import AboutMe from "@/components/about-me"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Experience from "@/components/experience"
import ProjectFilter from "@/components/project-filter"
import Contact from "@/components/contact"
import Certifications from "@/components/certifications"
import TerminalSimulation from "@/components/terminal-simulation"
import TypewriterComponent from "typewriter-effect"

export default function CyberPortfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)
  const [scanComplete, setScanComplete] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [scanText, setScanText] = useState("Initializing security scan...")
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState("all")

  const isMobile = useMediaQuery("(max-width: 768px)")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  // Replace this with your actual Google Drive link
  const resumeLink = "https://drive.google.com/your-resume-link-here"

  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    certifications: useRef<HTMLDivElement>(null),
    achievements: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  // Security scanner effect
  useEffect(() => {
    const scanMessages = [
      "Initializing security scan...",
      "Checking for vulnerabilities...",
      "Scanning network ports...",
      "Analyzing system integrity...",
      "Verifying encryption protocols...",
      "Securing communication channels...",
      "Establishing secure connection...",
      "Security scan complete. Welcome.",
    ]

    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < scanMessages.length - 1) {
        currentIndex++
        setScanText(scanMessages[currentIndex])
        setScanProgress((currentIndex / (scanMessages.length - 1)) * 100)
      } else {
        setScanComplete(true)
        clearInterval(interval)
      }
    }, 600)

    return () => clearInterval(interval)
  }, [])

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 100

      if (sectionRefs.contact.current && scrollPosition >= sectionRefs.contact.current.offsetTop) {
        setActiveSection("contact")
      } else if (
        document.getElementById("achievements") &&
        scrollPosition >= document.getElementById("achievements").offsetTop
      ) {
        setActiveSection("achievements")
      } else if (sectionRefs.certifications.current && scrollPosition >= sectionRefs.certifications.current.offsetTop) {
        setActiveSection("certifications")
      } else if (sectionRefs.projects.current && scrollPosition >= sectionRefs.projects.current.offsetTop) {
        setActiveSection("projects")
      } else if (sectionRefs.experience.current && scrollPosition >= sectionRefs.experience.current.offsetTop) {
        setActiveSection("experience")
      } else if (sectionRefs.education.current && scrollPosition >= sectionRefs.education.current.offsetTop) {
        setActiveSection("education")
      } else if (sectionRefs.skills.current && scrollPosition >= sectionRefs.skills.current.offsetTop) {
        setActiveSection("skills")
      } else if (sectionRefs.about.current && scrollPosition >= sectionRefs.about.current.offsetTop) {
        setActiveSection("about")
      } else {
        setActiveSection("hero")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mobile menu handling
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isMobile, isMenuOpen])

  // Scroll to section
  const scrollToSection = (sectionId: keyof typeof sectionRefs) => {
    setIsMenuOpen(false) // Close the menu first

    // Add a small delay to ensure the menu closes first
    setTimeout(() => {
      if (sectionId === "achievements") {
        // Special handling for achievements section
        const achievementsSection = document.getElementById("achievements")
        if (achievementsSection) {
          achievementsSection.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        const sectionElement = sectionRefs[sectionId]?.current
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    }, 100)
  }

  // Project expansion toggle
  const toggleProject = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null)
    } else {
      setExpandedProject(index)
    }
  }

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

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Data
  const projects = [
    {
      title: "Deep Learning Image Classification",
      period: "Jan 2025",
      description: "Built rock-type classifier using advanced CNN architectures with high validation accuracy.",
      details:
        "Built rock-type classifier using InceptionResNetV2/DenseNet201. Customized CNNs with BatchNorm/Dropout layers (15–35%). Achieved 95% validation accuracy.",
      tags: ["Deep Learning", "TensorFlow", "CNN", "Image Classification"],
      categories: ["Python", "AI"],
      securityLevel: "Medium",
    },
    {
      title: "IoT Smart Door System",
      period: "Oct – Dec 2024",
      description:
        "Developed ESP32-based door with ultrasonic proximity detection and MQTT protocol for real-time monitoring.",
      details:
        "Developed ESP32-based door with ultrasonic proximity detection (20cm range). Implemented MQTT protocol for real-time remote monitoring via Node-RED. Programmed C++ firmware with 5s auto-close functionality.",
      tags: ["ESP32", "MQTT", "Node-RED", "C++", "IoT"],
      categories: ["IoT", "C++"],
      securityLevel: "High",
    },
    {
      title: "Machine Learning Regression",
      period: "Jun 2024",
      description: "Predicted vehicle MPG using various machine learning models with high accuracy.",
      details:
        "Predicted vehicle MPG using Linear/SVM/Random Forest models. Optimized hyperparameters via cross-validation. Achieved 92% test accuracy.",
      tags: ["Machine Learning", "Python", "Scikit-learn", "Regression"],
      categories: ["Python", "AI"],
      securityLevel: "Medium",
    },
    {
      title: "Research: Security in IoT Devices",
      period: "Oct – Dec 2023",
      description: "Co-authored paper analyzing credential-based attacks and data anonymization risks in IoT devices.",
      details:
        "Co-authored paper analyzing credential-based attacks and data anonymization risks. Investigated real-world breaches (Mirai botnet, Bluetooth vulnerabilities). Proposed encryption/device management solutions.",
      tags: ["IoT Security", "Research", "Cybersecurity", "Data Privacy"],
      categories: ["Cybersecurity", "IoT"],
      securityLevel: "Critical",
    },
    {
      title: "Snake & Ladder Robot",
      period: "Mar – May 2023",
      description: "Designed an ATmega2560-based robot with line-following algorithms and game logic implementation.",
      details:
        "Designed ATmega2560-based robot with line-following algorithms. Implemented adaptive velocity control for battery-dependent performance. Programmed game logic (random moves, ladder climbs, victory dance).",
      tags: ["ATmega2560", "Embedded C", "Robotics", "Algorithms"],
      categories: ["C++", "Robotics"],
      securityLevel: "Low",
    },
    {
      title: "Toll Gate System",
      period: "March 2025",
      description: "Developed a C++ console-based toll management system to simulate vehicle entries and exits.",
      details:
        "Developed a C++ console-based toll management system to simulate vehicle entries and exits. Implemented data structures to track vehicle types, timestamps, and toll charges dynamically. Added features for admin authentication, real-time fee calculation, and daily revenue summary.",
      tags: ["C++", "Data Structures", "Console Application", "System Design"],
      categories: ["C++", "System Design"],
      securityLevel: "Medium",
      githubLink: "https://github.com/Nishanth1378/Toll-gate-system",
    },
  ]

  // Extract unique categories from projects
  const allCategories = Array.from(new Set(projects.flatMap((project) => project.categories))).sort()

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.some((category) => category.toLowerCase() === activeFilter.toLowerCase()),
        )

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

  if (!scanComplete) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
        <div className="w-full max-w-md px-4">
          <div className="flex items-center justify-center mb-8">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "linear",
              }}
              className="w-16 h-16 border-2 border-[#00ff00] border-t-transparent rounded-full"
            />
          </div>

          <div className="space-y-4">
            <div className="h-2 w-full bg-[#00ff00]/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#00ff00]"
                animate={{ width: `${scanProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="font-mono text-[#00ff00] text-center">
              <p>{scanText}</p>
              <p className="text-sm text-[#00ff00]/70 mt-1">{Math.round(scanProgress)}% complete</p>
            </div>
          </div>
        </div>

        {/* Matrix rain effect */}
        {typeof window !== "undefined" && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-0 text-[#00ff00] font-mono text-sm"
                style={{
                  left: `${i * 5}%`,
                }}
                initial={{ y: -100 }}
                animate={{
                  y: ["0%", "100%"],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3 + Math.random() * 5,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
              >
                {Array.from({ length: 15 }).map((_, j) => (
                  <div key={j} className="my-1">
                    {Math.random() > 0.5 ? "1" : "0"}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#00ff00] relative">
      {/* Background patterns - removed grid background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0"></div>

      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-[#00ff00]/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="font-bold text-sm flex items-center gap-2 text-[#00ff00]">
              <Shield className="h-4 w-4" />
              <span className="font-mono">nishanth@security:~$</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              {Object.keys(sectionRefs).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section as keyof typeof sectionRefs)}
                  className={`text-xs font-mono ${
                    activeSection === section ? "text-[#00ff00]" : "text-[#00ff00]/70 hover:text-[#00ff00]"
                  } transition-colors cursor-pointer`}
                >
                  ./{section}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="text-[#00ff00] hover:bg-[#00ff00]/10"
              >
                {isMenuOpen ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-b border-[#00ff00]/20"
            >
              <nav className="container mx-auto px-4 py-2 flex flex-col space-y-2">
                {Object.keys(sectionRefs).map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section as keyof typeof sectionRefs)}
                    className="text-xs font-mono py-1 text-[#00ff00]/70 hover:text-[#00ff00] transition-colors text-left cursor-pointer"
                  >
                    ./{section}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-14">
        {/* Hero Section */}
        <section
          id="hero"
          ref={sectionRefs.hero}
          className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-10"
        >
          {/* Removed background patterns and grid */}

          {/* Animated scan line */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff00]/10 to-transparent h-[10px] pointer-events-none"
            animate={{
              y: ["0%", "100%", "0%"],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 8,
              ease: "linear",
            }}
          />

          <div className="container px-4 z-10">
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <Shield className="h-8 w-8 text-[#00ff00]" />
                <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-tighter">Nishanth Jothimani</h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-mono text-xl md:text-2xl text-[#00ff00]/80 h-[40px] flex items-center"
              >
                <span className="mr-2">&gt;</span>
                <TypewriterComponent
                  options={{
                    strings: ["Cybersecurity", "AI", "Blockchain", "Computer Science Engineer", "Data Science"],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
                <span className="animate-pulse">_</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full max-w-[700px]"
              >
                <TerminalSimulation
                  commands={[
                    "Computer Science and Data Science student with hands-on expertise in IoT systems.",
                    "Proficient in Python and C/C++ programming with experience in embedded systems.",
                    "Specialized in cybersecurity, machine learning, and data-driven solutions.",
                    "Passionate about building secure and intelligent systems.",
                    "Looking for opportunities to apply my skills in real-world challenges.",
                  ]}
                  typingSpeed={40}
                  deletingSpeed={20}
                  delayBetweenCommands={2000}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild className="bg-[#00ff00] hover:bg-[#00ff00]/80 text-black font-mono">
                  <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                    ./download_cv <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex space-x-4"
              >
                <Link href="https://github.com/Nishanth1378/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full border border-[#00ff00]/30 hover:bg-[#00ff00]/10 text-[#00ff00]"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/j-nishanth-806098274/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full border border-[#00ff00]/30 hover:bg-[#00ff00]/10 text-[#00ff00]"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:nisanthjothimani@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full border border-[#00ff00]/30 hover:bg-[#00ff00]/10 text-[#00ff00]"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <div id="about" ref={sectionRefs.about}>
          <AboutMe />
        </div>
        <div id="skills" ref={sectionRefs.skills}>
          <Skills />
        </div>
        <div id="education" ref={sectionRefs.education}>
          <Education />
        </div>

        {/* Experience Section */}
        <div id="experience" ref={sectionRefs.experience}>
          <Experience />
        </div>

        {/* Projects Section */}
        <section id="projects" ref={sectionRefs.projects} className="py-10 relative">
          <div className="container px-4">
            <div className="space-y-2 text-center mb-6">
              <div className="inline-block bg-black/50 border border-[#00ff00]/30 rounded-md px-3 py-1 mb-1">
                <h2 className="text-xl font-mono font-bold tracking-tighter">
                  <span className="text-[#00ff00]/70">&gt;</span> cat projects.json
                </h2>
              </div>
            </div>

            {/* Project Filter */}
            <ProjectFilter categories={allCategories} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

            {/* Projects Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project, index) => (
                  <Card key={index} className="bg-black/50 border border-[#00ff00]/30 h-full flex flex-col">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-sm font-mono text-[#00ff00]">{project.title}</CardTitle>
                        <Badge
                          variant="outline"
                          className={`text-xs font-mono bg-black/70 ${getSecurityLevelColor(project.securityLevel)}`}
                        >
                          <Lock className="h-3 w-3 mr-1" />
                          {project.securityLevel}
                        </Badge>
                      </div>
                      <CardDescription className="text-xs font-mono text-[#00ff00]/50">
                        {project.period}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pb-2 pt-0 flex-grow">
                      <p className="text-xs font-mono text-[#00ff00]/80">{project.description}</p>

                      {expandedProject === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2"
                        >
                          <p className="text-xs font-mono text-[#00ff00]/70">{project.details}</p>
                        </motion.div>
                      )}
                    </CardContent>

                    <div className="px-4 pb-4">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.tags.slice(0, 3).map((tag) => (
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
                          className="text-xs flex items-center font-mono text-[#00ff00] hover:bg-[#00ff00]/10 h-7 px-2"
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
                            className="text-xs flex items-center font-mono text-[#00ff00] hover:text-black hover:bg-[#00ff00] transition-colors h-7 px-2"
                          >
                            <Play className="h-3 w-3 mr-1" />
                            demo
                          </Button>

                          {project.githubLink ? (
                            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-xs flex items-center font-mono text-[#00ff00] hover:text-black hover:bg-[#00ff00] transition-colors h-7 px-2"
                              >
                                <Code className="h-3 w-3 mr-1" />
                                view_code
                              </Button>
                            </Link>
                          ) : (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleViewCodeClick(project.title)}
                              className="text-xs flex items-center font-mono text-[#00ff00] hover:text-black hover:bg-[#00ff00] transition-colors h-7 px-2"
                            >
                              <Code className="h-3 w-3 mr-1" />
                              view_code
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* No results message */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-10">
                <p className="text-[#00ff00]/70 font-mono">No projects found for this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Certifications Section */}
        <div id="certifications" ref={sectionRefs.certifications}>
          <Certifications />
        </div>

        {/* Contact Section */}
        <div id="contact" ref={sectionRefs.contact}>
          <Contact />
        </div>
      </main>

      {/* Scroll to top button */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <Button
              onClick={scrollToTop}
              size="sm"
              className="rounded-full shadow-lg bg-black border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/10 h-8 w-8 p-0"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
