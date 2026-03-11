import { ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col overflow-hidden rounded-2xl",
      "bg-white border border-[#E8F1FF]",
      "[box-shadow:0_2px_16px_rgba(15,23,42,0.05),0_1px_3px_rgba(15,23,42,0.04)]",
      "hover:border-[#6FD3FF]/70 hover:[box-shadow:0_8px_32px_rgba(10,108,255,0.10)]",
      "transition-all duration-300",
      className,
    )}
  >
    {/* Background layer */}
    <div className="absolute inset-0">{background}</div>

    {/* Content — never moves, takes available space */}
    <div className="pointer-events-none z-10 flex flex-col gap-1.5 p-6 flex-1">
      <Icon className="h-10 w-10 text-[#0A6CFF] transition-all duration-300 ease-in-out group-hover:scale-90 group-hover:opacity-80" />
      <h3 className="text-[1.1rem] font-bold text-[#0F172A] mt-1">
        {name}
      </h3>
      <p className="max-w-lg text-sm text-[#64748B] leading-relaxed">{description}</p>
    </div>

    {/* CTA — fades + slides in at the bottom, no content displacement */}
    <div className="relative z-10 px-5 pb-5 shrink-0">
      <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
        <Button
          variant="ghost"
          asChild
          size="sm"
          className="pointer-events-auto font-semibold -ml-2 text-[#0A6CFF]"
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>

    {/* Hover tint overlay */}
    <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-[#0A6CFF]/[.025]" />
  </div>
)

export { BentoCard, BentoGrid }
