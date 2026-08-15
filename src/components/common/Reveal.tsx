import { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  clip?: boolean
}

export function Reveal({ children, className = '', delay = 0, clip = false }: RevealProps) {
  return (
    <div data-reveal={delay} data-clip={clip ? 'true' : undefined} className={className}>
      {children}
    </div>
  )
}
