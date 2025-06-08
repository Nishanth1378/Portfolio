"use client"

import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"

interface TerminalSimulationProps {
  commands: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenCommands?: number
}

export default function TerminalSimulation({
  commands,
  typingSpeed = 50,
  deletingSpeed = 30,
  delayBetweenCommands = 1000,
}: TerminalSimulationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (commands.length === 0) return

    let timeout: NodeJS.Timeout
    const currentCommand = commands[currentCommandIndex]

    if (isTyping) {
      // Typing animation
      if (displayText.length < currentCommand.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentCommand.substring(0, displayText.length + 1))
        }, typingSpeed)
      } else {
        // Pause at the end of typing before starting to delete
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, delayBetweenCommands)
      }
    } else {
      // Deleting animation
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        }, deletingSpeed)
      } else {
        // Move to the next command
        timeout = setTimeout(() => {
          setCurrentCommandIndex((prevIndex) => (prevIndex + 1) % commands.length)
          setIsTyping(true)
        }, 500)
      }
    }

    return () => clearTimeout(timeout)
  }, [commands, currentCommandIndex, displayText, isTyping, typingSpeed, deletingSpeed, delayBetweenCommands])

  return (
    <div className="w-full bg-black/50 border border-[#00ff00]/30 rounded-md p-4 font-mono text-sm">
      <div className="flex items-center gap-2 mb-2 text-[#00ff00]/70">
        <Terminal className="h-4 w-4" />
        <span>terminal@nishanth:~$</span>
      </div>
      <div className="min-h-[1.5rem]">
        <span className="text-[#00ff00]">{displayText}</span>
        <span className="inline-block w-2 h-4 bg-[#00ff00] ml-1 animate-pulse">&#8203;</span>
      </div>
    </div>
  )
}
