"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Calendar, Shield, Award, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Certifications() {
  const ref = useRef(null)
  const achievementsRef = useRef(null) // Add this line
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  const certifications = [
    {
      id: "aviatrix",
      title: "Aviatrix ACE Multicloud Network Associate",
      issuer: "Aviatrix",
      date: "May 2024",
      image: "/achievement-certificate.png",
      skills: ["Cloud Networking", "AWS", "Azure", "GCP", "Network Security"],
    },
  ]

  const achievements = ["3rd Place, IPL Mock Auction — MCC Deepwoods 24"]

  const openCertificate = (id: string) => {
    setSelectedCertificate(id)
  }

  const closeCertificate = () => {
    setSelectedCertificate(null)
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

  return (
    <section className="py-16 relative bg-black" ref={ref}>
      {/* Cyber background elements */}
      <div className="absolute inset-0 bg-[url('/matrix-code.png')] opacity-5 pointer-events-none"></div>

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

      <div className="container px-4 max-w-6xl mx-auto">
        {/* Certifications Section */}
        <div className="mb-20">
          <div className="space-y-2 text-center mb-10">
            <div className="inline-block bg-black/50 border border-[#00ff00]/30 rounded-md px-4 py-1 mb-2">
              <h2 className="text-3xl font-mono font-bold tracking-tighter">
                <span className="text-[#00ff00]/70">&gt;</span>{" "}
                <span className="text-[#00ff00]">My Certifications</span>
              </h2>
            </div>
            <p className="mx-auto max-w-[700px] text-[#00ff00]/70 font-mono">
              Verified credentials and technical qualifications
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {certifications.map((cert) => (
              <motion.div key={cert.id} variants={item}>
                <Card
                  className="bg-black/50 border border-[#00ff00]/30 relative p-6 cursor-pointer overflow-hidden group hover:shadow-lg hover:shadow-[#00ff00]/20 transition-all duration-300"
                  onClick={() => openCertificate(cert.id)}
                >
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

                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-[#00ff00]" />
                      <h3 className="text-[#00ff00] text-lg font-mono font-semibold">{cert.title}</h3>
                    </div>
                    <div className="bg-black/50 border border-[#00ff00]/30 rounded-full p-1 group-hover:bg-[#00ff00]/10 transition-colors">
                      <ExternalLink className="h-4 w-4 text-[#00ff00]" />
                    </div>
                  </div>

                  <div className="flex items-center text-[#00ff00]/80 text-sm mt-3 font-mono">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{cert.date}</span>
                  </div>

                  <p className="text-[#00ff00]/70 text-sm mt-2 font-mono">Issued by {cert.issuer}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-black/70 border border-[#00ff00]/30 text-[#00ff00] rounded-md px-2 py-1 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-2 right-2 text-xs text-[#00ff00]/50 font-mono">Click to view</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements Section */}
        <div id="achievements" ref={achievementsRef}>
          <div className="space-y-2 text-center mb-10">
            <div className="inline-block bg-black/50 border border-[#00ff00]/30 rounded-md px-4 py-1 mb-2">
              <h2 className="text-3xl font-mono font-bold tracking-tighter">
                <span className="text-[#00ff00]/70">&gt;</span> <span className="text-[#00ff00]">Achievements</span>
              </h2>
            </div>
            <p className="mx-auto max-w-[700px] text-[#00ff00]/70 font-mono">Recognition and accomplishments</p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="max-w-3xl mx-auto"
          >
            <Card className="bg-black/50 border border-[#00ff00]/30 p-6">
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div key={index} variants={item} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-black border border-[#00ff00]/30 flex items-center justify-center">
                      <Award className="h-4 w-4 text-[#00ff00]" />
                    </div>
                    <div>
                      <div className="font-mono text-[#00ff00] flex items-center gap-2">
                        <Terminal className="h-4 w-4" />
                        <span className="text-[#00ff00]/70">achievement_</span>
                        <span>{index + 1}.exe</span>
                      </div>
                      <p className="text-white font-mono mt-1">{achievement}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-black border border-[#00ff00]/50 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
          >
            <div className="sticky top-0 flex justify-between items-center p-4 bg-black border-b border-[#00ff00]/30">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#00ff00]" />
                <h3 className="text-[#00ff00] font-mono font-semibold">
                  {certifications.find((c) => c.id === selectedCertificate)?.title}
                </h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeCertificate}
                className="rounded-full hover:bg-[#00ff00]/10 text-[#00ff00]"
              >
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </Button>
            </div>
            <div className="p-4">
              <img
                src={certifications.find((c) => c.id === selectedCertificate)?.image || "/placeholder.svg"}
                alt={certifications.find((c) => c.id === selectedCertificate)?.title}
                className="w-full h-auto border border-[#00ff00]/30 rounded-md"
              />
            </div>

            {/* Terminal-like footer */}
            <div className="p-4 border-t border-[#00ff00]/30 font-mono text-sm text-[#00ff00]/70">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                <span>certificate_verification_complete</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
