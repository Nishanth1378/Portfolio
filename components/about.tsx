"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Lock, Server, Terminal } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = {
    programming: ["Python", "C", "C++", "Embedded C", "SQL", "Bash"],
    iot: ["ESP32", "ATmega2560", "MQTT", "Node-RED", "Arduino"],
    ml: ["Scikit-learn", "Pandas", "NumPy", "TensorFlow", "PyTorch"],
    tools: ["Google Colab", "Jupyter Notebook", "VS Code", "Git/GitHub", "VirtualBox"],
    security: ["Kali Linux", "Metasploit", "Wireshark", "Nmap"],
  }

  const education = [
    {
      institution: "Sai University",
      degree: "B.Tech in Computing and Data Science",
      period: "2022 – 2026",
      details: "Major: Computer Science — Minor: Data Science",
    },
    {
      institution: "Shirdi Sai Junior College",
      degree: "Board of Intermediate Education (MPC)",
      period: "2020 – 2022",
      details: "Coursework: Mathematics, Physics, Chemistry",
    },
    {
      institution: "Tripura English Medium School",
      degree: "Central Board of Secondary Education (CBSE)",
      period: "2011 – 2020",
      details: "",
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
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-[url('/binary-bg.png')] opacity-5 pointer-events-none"></div>
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
                <span className="text-[#00ff00]/70">&gt;</span> whoami
              </h2>
            </div>
            <p className="mx-auto max-w-[700px] text-[#00ff00]/70 font-mono">
              Computer Science and Data Science student with hands-on expertise in IoT systems, machine learning, and
              cybersecurity.
            </p>
          </div>

          <Tabs defaultValue="skills" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 bg-black/50 border border-[#00ff00]/30">
              <TabsTrigger
                value="skills"
                className="data-[state=active]:bg-[#00ff00]/10 data-[state=active]:text-[#00ff00] font-mono"
              >
                ./skills_and_expertise
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="data-[state=active]:bg-[#00ff00]/10 data-[state=active]:text-[#00ff00] font-mono"
              >
                ./education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="skills" className="mt-6">
              <Card className="bg-black/50 border border-[#00ff00]/30">
                <CardContent className="p-6">
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="space-y-6"
                  >
                    <motion.div variants={item} className="space-y-2">
                      <h3 className="text-lg font-mono font-semibold flex items-center">
                        <Code className="mr-2 h-5 w-5 text-[#00ff00]" />
                        Programming Languages
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.programming.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-sm bg-black border-[#00ff00]/30 text-[#00ff00] font-mono"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div variants={item} className="space-y-2">
                      <h3 className="text-lg font-mono font-semibold flex items-center">
                        <Server className="mr-2 h-5 w-5 text-[#00ff00]" />
                        IoT & Embedded Systems
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.iot.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-sm bg-black border-[#00ff00]/30 text-[#00ff00] font-mono"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div variants={item} className="space-y-2">
                      <h3 className="text-lg font-mono font-semibold flex items-center">
                        <Database className="mr-2 h-5 w-5 text-[#00ff00]" />
                        Machine Learning & Data Science
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.ml.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-sm bg-black border-[#00ff00]/30 text-[#00ff00] font-mono"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div variants={item} className="space-y-2">
                      <h3 className="text-lg font-mono font-semibold flex items-center">
                        <Lock className="mr-2 h-5 w-5 text-[#00ff00]" />
                        Cybersecurity
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.security.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-sm bg-black border-[#00ff00]/30 text-[#00ff00] font-mono"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div variants={item} className="space-y-2">
                      <h3 className="text-lg font-mono font-semibold flex items-center">
                        <Terminal className="mr-2 h-5 w-5 text-[#00ff00]" />
                        Developer Tools
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.tools.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-sm bg-black border-[#00ff00]/30 text-[#00ff00] font-mono"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="mt-6">
              <Card className="bg-black/50 border border-[#00ff00]/30">
                <CardContent className="p-6">
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="space-y-6"
                  >
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        variants={item}
                        className="relative pl-6 border-l-2 border-[#00ff00]/30 pb-6 last:pb-0"
                      >
                        <div className="absolute w-3 h-3 bg-[#00ff00] rounded-full -left-[7px] top-1" />
                        <h3 className="text-lg font-mono font-semibold">{edu.institution}</h3>
                        <p className="text-[#00ff00]/70 font-mono">{edu.degree}</p>
                        <p className="text-sm text-[#00ff00]/50 font-mono">{edu.period}</p>
                        {edu.details && <p className="mt-1 text-sm font-mono">{edu.details}</p>}
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
