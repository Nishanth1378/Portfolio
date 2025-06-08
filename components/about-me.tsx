"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, User } from "lucide-react"

export default function AboutMe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-10 relative">
      <div className="container px-4">
        <div className="space-y-2 text-center mb-6">
          <div className="inline-block bg-black/50 border border-[#00ff00]/30 rounded-md px-3 py-1 mb-1">
            <h2 className="text-xl font-mono font-bold tracking-tighter">
              <span className="text-[#00ff00]/70">&gt;</span> About Me
            </h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Image Card */}
          <Card className="bg-black/50 border border-[#00ff00]/30 overflow-hidden h-full flex">
            <CardContent className="p-0 flex-1 flex">
              <div className="relative w-full h-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-..._imresizer.jpg-17btRY3CurPOKsnA9ggu2CLXlS6BNT.jpeg"
                  alt="Nishanth Jothimani"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-50"></div>

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
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="bg-black/50 border border-[#00ff00]/30 h-full flex">
            <CardContent className="p-6 flex-1 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-mono font-semibold text-[#00ff00] mb-4">
                    Computer Science and Data Science Engineer
                  </h3>
                  <div className="space-y-4">
                    <p className="font-mono text-[#00ff00] leading-relaxed">
                      Hi! I'm Nishanth Jothimani, a passionate Computer Science and Data Science undergraduate based in
                      Chennai, India. I specialize in IoT systems, machine learning, and cybersecurity, with strong
                      hands-on experience in building embedded systems and intelligent solutions. Whether it's designing
                      a smart door with ESP32, implementing adaptive algorithms in robotics, or training deep learning
                      models for image classification, I enjoy bridging the gap between hardware and intelligent
                      software.
                    </p>

                    <p className="font-mono text-[#00ff00] leading-relaxed">
                      I'm proficient in Python, C/C++, and Embedded C, and have worked extensively with platforms like
                      Arduino, MQTT, and Node-RED. My academic journey has been complemented by certifications like the
                      Aviatrix ACE Multicloud Network Associate, and practical experience managing technical and
                      creative projects — from leading university theater sponsorships to co-authoring IoT security
                      research.
                    </p>

                    <p className="font-mono text-[#00ff00] leading-relaxed">
                      I'm always eager to collaborate, learn, and apply my skills to real-world challenges — whether
                      it's in AI, cybersecurity, or embedded innovation.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black border border-[#00ff00]/30 flex items-center justify-center">
                      <User className="h-4 w-4 text-[#00ff00]" />
                    </div>
                    <div>
                      <p className="font-mono font-medium text-[#00ff00]">Name</p>
                      <p className="font-mono text-[#00ff00]/70">Nishanth Jothimani</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black border border-[#00ff00]/30 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-[#00ff00]" />
                    </div>
                    <div>
                      <p className="font-mono font-medium text-[#00ff00]">Location</p>
                      <p className="font-mono text-[#00ff00]/70">Chennai, India</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black border border-[#00ff00]/30 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-[#00ff00]" />
                    </div>
                    <div>
                      <p className="font-mono font-medium text-[#00ff00]">Email</p>
                      <p className="font-mono text-[#00ff00]/70">nisanthjothimani@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black border border-[#00ff00]/30 flex items-center justify-center">
                      <Phone className="h-4 w-4 text-[#00ff00]" />
                    </div>
                    <div>
                      <p className="font-mono font-medium text-[#00ff00]">Phone</p>
                      <p className="font-mono text-[#00ff00]/70">+91 97042 89749</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
