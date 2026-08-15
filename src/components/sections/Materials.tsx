import { useState } from 'react'
import { Reveal } from '../common/Reveal'
import { Media } from '../common/Media'
import { materialsData } from '../../data/materials.data'
import { MapPin, Award, Check } from 'lucide-react'
import { trackEvent } from '../../utils/analytics'

export function Materials() {
  const [activeId, setActiveId] = useState(materialsData[0].id)
  const material = materialsData.find((item) => item.id === activeId) || materialsData[0]

  return (
    <section className="section materials" id="materials" aria-labelledby="materials-heading">
      <div className="container">
        <Reveal className="materials-header">
          <div>
            <div className="section-label-group">
              <p className="section-label">08 / Material Language & Provenance</p>
            </div>
            <h2 className="display section-heading" id="materials-heading">
              Artisanal Tactility &<br />Material Permanence.
            </h2>
          </div>
          <p className="body-copy">
            A restrained palette of natural materials sourced from historic quarries and managed European forests, selected specifically for how they age with dignified patina.
          </p>
        </Reveal>

        <div className="materials-grid">
          <Reveal className="material-list">
            {materialsData.map((item) => (
              <button
                type="button"
                className={`material-button ${activeId === item.id ? 'active' : ''}`}
                key={item.id}
                onClick={() => {
                  setActiveId(item.id)
                  trackEvent('material_view', { material: item.name })
                }}
              >
                <div className="material-btn-left">
                  <span>{item.name}</span>
                  <small className="provenance-origin">
                    <MapPin size={11} /> {item.origin}
                  </small>
                </div>
                <span className="material-num">{item.number}</span>
              </button>
            ))}
          </Reveal>

          <Reveal className="material-display" delay={150}>
            <div className="media-frame">
              <Media
                kind={material.kind}
                label={`${material.name} material detail`}
                className={material.tone}
              />
              <div className="video-overlay" />
              <div className="material-display-content">
                <div className="provenance-badge">
                  <MapPin size={12} /> {material.origin}
                </div>
                <h3>{material.name}</h3>
                <p className="craft-desc">{material.craftsmanship}</p>
                <p className="material-narrative">{material.description}</p>
                <div className="sustainability-tag">
                  <Award size={13} />
                  <span>{material.sustainability}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
