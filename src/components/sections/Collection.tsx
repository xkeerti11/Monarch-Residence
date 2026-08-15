import { useState, useMemo } from 'react'
import { ArrowRight, Filter, GitCompare, ShieldCheck, Check, Sparkles } from 'lucide-react'
import { Reveal } from '../common/Reveal'
import { Media } from '../common/Media'
import { PropertyItem } from '../../types/property.types'
import { propertiesData } from '../../data/properties.data'
import { useCurrencyConverter } from '../../hooks/useCurrencyConverter'
import { formatPrice, formatAreaRange } from '../../utils/formatters'
import { trackEvent } from '../../utils/analytics'

interface CollectionProps {
  onSelectProperty: (property: PropertyItem) => void
  selectedForComparison: string[]
  onToggleComparison: (propertyId: string) => void
  onOpenComparator: () => void
  initialLocationFilter?: string
  initialTypeFilter?: string
}

export function Collection({
  onSelectProperty,
  selectedForComparison,
  onToggleComparison,
  onOpenComparator,
  initialLocationFilter = 'All',
  initialTypeFilter = 'All',
}: CollectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const { currency, areaUnit } = useCurrencyConverter()

  const categories = [
    { id: 'All', label: 'All Portfolio Residences' },
    { id: 'Sky Residences', label: 'Sky Residences (Mumbai)' },
    { id: 'Penthouses', label: 'Sky Penthouses (NCR)' },
    { id: 'Beachfront', label: 'Coastal Beach Estates (Goa)' },
  ]

  const filteredProperties = useMemo(() => {
    return propertiesData.filter((p) => {
      // Category filter
      if (activeCategory === 'Sky Residences' && p.city !== 'Mumbai') return false
      if (activeCategory === 'Penthouses' && p.city !== 'Gurugram') return false
      if (activeCategory === 'Beachfront' && p.city !== 'Goa') return false

      // Location filter from Hero search
      if (initialLocationFilter !== 'All' && p.city !== initialLocationFilter) return false

      return true
    })
  }, [activeCategory, initialLocationFilter])

  return (
    <section className="section collection" id="residences" aria-labelledby="collection-heading">
      <div className="container">
        <Reveal className="collection-header">
          <div>
            <div className="section-label-group">
              <p className="section-label light">02 / The Master Collection</p>
              <span className="live-inventory-badge">
                <Sparkles size={12} /> LIVE INVENTORY VERIFIED
              </span>
            </div>
            <h2 className="display section-heading" id="collection-heading">
              The Residential Portfolio
            </h2>
          </div>
          <p className="body-copy light-copy collection-intro">
            Three distinguished expressions of residential luxury, each sculpted around light, acoustic stillness, and coastal horizons.
          </p>
        </Reveal>

        {/* Filter Pills & Comparison Status */}
        <div className="collection-controls">
          <div className="category-pills">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.id}
                className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id)
                  trackEvent('collection_filter_change', { category: cat.id })
                }}
              >
                <Filter size={12} />
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {selectedForComparison.length > 0 && (
            <button
              type="button"
              className="compare-banner-btn"
              onClick={onOpenComparator}
            >
              <GitCompare size={15} />
              <span>
                Compare Residences ({selectedForComparison.length}/3)
              </span>
              <ArrowRight size={14} />
            </button>
          )}
        </div>

        <div className="collection-grid">
          {filteredProperties.map((property, index) => {
            const isCompared = selectedForComparison.includes(property.id)
            const availableUnits = property.inventory.filter((u) => u.status === 'Available').length

            return (
              <Reveal className="property-card" delay={index * 140} key={property.id}>
                <div className="card-top-row">
                  <span className="property-index">{property.number}</span>
                  <div className="card-badges">
                    <span className="inventory-pill">
                      {availableUnits} Units Available
                    </span>
                    <label className="compare-checkbox-label">
                      <input
                        type="checkbox"
                        checked={isCompared}
                        onChange={() => onToggleComparison(property.id)}
                        aria-label={`Select ${property.name} for side-by-side comparison`}
                      />
                      <span className="custom-check">
                        {isCompared && <Check size={12} />}
                      </span>
                      <span>Compare</span>
                    </label>
                  </div>
                </div>

                <div className="property-media-wrapper">
                  <Media
                    kind={property.kind}
                    label={`${property.name} architecture preview`}
                    className={`property-media ${property.tone}`}
                  />
                  <div className="property-overlay-rera">
                    <ShieldCheck size={11} /> {property.reraId}
                  </div>
                </div>

                <div className="property-card-content">
                  <div className="property-header-meta">
                    <h3 className="display property-name">{property.name}</h3>
                    <span className="property-city-tag">{property.city}</span>
                  </div>

                  <p className="property-location">{property.location}</p>

                  <div className="dark-divider" />

                  <div className="property-details">
                    <div>
                      <span className="detail-label">Configuration</span>
                      <span className="detail-value">{property.bedroomsMin}–{property.bedroomsMax} Bedrooms</span>
                    </div>
                    <div>
                      <span className="detail-label">Starting Price</span>
                      <span className="detail-value price-highlight">
                        {formatPrice(property.priceINR, currency)}
                      </span>
                    </div>
                    <div>
                      <span className="detail-label">Carpet Area</span>
                      <span className="detail-value">
                        {formatAreaRange(property.carpetAreaSqFtMin, property.carpetAreaSqFtMax, areaUnit)}
                      </span>
                    </div>
                    <div>
                      <span className="detail-label">Possession</span>
                      <span className="detail-value">{property.possessionDate}</span>
                    </div>
                  </div>

                  <div className="card-amenities-snippet">
                    {property.amenities.slice(0, 3).map((a, i) => (
                      <span key={i} className="micro-amenity">
                        • {a}
                      </span>
                    ))}
                  </div>

                  <div className="card-actions">
                    <button
                      type="button"
                      className="btn btn-primary w-full"
                      onClick={() => {
                        onSelectProperty(property)
                        trackEvent('property_interest', { property: property.name, source: 'collection_card' })
                      }}
                    >
                      View Specs & Inventory <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
