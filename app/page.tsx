import type { Metadata } from "next"
import CyberPortfolio from "@/components/cyber-portfolio"

export const metadata: Metadata = {
  title: "Nishanth Jothimani | Cybersecurity Portfolio",
  description:
    "Computer Science and Data Science student with expertise in IoT systems, machine learning, and cybersecurity.",
}

export default function Home() {
  return <CyberPortfolio />
}
