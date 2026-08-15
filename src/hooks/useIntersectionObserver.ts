import { useState, useEffect, RefObject } from 'react'

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options: IntersectionObserverInit = { threshold: 0.1 }
): boolean {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [elementRef, options])

  return isIntersecting
}
