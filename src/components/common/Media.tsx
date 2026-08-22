import { useState, useEffect, useRef } from 'react'
import { mediaAssets, MediaAsset } from '../../assets'

interface MediaProps {
  kind?: MediaAsset
  label: string
  className?: string
  priority?: boolean
  poster?: string
}

export function Media({ kind, label, className = '', priority = false, poster }: MediaProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState<boolean>(priority)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [isInView, setIsInView] = useState<boolean>(priority)

  const assetSrc = kind ? mediaAssets[kind] : undefined
  const isVideo = Boolean(assetSrc && typeof assetSrc === 'string' && assetSrc.endsWith('.mp4'))

  // Viewport-aware Intersection Observer for intelligent on-demand streaming
  useEffect(() => {
    if (priority) {
      setShouldLoad(true)
      setIsInView(true)
      return
    }

    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          setIsInView(true)
        } else {
          setIsInView(false)
        }
      },
      {
        rootMargin: '250px', // Preload slightly before entering viewport
        threshold: 0.05,
      }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [priority])

  // Play/Pause video when in/out of viewport to optimize CPU, GPU & battery
  useEffect(() => {
    if (!isVideo || !videoRef.current) return
    const video = videoRef.current

    if (isInView && shouldLoad) {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy fallback: ensure muted and retry
          video.muted = true
          video.play().catch(() => {})
        })
      }
    } else {
      video.pause()
    }
  }, [isInView, shouldLoad, isVideo])

  return (
    <div
      ref={containerRef}
      className={`media-frame ${className} ${isLoaded ? 'is-loaded' : 'is-loading'}`}
    >
      {/* Lightweight Shimmer Skeleton while loading */}
      {!isLoaded && <div className="media-shimmer-placeholder" aria-hidden="true" />}

      {assetSrc ? (
        isVideo ? (
          shouldLoad ? (
            <video
              ref={videoRef}
              src={assetSrc}
              autoPlay
              muted
              loop
              playsInline
              poster={poster}
              preload={priority ? 'auto' : 'metadata'}
              aria-label={label}
              onLoadedData={() => setIsLoaded(true)}
              onCanPlay={() => setIsLoaded(true)}
              className={`media-element ${isLoaded ? 'visible' : 'hidden-media'}`}
            />
          ) : (
            <div className="media-standby-poster" aria-label={label} />
          )
        ) : (
          <img
            src={shouldLoad ? assetSrc : undefined}
            alt={label}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={`media-element ${isLoaded ? 'visible' : 'hidden-media'}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        )
      ) : (
        <div className={`media-placeholder ${className}`} aria-label={label} role="img">
          <span>{label}</span>
        </div>
      )}
    </div>
  )
}

