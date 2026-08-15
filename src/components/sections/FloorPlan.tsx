import { useState } from 'react'
import { Compass, Download, Layers, Sparkles, Check } from 'lucide-react'
import { Reveal } from '../common/Reveal'
import { useCurrencyConverter } from '../../hooks/useCurrencyConverter'
import { formatArea } from '../../utils/formatters'
import { trackEvent } from '../../utils/analytics'

interface FloorPlanProps {
  onOpenBrochure: () => void
}

interface RoomData {
  id: string
  title: string
  dimensions: string
  areaSqFt: number
  description: string
  features: string[]
}

const floorRooms: RoomData[] = [
  {
    id: 'living',
    title: 'Grand Living & Ocean Gallery',
    dimensions: `32'4" × 22'8" (9.8m × 6.9m)`,
    areaSqFt: 735,
    description: 'Double-height volume with 270-degree floor-to-ceiling acoustic glass framing the Arabian Sea.',
    features: ['Book-matched Calacatta Oro marble', 'Direct private terrace access', 'Integrated Lutron lighting presets'],
  },
  {
    id: 'master-bedroom',
    title: 'Presidential Master Suite',
    dimensions: `24'6" × 18'2" (7.5m × 5.5m)`,
    areaSqFt: 445,
    description: 'Acoustically isolated private master sanctuary with his-and-hers walk-in dressing suites and private balcony.',
    features: ['French quarter-sawn oak flooring', 'Poliform custom motorized wardrobe', 'Automated blackout drapery'],
  },
  {
    id: 'kitchen',
    title: 'Gourmet Show & Wet Kitchen',
    dimensions: `16'8" × 14'2" (5.1m × 4.3m)`,
    areaSqFt: 238,
    description: 'Boffi custom kitchen with Sub-Zero refrigerator, Wolf induction range, and concealed heavy-duty prep pantry.',
    features: ['Antibacterial sintered stone countertops', 'Dornbracht matte black plumbing', 'Exhaust air purification system'],
  },
  {
    id: 'terrace',
    title: 'Cantilevered Plunge Pool Deck',
    dimensions: `28'0" × 15'6" (8.5m × 4.7m)`,
    areaSqFt: 434,
    description: 'Open-air teak sundeck with private heated saltwater infinity pool and marine-grade outdoor entertainment bar.',
    features: ['Weatherproof Burma teak decking', 'Frameless tempered glass balustrade', 'Bio-filtration overflow pool'],
  },
  {
    id: 'utility',
    title: 'Staff Compound & Butler Entry',
    dimensions: `14'0" × 10'0" (4.2m × 3.0m)`,
    areaSqFt: 140,
    description: 'Dedicated service vestibule with independent service elevator, staff quarter, and laundry suite.',
    features: ['Separate biometric service entry', 'Miele commercial washer-dryer bay', 'CCTV security hub'],
  },
]

export function FloorPlan({ onOpenBrochure }: FloorPlanProps) {
  const [selectedRoomId, setSelectedRoomId] = useState<string>('living')
  const [layoutMode, setLayoutMode] = useState<'furnished' | 'shell'>('furnished')
  const { areaUnit } = useCurrencyConverter()

  const activeRoom = floorRooms.find((r) => r.id === selectedRoomId) || floorRooms[0]

  const handleSelectRoom = (id: string) => {
    setSelectedRoomId(id)
    trackEvent('floor_plan_room_select', { room: id, mode: layoutMode })
  }

  return (
    <section className="section floor-plan-section" id="floor-plans" aria-labelledby="floor-heading">
      <div className="container">
        <Reveal className="floor-plan-header">
          <div>
            <div className="section-label-group">
              <p className="section-label">03 / Architectural Engineering</p>
              <span className="cad-badge">
                <Layers size={12} /> CAD ARCHITECTURAL BLUEPRINT
              </span>
            </div>
            <h2 className="display section-heading" id="floor-heading">
              Interactive Floor Plate Architecture
            </h2>
          </div>
          <p className="body-copy floor-intro">
            Hover and inspect each structural zone. Engineered with clear 3.65m slab heights, column-free interior expanses, and acoustic partition cores.
          </p>
        </Reveal>

        {/* Blueprint Mode Toggle */}
        <div className="blueprint-toolbar">
          <div className="layout-toggle-group">
            <button
              type="button"
              className={`mode-btn ${layoutMode === 'furnished' ? 'active' : ''}`}
              onClick={() => setLayoutMode('furnished')}
            >
              <Sparkles size={13} />
              <span>Bespoke Furnished Layout</span>
            </button>
            <button
              type="button"
              className={`mode-btn ${layoutMode === 'shell' ? 'active' : ''}`}
              onClick={() => setLayoutMode('shell')}
            >
              <Layers size={13} />
              <span>Bare Shell Structural Core</span>
            </button>
          </div>

          <button
            type="button"
            className="cad-download-btn"
            onClick={() => {
              onOpenBrochure()
              trackEvent('cad_blueprint_download_click', { source: 'floor_plan_section' })
            }}
          >
            <Download size={14} />
            <span>Download Architectural CAD PDF</span>
          </button>
        </div>

        <div className="floor-grid">
          {/* Architectural SVG Canvas */}
          <Reveal className="floor-plan-box" clip>
            <div className="cad-compass-badge">
              <Compass size={16} />
              <span>N · TRUE SEA FRONT</span>
            </div>

            <svg
              className={`floor-plan-svg ${layoutMode}`}
              viewBox="0 0 500 420"
              role="img"
              aria-label="Architectural CAD floor plan diagram"
            >
              {/* Grid Lines */}
              <defs>
                <pattern id="cad-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(10,10,10,0.05)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="500" height="420" fill="url(#cad-grid)" />

              {/* Master Living Gallery */}
              <g
                className={`cad-room ${selectedRoomId === 'living' ? 'active' : ''}`}
                onClick={() => handleSelectRoom('living')}
                onMouseEnter={() => handleSelectRoom('living')}
              >
                <rect x="30" y="30" width="260" height="170" rx="4" />
                <text x="160" y="105" className="cad-label-title">GRAND LIVING & DINING GALLERY</text>
                <text x="160" y="125" className="cad-label-dim">32&apos;4&quot; × 22&apos;8&quot; · 735 SQ.FT</text>
                {layoutMode === 'furnished' && (
                  <rect x="50" y="55" width="80" height="45" rx="3" className="furniture-item" />
                )}
              </g>

              {/* Master Bedroom Suite */}
              <g
                className={`cad-room ${selectedRoomId === 'master-bedroom' ? 'active' : ''}`}
                onClick={() => handleSelectRoom('master-bedroom')}
                onMouseEnter={() => handleSelectRoom('master-bedroom')}
              >
                <rect x="305" y="30" width="165" height="170" rx="4" />
                <text x="387" y="105" className="cad-label-title">MASTER SUITE</text>
                <text x="387" y="125" className="cad-label-dim">24&apos;6&quot; × 18&apos;2&quot; · 445 SQ.FT</text>
                {layoutMode === 'furnished' && (
                  <rect x="340" y="60" width="60" height="55" rx="2" className="furniture-item" />
                )}
              </g>

              {/* Oceanfront Cantilevered Terrace & Pool */}
              <g
                className={`cad-room terrace-room ${selectedRoomId === 'terrace' ? 'active' : ''}`}
                onClick={() => handleSelectRoom('terrace')}
                onMouseEnter={() => handleSelectRoom('terrace')}
              >
                <rect x="30" y="215" width="260" height="175" rx="4" />
                <rect x="45" y="240" width="90" height="125" rx="4" className="plunge-pool-rect" />
                <text x="160" y="295" className="cad-label-title">PLUNGE POOL & SUNDECK</text>
                <text x="160" y="315" className="cad-label-dim">28&apos;0&quot; × 15&apos;6&quot; · 434 SQ.FT</text>
                <text x="90" y="305" className="pool-label">HEATED POOL</text>
              </g>

              {/* Gourmet Kitchen */}
              <g
                className={`cad-room ${selectedRoomId === 'kitchen' ? 'active' : ''}`}
                onClick={() => handleSelectRoom('kitchen')}
                onMouseEnter={() => handleSelectRoom('kitchen')}
              >
                <rect x="305" y="215" width="165" height="85" rx="4" />
                <text x="387" y="255" className="cad-label-title">GOURMET KITCHEN</text>
                <text x="387" y="270" className="cad-label-dim">16&apos;8&quot; × 14&apos;2&quot; · 238 SQ.FT</text>
              </g>

              {/* Staff Compound & Utility */}
              <g
                className={`cad-room utility-room ${selectedRoomId === 'utility' ? 'active' : ''}`}
                onClick={() => handleSelectRoom('utility')}
                onMouseEnter={() => handleSelectRoom('utility')}
              >
                <rect x="305" y="310" width="165" height="80" rx="4" />
                <text x="387" y="345" className="cad-label-title">STAFF & BUTLER ENTRY</text>
                <text x="387" y="360" className="cad-label-dim">14&apos;0&quot; × 10&apos;0&quot; · 140 SQ.FT</text>
              </g>
            </svg>

            <div className="cad-legend">
              <span>● Column-Free Clear Span</span>
              <span>● Triple-Glazed Thermal Envelope</span>
              <span>● Biometric Service Portal</span>
            </div>
          </Reveal>

          {/* Room Specification Inspector Panel */}
          <Reveal className="floor-panel" delay={180}>
            <div className="room-selector-pills">
              {floorRooms.map((room) => (
                <button
                  type="button"
                  key={room.id}
                  className={`room-pill-btn ${selectedRoomId === room.id ? 'active' : ''}`}
                  onClick={() => handleSelectRoom(room.id)}
                >
                  {room.title}
                </button>
              ))}
            </div>

            <div className="room-spec-card">
              <div className="room-card-header">
                <h3>{activeRoom.title}</h3>
                <span className="room-area-badge">
                  {formatArea(activeRoom.areaSqFt, areaUnit)}
                </span>
              </div>

              <div className="room-dimension-bar">
                <span className="dim-title">Interior Architectural Dimensions</span>
                <strong className="dim-value">{activeRoom.dimensions}</strong>
              </div>

              <p className="room-desc">{activeRoom.description}</p>

              <h4 className="spec-subheading">Engineering & Material Specification</h4>
              <ul className="room-features-list">
                {activeRoom.features.map((feat, idx) => (
                  <li key={idx}>
                    <Check size={14} className="check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="area-total-block">
                <div>
                  <span className="detail-label">Total Residence Carpet Area</span>
                  <span className="area-value">
                    {formatArea(3850, areaUnit)}
                  </span>
                </div>
                <div>
                  <span className="detail-label">Private Outdoor Balconies</span>
                  <span className="area-value">
                    {formatArea(520, areaUnit)}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
