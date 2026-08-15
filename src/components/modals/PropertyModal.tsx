import { useEffect } from 'react'
import { X, ArrowRight, ShieldCheck, Check, Sparkles, Bed, Bath, Car, Maximize2, Calendar } from 'lucide-react'
import { PropertyItem } from '../../types/property.types'
import { useCurrencyConverter } from '../../hooks/useCurrencyConverter'
import { formatPrice, formatArea, formatAreaRange } from '../../utils/formatters'
import { Media } from '../common/Media'
import { trackEvent } from '../../utils/analytics'

interface PropertyModalProps {
  property: PropertyItem
  onClose: () => void
  onInquire: (propertyName: string) => void
  onOpenMortgageWithPrice: (priceINR: number) => void
}

export function PropertyModal({
  property,
  onClose,
  onInquire,
  onOpenMortgageWithPrice,
}: PropertyModalProps) {
  const { currency, areaUnit } = useCurrencyConverter()

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog property-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close residence modal"
        >
          <X size={20} />
        </button>

        <div className="modal-header-badges">
          <span className="modal-badge">{property.type}</span>
          <span className="modal-rera-badge">
            <ShieldCheck size={12} /> {property.reraId}
          </span>
        </div>

        <h2 className="display modal-title">{property.name}</h2>
        <p className="modal-subtitle">📍 {property.location} · {property.tagline}</p>

        {property.kind && (
          <div className="modal-media-frame">
            <Media kind={property.kind} label={property.name} />
          </div>
        )}

        <div className="modal-key-metrics-grid">
          <div className="metric-box">
            <span className="metric-label">Starting Price</span>
            <strong className="metric-val highlight">
              {formatPrice(property.priceINR, currency)}
            </strong>
          </div>
          <div className="metric-box">
            <span className="metric-label">Carpet Area Range</span>
            <strong className="metric-val">
              {formatAreaRange(property.carpetAreaSqFtMin, property.carpetAreaSqFtMax, areaUnit)}
            </strong>
          </div>
          <div className="metric-box">
            <span className="metric-label">Configuration</span>
            <strong className="metric-val">
              {property.bedroomsMin}–{property.bedroomsMax} BHK ({property.bathroomsMin}–{property.bathroomsMax} Baths)
            </strong>
          </div>
          <div className="metric-box">
            <span className="metric-label">Possession Date</span>
            <strong className="metric-val">{property.possessionDate}</strong>
          </div>
        </div>

        <div className="modal-section-block">
          <h4 className="modal-section-heading">Architectural Overview</h4>
          <p className="body-copy">{property.description}</p>
          <p className="body-copy quote-philosophy">“{property.architecturalPhilosophy}”</p>
        </div>

        <div className="modal-section-block">
          <h4 className="modal-section-heading">Engineering & Material Specifications</h4>
          <div className="specs-two-col">
            <div className="spec-item">
              <span className="spec-key">Clear Slab Height:</span>
              <span className="spec-val">{property.specs.ceilingHeight}</span>
            </div>
            <div className="spec-item">
              <span className="spec-key">Façade & Acoustic Glazing:</span>
              <span className="spec-val">{property.specs.glazing}</span>
            </div>
            <div className="spec-item">
              <span className="spec-key">Gourmet Integrated Kitchen:</span>
              <span className="spec-val">{property.specs.kitchen}</span>
            </div>
            <div className="spec-item">
              <span className="spec-key">Artisanal Stone & Flooring:</span>
              <span className="spec-val">{property.specs.flooring}</span>
            </div>
            <div className="spec-item">
              <span className="spec-key">Home Automation:</span>
              <span className="spec-val">{property.specs.smartHome}</span>
            </div>
            <div className="spec-item">
              <span className="spec-key">Climate & Air Quality:</span>
              <span className="spec-val">{property.specs.climate}</span>
            </div>
          </div>
        </div>

        {/* Live Inventory Matrix */}
        <div className="modal-section-block">
          <div className="inventory-header-row">
            <h4 className="modal-section-heading">Live Unit Availability & Floor Plates</h4>
            <span className="inventory-live-tag">
              <Sparkles size={12} /> VERIFIED INVENTORY
            </span>
          </div>

          <div className="inventory-table-wrapper">
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>Unit Number</th>
                  <th>Floor Level</th>
                  <th>Type</th>
                  <th>Carpet Area</th>
                  <th>Orientation / Facing</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {property.inventory.map((unit) => (
                  <tr key={unit.unitNo}>
                    <td>
                      <strong>{unit.unitNo}</strong>
                    </td>
                    <td>{unit.floor}</td>
                    <td>{unit.type}</td>
                    <td>{formatArea(unit.carpetAreaSqFt, areaUnit)}</td>
                    <td>{unit.facing}</td>
                    <td>
                      <span className={`status-tag ${unit.status.toLowerCase()}`}>
                        {unit.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="modal-section-block">
          <h4 className="modal-section-heading">Private Amenities & Services</h4>
          <div className="amenity-pills">
            {property.amenities.map((amenity, idx) => (
              <span className="amenity-pill" key={idx}>
                <Check size={12} /> {amenity}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-cta-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              onInquire(property.name)
              onClose()
              trackEvent('modal_schedule_viewing_click', { property: property.name })
            }}
          >
            Schedule Private Residence Presentation <ArrowRight size={16} />
          </button>

          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              onOpenMortgageWithPrice(property.priceINR)
              onClose()
              const el = document.getElementById('mortgage-calc')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Calculate Loan & EMI
          </button>
        </div>
      </div>
    </div>
  )
}
