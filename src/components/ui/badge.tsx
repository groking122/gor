import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-gradient-to-r from-secondary/90 to-secondary text-secondary-foreground shadow-sm hover:from-secondary hover:to-secondary/90",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground border-border/50 hover:bg-accent/10 hover:border-accent",
        gradient: "border-transparent bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:from-blue-700 hover:to-indigo-700",
        neon: "bg-black border border-[#00FFFF] text-[#00FFFF] shadow-[0_0_5px_rgba(0,255,255,0.5)] hover:shadow-[0_0_8px_rgba(0,255,255,0.7)]",
        glass: "backdrop-blur-md bg-white/10 border-white/20 text-white shadow-sm hover:bg-white/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
