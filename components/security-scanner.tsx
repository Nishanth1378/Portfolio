"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function SecurityScanner() {
  const [scanComplete, setScanComplete] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [scanText, setScanText] = useState("Initializing security scan...")

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
    }, 800)

    return () => clearInterval(interval)
  }, [])

  if (scanComplete) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
      animate={{ opacity: scanComplete ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (scanComplete) {
          document.body.style.overflow = "auto"
        } else {
          document.body.style.overflow = "hidden"
        }
      }}
    >
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <MatrixRain />
      </div>
    </motion.div>
  )
}

function MatrixRain() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 opacity-20">
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
  )
}
