"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Linkedin, Mail, Shield } from "lucide-react"
import Link from "next/link"
import TerminalSimulation from "./terminal-simulation"

export default function Hero() {
  // No mouse position state needed
  const terminalRef = useRef<HTMLDivElement>(null)

  // Replace this with your actual Google Drive link
  const resumeLink = "https://drive.google.com/your-resume-link-here"

  const terminalCommands = [
    "Computer Science and Data Science student with hands-on expertise in IoT systems.",
    "Proficient in Python and C/C++ programming with experience in embedded systems.",
    "Specialized in cybersecurity, machine learning, and data-driven solutions.",
    "Passionate about building secure and intelligent systems.",
    "Looking for opportunities to apply my skills in real-world challenges.",
  ]

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10"></div>

      {/* Static gradient background that doesn't depend on mouse position */}
      <div className="absolute inset-0 bg-gradient-radial from-[#9333ff]/20 via-transparent to-transparent"></div>

      {/* Animated scan line */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9333ff]/10 to-transparent h-[10px] pointer-events-none"
        animate={{
          y: ["0%", "100%", "0%"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 8,
          ease: "linear",
        }}
      />

      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <Shield className="h-8 w-8 text-[#9333ff]" />
            <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-tighter">Nishanth Jothimani</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-xl md:text-2xl text-[#9333ff]/80 h-[40px] flex items-center"
          >
            <span className="mr-2">&gt;</span>
            <span className="text-[#9333ff]">Cybersecurity</span>
            <span className="animate-pulse ml-1">_</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            ref={terminalRef}
            className="w-full max-w-[700px]"
          >
            <TerminalSimulation
              commands={terminalCommands}
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
            <Button asChild className="bg-[#9333ff] hover:bg-[#9333ff]/80 text-white font-mono">
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
                className="rounded-full border border-[#9333ff]/30 hover:bg-[#9333ff]/10 text-[#9333ff]"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/j-nishanth-806098274/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-[#9333ff]/30 hover:bg-[#9333ff]/10 text-[#9333ff]"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:nisanthjothimani@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-[#9333ff]/30 hover:bg-[#9333ff]/10 text-[#9333ff]"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-[#9333ff]/70 mb-2 font-mono">scroll_down.exe</p>
          <div className="w-6 h-10 border-2 border-[#9333ff]/30 rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
              }}
              className="w-1.5 h-1.5 bg-[#9333ff] rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
