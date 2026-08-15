import { useState } from 'react'
import { MapPin, Navigation, Plane, Utensils, HeartPulse, GraduationCap, Clock, LucideIcon } from 'lucide-react'
import { Reveal } from '../common/Reveal'
import { LandmarkCategory } from '../../types/neighborhood.types'
import { neighborhoodData } from '../../data/neighborhood.data'
import { trackEvent } from '../../utils/analytics'

export function NeighborhoodMap() {
  const [activeCategory, setActiveCategory] = useState<LandmarkCategory>('transit')

  const categories: { id: LandmarkCategory; label: string; icon: LucideIcon }[] = [
    { id: 'transit', label: 'Expressway & Sea Link', icon: Navigation },
    { id: 'aviation', label: 'Aviation & Helipads', icon: Plane },
    { id: 'clubs', label: 'Clubs & Michelin Dining', icon: Utensils },
    { id: 'healthcare', label: 'Quaternary Healthcare', icon: HeartPulse },
    { id: 'education', label: 'IB World Schools', icon: GraduationCap },
  ]

  const filteredLandmarks = neighborhoodData.filter((item) => item.category === activeCategory)

  return (
    <section className="section neighborhood-section" id="neighborhood" aria-labelledby="neighborhood-heading">
      <div className="container">
        <Reveal className="neighborhood-header">
          <div>
            <div className="section-label-group">
              <p className="section-label light">05 / Strategic Geographic Capital</p>
              <span className="gis-badge">
                <MapPin size={12} /> SOUTH MUMBAI ARTERIAL RADAR
              </span>
            </div>
            <h2 className="display section-heading" id="neighborhood-heading">
              Centrally Positioned. Effortlessly Connected.
            </h2>
          </div>
          <p className="body-copy light-copy neighborhood-intro">
            Positioned along the Worli Sea Face promenade with immediate ingress onto the Coastal Road and Bandra-Worli Sea Link.
          </p>
        </Reveal>

        {/* Category Tabs */}
        <div className="neighborhood-tabs">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <button
                type="button"
                key={cat.id}
                className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id)
                  trackEvent('neighborhood_tab_switch', { category: cat.id })
                }}
              >
                <Icon size={14} />
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Landmarks Grid */}
        <div className="landmarks-grid">
          {filteredLandmarks.map((landmark, idx) => (
            <Reveal className="landmark-card" delay={idx * 100} key={landmark.id}>
              <div className="landmark-card-top">
                <div className="time-badge">
                  <Clock size={13} />
                  <span>{landmark.driveTime}</span>
                </div>
                <span className="distance-tag">{landmark.distance}</span>
              </div>

              <h3 className="landmark-name">{landmark.name}</h3>
              <p className="landmark-desc">{landmark.description}</p>
            </Reveal>
          ))}
        </div>

        {/* Strategic Infrastructure Bar */}
        <Reveal className="infrastructure-summary-bar" delay={200}>
          <div className="infra-col">
            <span className="infra-label">Coastal Road Marine Drive Ingress</span>
            <strong className="infra-val">800 Metres · 2 Minutes</strong>
          </div>
          <div className="infra-col">
            <span className="infra-label">BKC Financial District via Sea Link</span>
            <strong className="infra-val">12 Minutes Commute</strong>
          </div>
          <div className="infra-col">
            <span className="infra-label">Nariman Point Diplomatic Core</span>
            <strong className="infra-val">15 Minutes Commute</strong>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
