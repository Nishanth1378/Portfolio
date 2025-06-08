"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Shield, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About Me", href: "#about" },
    { name: "Technical Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "My Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certification's", href: "#certifications" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false)
    }
  }, [isMobile, isOpen])

  const handleNavClick = (href: string) => {
    setIsOpen(false) // Close the menu

    // Scroll to the section after a small delay to ensure the menu closes first
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-[#00ff00]/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-lg flex items-center gap-2 text-[#00ff00]">
            <Shield className="h-5 w-5" />
            <span className="font-mono">nishanth@security:~$</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="text-sm font-mono text-[#00ff00]/70 hover:text-[#00ff00] transition-colors cursor-pointer"
              >
                ./{item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-[#00ff00] hover:bg-[#00ff00]/10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-b border-[#00ff00]/20"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="text-sm font-mono py-2 text-[#00ff00]/70 hover:text-[#00ff00] transition-colors cursor-pointer"
                >
                  ./{item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
