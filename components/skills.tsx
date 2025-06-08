"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Server, Cpu, Terminal, Shield } from "lucide-react"
import SkillsVisualization from "@/components/skills-visualization"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const technicalSkills = [
    {
      category: "Programming Languages",
      icon: <Code className="h-4 w-4 text-[#00ff00]" />,
      skills: ["Python", "C", "C++", "Embedded C", "SQL", "Bash"],
    },
    {
      category: "IoT/Embedded",
      icon: <Cpu className="h-4 w-4 text-[#00ff00]" />,
      skills: ["ESP32", "ATmega2560", "MQTT", "Node-RED", "Arduino"],
    },
    {
      category: "Machine Learning",
      icon: <Database className="h-4 w-4 text-[#00ff00]" />,
      skills: ["Scikit-learn", "Pandas", "NumPy"],
    },
    {
      category: "Deep Learning",
      icon: <Server className="h-4 w-4 text-[#00ff00]" />,
      skills: ["TensorFlow", "PyTorch"],
    },
    {
      category: "Cybersecurity",
      icon: <Shield className="h-4 w-4 text-[#00ff00]" />,
      skills: ["Kali Linux", "Metasploit", "Wireshark", "Nmap"],
    },
    {
      category: "Developer Tools",
      icon: <Terminal className="h-4 w-4 text-[#00ff00]" />,
      skills: ["Google Colab", "Jupyter Notebook", "VS Code", "Git/GitHub", "VirtualBox"],
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
    <section id="skills" className="py-10 relative">
      <div className="container px-4">
        <div className="space-y-2 text-center mb-6">
          <div className="inline-block bg-black/50 border border-[#00ff00]/30 rounded-md px-3 py-1 mb-1">
            <h2 className="text-xl font-mono font-bold tracking-tighter">
              <span className="text-[#00ff00]/70">&gt;</span> Technical Skills
            </h2>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {technicalSkills.map((skillGroup, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full bg-black/50 border border-[#00ff00]/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-mono flex items-center text-[#00ff00]">
                    {skillGroup.icon}
                    <span className="ml-2">{skillGroup.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-xs bg-black border-[#00ff00]/30 text-[#00ff00] font-mono"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 3D Cybersecurity Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 bg-black/50 border border-[#00ff00]/30 rounded-md p-4"
        >
          <h3 className="text-sm font-mono font-semibold mb-4 text-[#00ff00]">
            Interactive Cybersecurity Skills Network
          </h3>
          <SkillsVisualization />
        </motion.div>
      </div>
    </section>
  )
}
