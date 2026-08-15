import { mediaAssets, MediaAsset } from '../../assets'

interface MediaProps {
  kind?: MediaAsset
  label: string
  className?: string
  priority?: boolean
  poster?: string
}

export function Media({ kind, label, className = '', priority = false, poster }: MediaProps) {
  const assetSrc = kind ? mediaAssets[kind] : undefined
  const isVideo = assetSrc && typeof assetSrc === 'string' && assetSrc.endsWith('.mp4')

  return (
    <div className={`media-frame ${className}`}>
      {assetSrc ? (
        isVideo ? (
          <video
            src={assetSrc}
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            preload={priority ? 'auto' : 'metadata'}
            aria-label={label}
          />
        ) : (
          <img
            src={assetSrc}
            alt={label}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
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
