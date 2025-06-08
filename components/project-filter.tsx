"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectFilterProps {
  categories: string[]
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

export default function ProjectFilter({ categories, activeFilter, setActiveFilter }: ProjectFilterProps) {
  return (
    <div className="w-full flex justify-center mb-6">
      <div className="overflow-x-auto scrollbar-hide max-w-full">
        <div className="border-2 border-[#00ff00] rounded-lg p-2 bg-black/30 flex space-x-4 min-w-max">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveFilter("all")}
            className={cn(
              "rounded-md text-xs font-mono transition-all px-4 py-1 h-auto",
              activeFilter === "all"
                ? "bg-[#00ff00] text-black hover:bg-[#00ff00]/90"
                : "text-[#00ff00]/70 hover:text-[#00ff00] hover:bg-[#00ff00]/10",
            )}
          >
            All Projects
          </Button>

          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              size="sm"
              onClick={() => setActiveFilter(category.toLowerCase())}
              className={cn(
                "rounded-md text-xs font-mono transition-all px-4 py-1 h-auto",
                activeFilter === category.toLowerCase()
                  ? "bg-[#00ff00] text-black hover:bg-[#00ff00]/90"
                  : "text-[#00ff00]/70 hover:text-[#00ff00] hover:bg-[#00ff00]/10",
              )}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
