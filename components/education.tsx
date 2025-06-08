"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Building, MapPin, Calendar, Award } from "lucide-react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const educationData = [
    {
      degree: "B.Tech in Computing and Data Science",
      details: "Major: Computer Science — Minor: Data Science",
      institution: "Sai University",
      location: "Chennai, India",
      period: "2022 – 2026",
      grade: "CGPA-7.34",
    },
    {
      degree: "Board of Intermediate Education (MPC)",
      details: "Mathematics, Physics, Chemistry",
      institution: "Shirdi Sai Junior College",
      location: "Rajahmundry, India",
      period: "2020 – 2022",
      grade: "Percentage: 77%",
    },
    {
      degree: "Central Board of Secondary Education (CBSE)",
      details: "",
      institution: "Tripura English Medium School",
      location: "Rajahmundry, India",
      period: "2019 – 2020",
      grade: "Percentage: 86%",
    },
  ]

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
    <section className="py-10 relative">
      <div className="container px-4">
        <div className="space-y-2 text-center mb-6">
          <div className="inline-block bg-black/50 border border-[#00ff00]/30 rounded-md px-3 py-1 mb-1">
            <h2 className="text-xl font-mono font-bold tracking-tighter">
              <span className="text-[#00ff00]/70">&gt;</span> Education
            </h2>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-black/50 border border-[#00ff00]/30 overflow-hidden">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    {/* Degree */}
                    <div className="font-mono text-[#00ff00] font-semibold">{edu.degree}</div>

                    {/* Major/Minor details */}
                    {edu.details && <div className="font-mono text-xs text-[#00ff00]/80">{edu.details}</div>}

                    {/* Institution name */}
                    <div className="flex items-center gap-2 text-[#00ff00]/90 mt-3">
                      <Building className="h-4 w-4 flex-shrink-0" />
                      <span className="font-mono text-sm">{edu.institution}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-[#00ff00]/80">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span className="font-mono text-sm">{edu.location}</span>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-[#00ff00]/80">
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span className="font-mono text-sm">{edu.period}</span>
                    </div>

                    {/* Grade/CGPA */}
                    {edu.grade && (
                      <div className="flex items-center gap-2 mt-1">
                        <Award className="h-4 w-4 flex-shrink-0 text-[#00ff00]" />
                        <div className="font-mono">
                          <span className="inline-block bg-[#00ff00]/20 border border-[#00ff00]/30 rounded-full px-3 py-1 text-[#00ff00] text-xs">
                            {edu.grade}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
