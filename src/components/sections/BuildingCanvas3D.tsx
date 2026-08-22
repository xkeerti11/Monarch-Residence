import { useRef, useState, useEffect } from 'react'
import { Sun, Moon, Rotate3d, Layers } from 'lucide-react'
import { trackEvent } from '../../utils/analytics'

export function BuildingCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedFloor, setSelectedFloor] = useState<number>(3)
  const [isDragging, setIsDragging] = useState(false)
  const [isNightMode, setIsNightMode] = useState(true)
  const rotationRef = useRef({ x: 0.4, y: 0.6 })
  const dragStartRef = useRef({ x: 0, y: 0 })
  const isVisibleRef = useRef(false)

  const floors = [
    {
      level: 'Podium (L01–L09)',
      title: 'Garden Duplex Residences',
      desc: 'Double-height garden duplexes featuring private tropical reflection courtyards and direct pool access.',
      area: '4,500 sq.ft.',
      ceiling: '4.2m',
      status: '2 Units Remaining',
    },
    {
      level: 'Executive (L10–L24)',
      title: 'Executive Sea Suites',
      desc: 'Refined 3-bedroom residences framed with book-matched Calacatta Oro marble and panoramic western sea horizons.',
      area: '2,850 sq.ft.',
      ceiling: '3.65m',
      status: '4 Units Available',
    },
    {
      level: 'Sky Suites (L25–L39)',
      title: 'Grand Sky Mansions',
      desc: 'Expansive 4-bedroom duplex residences featuring private cantilevered heated plunge pools.',
      area: '3,950 sq.ft.',
      ceiling: '3.80m',
      status: 'Only 1 Unit Left',
    },
    {
      level: 'Penthouse (L40–L45)',
      title: 'Presidential Sky Palace',
      desc: 'Triplex penthouse with 360-degree Arabian Sea panorama, private rooftop observatory, and direct helipad access.',
      area: '5,800 sq.ft.',
      ceiling: '4.5m',
      status: 'Reserved by Invitation',
    },
  ]

  // IntersectionObserver to halt rendering loop when offscreen
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting
      },
      { threshold: 0.05 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let time = 0

    const render = () => {
      // Throttle rendering loop when scrolled out of viewport
      if (isVisibleRef.current) {
        time += 0.012
        const width = (canvas.width = canvas.parentElement?.clientWidth || 800)
        const height = (canvas.height = canvas.parentElement?.clientHeight || 480)

        ctx.clearRect(0, 0, width, height)

        const cx = width / 2
        const cy = height / 2 + 50
        const rotY = rotationRef.current.y + (isDragging ? 0 : time * 0.15)
        const rotX = rotationRef.current.x

        // Grid Floor
        ctx.strokeStyle = isNightMode ? 'rgba(197, 168, 128, 0.08)' : 'rgba(10, 10, 10, 0.08)'
        ctx.lineWidth = 1
        for (let i = -6; i <= 6; i++) {
          ctx.beginPath()
          const p1 = project3D(i * 30, 0, -6 * 30, rotX, rotY, cx, cy)
          const p2 = project3D(i * 30, 0, 6 * 30, rotX, rotY, cx, cy)
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()

          ctx.beginPath()
          const p3 = project3D(-6 * 30, 0, i * 30, rotX, rotY, cx, cy)
          const p4 = project3D(6 * 30, 0, i * 30, rotX, rotY, cx, cy)
          ctx.moveTo(p3.x, p3.y)
          ctx.lineTo(p4.x, p4.y)
          ctx.stroke()
        }

        // 3D Slabs
        const totalSlabs = 24
        const slabHeight = 11
        const slabSize = 90

        for (let i = 0; i < totalSlabs; i++) {
          const y = -i * slabHeight
          const isFloorActive = Math.floor((i / totalSlabs) * 4) === selectedFloor
          const shrink = 1 - (i / totalSlabs) * 0.22
          const size = slabSize * shrink

          const corners = [
            project3D(-size, y, -size, rotX, rotY, cx, cy),
            project3D(size, y, -size, rotX, rotY, cx, cy),
            project3D(size, y, size, rotX, rotY, cx, cy),
            project3D(-size, y, size, rotX, rotY, cx, cy),
          ]

          ctx.beginPath()
          ctx.moveTo(corners[0].x, corners[0].y)
          for (let c = 1; c < corners.length; c++) ctx.lineTo(corners[c].x, corners[c].y)
          ctx.closePath()

          if (isFloorActive) {
            ctx.fillStyle = 'rgba(232, 112, 42, 0.32)'
            ctx.strokeStyle = '#e8702a'
            ctx.lineWidth = 2.4
          } else {
            ctx.fillStyle = isNightMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'
            ctx.strokeStyle = isNightMode ? 'rgba(255, 255, 255, 0.16)' : 'rgba(0, 0, 0, 0.14)'
            ctx.lineWidth = 1
          }
          ctx.fill()
          ctx.stroke()

          // Structural column mullions
          if (i % 3 === 0 && i < totalSlabs - 1) {
            const nextCorners = [
              project3D(-size, y - slabHeight * 3, -size, rotX, rotY, cx, cy),
              project3D(size, y - slabHeight * 3, -size, rotX, rotY, cx, cy),
              project3D(size, y - slabHeight * 3, size, rotX, rotY, cx, cy),
              project3D(-size, y - slabHeight * 3, size, rotX, rotY, cx, cy),
            ]
            ctx.strokeStyle = isFloorActive ? 'rgba(232, 112, 42, 0.65)' : (isNightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)')
            ctx.lineWidth = 1
            for (let c = 0; c < 4; c++) {
              ctx.beginPath()
              ctx.moveTo(corners[c].x, corners[c].y)
              ctx.lineTo(nextCorners[c].x, nextCorners[c].y)
              ctx.stroke()
            }
          }
        }

        // Helipad Ring Crown
        const topY = -totalSlabs * slabHeight
        const topCenter = project3D(0, topY - 14, 0, rotX, rotY, cx, cy)
        ctx.beginPath()
        ctx.arc(topCenter.x, topCenter.y, 22, 0, Math.PI * 2)
        ctx.strokeStyle = '#e8702a'
        ctx.lineWidth = 1.6
        ctx.stroke()
      }

      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)
    return () => cancelAnimationFrame(animId)
  }, [selectedFloor, isDragging, isNightMode])

  const project3D = (x: number, y: number, z: number, rx: number, ry: number, cx: number, cy: number) => {
    const cosY = Math.cos(ry)
    const sinY = Math.sin(ry)
    const x1 = x * cosY - z * sinY
    const z1 = z * cosY + x * sinY

    const cosX = Math.cos(rx)
    const sinX = Math.sin(rx)
    const y2 = y * cosX - z1 * sinX
    const z2 = z1 * cosX + y * sinX

    const scale = 400 / (400 + z2)
    return { x: cx + x1 * scale, y: cy + y2 * scale }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    dragStartRef.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const dx = e.clientX - dragStartRef.current.x
    const dy = e.clientY - dragStartRef.current.y
    rotationRef.current.y += dx * 0.008
    rotationRef.current.x = Math.max(0.1, Math.min(1.2, rotationRef.current.x + dy * 0.008))
    dragStartRef.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseUp = () => setIsDragging(false)

  // Mobile Touch Handlers for 3D Orbiting
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true)
      dragStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return
    const dx = e.touches[0].clientX - dragStartRef.current.x
    const dy = e.touches[0].clientY - dragStartRef.current.y
    rotationRef.current.y += dx * 0.01
    rotationRef.current.x = Math.max(0.1, Math.min(1.2, rotationRef.current.x + dy * 0.01))
    dragStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }

  const handleTouchEnd = () => setIsDragging(false)

  return (
    <div className="building-3d-wrapper" ref={containerRef} id="architecture">
      <div className="building-3d-header">
        <div>
          <div className="section-label-group">
            <span className="modal-badge">
              <Rotate3d size={12} /> 3D ARCHITECTURAL PROJECTION
            </span>
          </div>
          <h3 className="building-title">Monarch One Tower Structural Model</h3>
        </div>

        <div className="canvas-header-actions">
          <button
            type="button"
            className="lighting-toggle-btn"
            onClick={() => setIsNightMode(!isNightMode)}
            title="Toggle Day/Night Lighting"
            aria-label={`Toggle lighting. Currently ${isNightMode ? 'Night Mode' : 'Day Mode'}`}
          >
            {isNightMode ? <Moon size={14} /> : <Sun size={14} />}
            <span>{isNightMode ? 'Night Horizon' : 'Solar Day'}</span>
          </button>
        </div>
      </div>

      <div
        className="building-3d-canvas-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div className="floor-controls" aria-label="Select architectural level">
          {floors.map((item, idx) => (
            <button
              type="button"
              className={`floor-btn ${selectedFloor === idx ? 'active' : ''}`}
              key={item.level}
              onClick={() => {
                setSelectedFloor(idx)
                trackEvent('floor_3d_tier_select', { tier: item.level })
              }}
            >
              <Layers size={13} />
              <span>{item.level}</span>
            </button>
          ))}
        </div>

        <canvas ref={canvasRef} className="building-canvas" />

        <div className="floor-info-overlay">
          <div className="tier-header">
            <h4>{floors[selectedFloor].title}</h4>
            <span className="inventory-status-pill">{floors[selectedFloor].status}</span>
          </div>
          <p>{floors[selectedFloor].desc}</p>
          <div className="floor-metrics-row">
            <div>
              <span>Average Area</span>
              <strong>{floors[selectedFloor].area}</strong>
            </div>
            <div>
              <span>Clear Slab Height</span>
              <strong>{floors[selectedFloor].ceiling}</strong>
            </div>
          </div>
        </div>

        <span className="canvas-hint">Drag or swipe to orbit 360° wireframe · Tap levels to inspect floor plates</span>
      </div>
    </div>
  )
}

