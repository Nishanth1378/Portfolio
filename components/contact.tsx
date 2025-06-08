"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Github, Linkedin, Mail, MapPin, Phone, Shield, Terminal } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [accessGranted, setAccessGranted] = useState(false)

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with the provided public key
    emailjs.init("fXrqI6ZoHGBqrR6jf")
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.from_name,
          email: formData.from_email,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const data = await response.json()
      
      toast({
        title: "Message sent successfully",
        description: "Your message has been delivered and saved.",
      })
      
      setFormData({ from_name: "", from_email: "", message: "" })
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-[#00ff00]" />,
      label: "Email",
      value: "nisanthjothimani@gmail.com",
      href: "mailto:nisanthjothimani@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-[#00ff00]" />,
      label: "Phone",
      value: "+91 97042 89749",
      href: "tel:+919704289749",
    },
    {
      icon: <MapPin className="h-5 w-5 text-[#00ff00]" />,
      label: "Location",
      value: "Chennai, India",
      href: null,
    },
    {
      icon: <Linkedin className="h-5 w-5 text-[#00ff00]" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/j-nishanth-806098274/",
    },
    {
      icon: <Github className="h-5 w-5 text-[#00ff00]" />,
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/Nishanth1378/",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-[url('/matrix-code.png')] opacity-5 pointer-events-none"></div>
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
                <span className="text-[#00ff00]/70">&gt;</span> ssh contact@nishanth.dev
              </h2>
            </div>
            <p className="mx-auto max-w-[700px] text-[#00ff00]/70 font-mono">
              Establish a secure connection. All communications are end-to-end encrypted.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-black/50 border border-[#00ff00]/30">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#00ff00]" />
                  <CardTitle className="font-mono text-[#00ff00]">Secure Contact Channels</CardTitle>
                </div>
                <CardDescription className="font-mono text-[#00ff00]/70">
                  Verified communication endpoints
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black border border-[#00ff00]/30 flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-mono font-medium text-[#00ff00]">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm font-mono text-[#00ff00]/70 hover:text-[#00ff00] transition-colors"
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-mono text-[#00ff00]/70">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-[#00ff00]/30">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-[#00ff00]" />
                  <CardTitle className="font-mono text-[#00ff00]">Message Authentication</CardTitle>
                </div>
                <CardDescription className="font-mono text-[#00ff00]/70">
                  Complete the form to establish encrypted communication
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="from_name" className="font-mono text-[#00ff00]">
                      Identifier
                    </Label>
                    <div className="relative">
                      <Input
                        id="from_name"
                        name="from_name"
                        placeholder="Your name"
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                        className="bg-black border-[#00ff00]/30 text-[#00ff00] font-mono focus:border-[#00ff00] focus:ring-[#00ff00]/20"
                      />
                      <div className="absolute top-0 left-0 w-full h-full pointer-events-none border border-[#00ff00]/30 rounded-md opacity-0 animate-pulse" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="from_email" className="font-mono text-[#00ff00]">
                      Encryption Key
                    </Label>
                    <div className="relative">
                      <Input
                        id="from_email"
                        name="from_email"
                        type="email"
                        placeholder="Your email"
                        value={formData.from_email}
                        onChange={handleChange}
                        required
                        className="bg-black border-[#00ff00]/30 text-[#00ff00] font-mono focus:border-[#00ff00] focus:ring-[#00ff00]/20"
                      />
                      <div className="absolute top-0 left-0 w-full h-full pointer-events-none border border-[#00ff00]/30 rounded-md opacity-0 animate-pulse" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-mono text-[#00ff00]">
                      Payload
                    </Label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-black border-[#00ff00]/30 text-[#00ff00] font-mono focus:border-[#00ff00] focus:ring-[#00ff00]/20"
                      />
                      <div className="absolute top-0 left-0 w-full h-full pointer-events-none border border-[#00ff00]/30 rounded-md opacity-0 animate-pulse" />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-black border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/10 font-mono"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        {accessGranted ? "Access Granted" : "Authenticating..."}
                        <span className="ml-2 animate-pulse">_</span>
                      </>
                    ) : (
                      "Transmit Securely"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
