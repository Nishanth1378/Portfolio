"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      title: "Finance & Marketing Team Member",
      company: "Sai University, LAA Theatre Production",
      period: "May 2024 – Jun 2024",
      location: "Chennai, India",
      responsibilities: [
        "Led sponsorship drives and promotional campaigns for a sold-out university theater production.",
        "Invited chief guest to elevate event prestige.",
        "Donated surplus funds to NGOs.",
      ],
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
              <span className="text-[#00ff00]/70">&gt;</span> My Experience
            </h2>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={item} className="mb-6 relative">
              {/* Timeline */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00ff00] h-full"></div>

              {/* Timeline dot */}
              <div className="absolute w-3 h-3 bg-[#00ff00] rounded-full -left-[6px] top-6"></div>

              {/* Experience card */}
              <Card className="ml-6 bg-black/50 border border-[#00ff00]/30">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-full bg-[#00ff00]/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-5 w-5 text-[#00ff00]" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      {/* Title */}
                      <div>
                        <h3 className="text-lg font-mono font-semibold text-[#00ff00]">{exp.title}</h3>
                        <p className="text-sm font-mono text-[#00ff00]/80">{exp.company}</p>
                      </div>

                      {/* Date and Location */}
                      <div className="flex flex-col sm:flex-row sm:gap-4 text-sm font-mono text-[#00ff00]/70">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-baseline gap-2">
                            <span className="text-[#00ff00]">•</span>
                            <span className="text-sm font-mono text-[#00ff00]">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
