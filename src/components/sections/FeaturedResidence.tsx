import { useState } from 'react'
import { ArrowRight, Eye, ShieldCheck, CheckCircle2, Calculator } from 'lucide-react'
import { Reveal } from '../common/Reveal'
import { Media } from '../common/Media'
import { PropertyItem } from '../../types/property.types'
import { propertiesData } from '../../data/properties.data'
import { useCurrencyConverter } from '../../hooks/useCurrencyConverter'
import { formatPrice, formatAreaRange } from '../../utils/formatters'
import { trackEvent } from '../../utils/analytics'
import { MediaAsset } from '../../assets'

interface FeaturedResidenceProps {
  onSelectProperty: (property: PropertyItem) => void
  onOpenMortgageWithPrice: (priceINR: number) => void
}

export function FeaturedResidence({ onSelectProperty, onOpenMortgageWithPrice }: FeaturedResidenceProps) {
  const property = propertiesData[0]
  const [activeMedia, setActiveMedia] = useState<MediaAsset>('architecture')
  const { currency, areaUnit } = useCurrencyConverter()

  const mediaTabs: { id: MediaAsset; label: string }[] = [
    { id: 'architecture', label: '01. Oceanfront Elevation' },
    { id: 'interior', label: '02. Living Gallery' },
    { id: 'residentsLounge', label: '03. Private Lounge' },
  ]

  return (
    <section className="section featured-section" id="featured" aria-labelledby="featured-heading">
      <div className="container">
        <div className="featured-grid">
          <Reveal className="featured-media-container" clip>
            <div className="media-tab-frame">
              <Media kind={activeMedia} label={`Monarch One view: ${activeMedia}`} priority />
              <div className="media-angle-pills">
                {mediaTabs.map((tab) => (
                  <button
                    type="button"
                    key={tab.id}
                    className={`angle-btn ${activeMedia === tab.id ? 'active' : ''}`}
                    onClick={() => {
                      setActiveMedia(tab.id)
                      trackEvent('featured_media_toggle', { tab: tab.label })
                    }}
                  >
                    <Eye size={12} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="featured-copy" delay={160}>
            <div className="featured-badge-row">
              <span className="section-label">01 / Flagship Residence</span>
              <span className="rera-pill">
                <ShieldCheck size={12} /> {property.reraId}
              </span>
            </div>

            <h2 className="display" id="featured-heading">
              {property.name}
            </h2>
            <p className="featured-tagline">{property.tagline}</p>
            <p className="body-copy">{property.description}</p>

            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">{property.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Starting Price</span>
                <span className="detail-value highlight">
                  {formatPrice(property.priceINR, currency)}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Carpet Area Range</span>
                <span className="detail-value">
                  {formatAreaRange(property.carpetAreaSqFtMin, property.carpetAreaSqFtMax, areaUnit)}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Handover Timeline</span>
                <span className="detail-value">{property.possessionDate}</span>
              </div>
            </div>

            <div className="architectural-specs-list">
              <div className="spec-row">
                <strong>Structural Glazing:</strong>
                <span>{property.specs.glazing}</span>
              </div>
              <div className="spec-row">
                <strong>Interior Finish:</strong>
                <span>{property.specs.flooring}</span>
              </div>
              <div className="spec-row">
                <strong>Gourmet Kitchen:</strong>
                <span>{property.specs.kitchen}</span>
              </div>
            </div>

            <div className="featured-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  onSelectProperty(property)
                  trackEvent('property_interest', { property: property.name, source: 'featured_section' })
                }}
              >
                Explore Floor Plans & Inventory <ArrowRight size={16} />
              </button>

              <button
                type="button"
                className="btn btn-ghost dark-ghost"
                onClick={() => {
                  onOpenMortgageWithPrice(property.priceINR)
                  trackEvent('open_mortgage_calculator', { property: property.name })
                }}
              >
                <Calculator size={15} /> Calculate EMI / Financing
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
