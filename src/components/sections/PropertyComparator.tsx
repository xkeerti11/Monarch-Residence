import { useEffect } from 'react'
import { X, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react'
import { PropertyItem } from '../../types/property.types'
import { propertiesData } from '../../data/properties.data'
import { useCurrencyConverter } from '../../hooks/useCurrencyConverter'
import { formatPrice, formatAreaRange } from '../../utils/formatters'
import { Media } from '../common/Media'
import { trackEvent } from '../../utils/analytics'

interface PropertyComparatorProps {
  selectedIds: string[]
  onClose: () => void
  onRemove: (id: string) => void
  onInquire: (propertyName: string) => void
}

export function PropertyComparator({
  selectedIds,
  onClose,
  onRemove,
  onInquire,
}: PropertyComparatorProps) {
  const { currency, areaUnit } = useCurrencyConverter()

  const comparedProperties: PropertyItem[] = propertiesData.filter((p) =>
    selectedIds.includes(p.id)
  )

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (comparedProperties.length === 0) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog comparator-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="comparator-header">
          <div>
            <span className="modal-badge">
              <Sparkles size={12} /> ARCHITECTURAL COMPARISON MATRIX
            </span>
            <h2 className="display modal-title" style={{ marginTop: '6px' }}>
              Side-by-Side Residence Analysis
            </h2>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close comparison matrix"
          >
            <X size={20} />
          </button>
        </div>

        <div className="comparator-table-wrapper">
          <div
            className="comparator-grid"
            style={{
              gridTemplateColumns: `200px repeat(${comparedProperties.length}, minmax(280px, 1fr))`,
            }}
          >
            {/* Header Row: Property Thumbnail & Name */}
            <div className="compare-label-cell sticky-col">
              <strong>Residence</strong>
            </div>
            {comparedProperties.map((p) => (
              <div className="compare-card-cell" key={p.id}>
                <button
                  type="button"
                  className="remove-compare-btn"
                  onClick={() => onRemove(p.id)}
                  title={`Remove ${p.name} from comparison`}
                >
                  <X size={14} />
                </button>
                <div className="compare-img-box">
                  <Media kind={p.kind} label={p.name} />
                </div>
                <h3 className="compare-prop-name">{p.name}</h3>
                <p className="compare-prop-loc">{p.location}</p>
                <span className="compare-prop-rera">
                  <ShieldCheck size={11} /> {p.reraId}
                </span>
              </div>
            ))}

            {/* Row: Starting Price */}
            <div className="compare-label-cell sticky-col">Starting Price</div>
            {comparedProperties.map((p) => (
              <div className="compare-data-cell highlight" key={p.id}>
                <strong>{formatPrice(p.priceINR, currency)}</strong>
              </div>
            ))}

            {/* Row: Carpet Area */}
            <div className="compare-label-cell sticky-col">Carpet Area Range</div>
            {comparedProperties.map((p) => (
              <div className="compare-data-cell" key={p.id}>
                {formatAreaRange(p.carpetAreaSqFtMin, p.carpetAreaSqFtMax, areaUnit)}
              </div>
            ))}

            {/* Row: Configuration */}
            <div className="compare-label-cell sticky-col">Configuration</div>
            {comparedProperties.map((p) => (
              <div className="compare-data-cell" key={p.id}>
                {p.bedroomsMin}–{p.bedroomsMax} BHK Luxury Suites ({p.bathroomsMin}–{p.bathroomsMax} Baths)
              </div>
            ))}

            {/* Row: Clear Slab Height */}
            <div className="compare-label-cell sticky-col">Clear Ceiling Height</div>
            {comparedProperties.map((p) => (
              <div className="compare-data-cell" key={p.id}>
                {p.specs.ceilingHeight}
              </div>
            ))}

            {/* Row: Structural Glazing */}
            <div className="compare-label-cell sticky-col">Façade & Glazing</div>
            {comparedProperties.map((p) => (
              <div className="compare-data-cell" key={p.id}>
                {p.specs.glazing}
              </div>
            ))}

            {/* Row: Modular Kitchen */}
            <div className="compare-label-cell sticky-col">Integrated Kitchen</div>
            {comparedProperties.map((p) => (
              <div className="compare-data-cell" key={p.id}>
                {p.specs.kitchen}
              </div>
            ))}

            {/* Row: Dedicated Car Parks */}
            <div className="compare-label-cell sticky-col">Reserved Car Parks</div>
            {comparedProperties.map((p) => (
              <div className="compare-data-cell" key={p.id}>
                {p.carParks} Covered EV-Ready Bays
              </div>
            ))}

            {/* Row: Possession Date */}
            <div className="compare-label-cell sticky-col">Possession Milestone</div>
            {comparedProperties.map((p) => (
              <div className="compare-data-cell" key={p.id}>
                {p.possessionDate}
              </div>
            ))}

            {/* Row: Actions */}
            <div className="compare-label-cell sticky-col">Consultation</div>
            {comparedProperties.map((p) => (
              <div className="compare-action-cell" key={p.id}>
                <button
                  type="button"
                  className="btn btn-primary w-full"
                  onClick={() => {
                    onInquire(p.name)
                    onClose()
                    trackEvent('comparator_inquire_click', { property: p.name })
                  }}
                >
                  Inquire for {p.name} <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
