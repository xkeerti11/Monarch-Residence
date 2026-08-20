import { useState, useEffect } from 'react'
import { ArrowRight, ChevronDown, Volume2, VolumeX, ShieldCheck, Search, SlidersHorizontal } from 'lucide-react'
import { Media } from '../common/Media'
import { useCurrencyConverter } from '../../hooks/useCurrencyConverter'
import { formatPrice } from '../../utils/formatters'
import { trackEvent } from '../../utils/analytics'

interface HeroProps {
  onQuickSearch: (location: string, type: string) => void
  onOpenBrochure: () => void
}

export function Hero({ onQuickSearch, onOpenBrochure }: HeroProps) {
  const [ready, setReady] = useState(true)
  const [muted, setMuted] = useState(true)
  const [searchLocation, setSearchLocation] = useState('All')
  const [searchType, setSearchType] = useState('All')
  const { currency } = useCurrencyConverter()

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onQuickSearch(searchLocation, searchType)
    const el = document.getElementById('residences')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    trackEvent('hero_quick_search', { location: searchLocation, type: searchType })
  }

  return (
    <section className={`hero ${ready ? 'ready' : ''}`} id="top" aria-labelledby="hero-heading">
      <div className="hero-media">
        <Media kind="hero" label="Cinematic view of Monarch coastal sky residences" priority />
        <div className="video-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-badge-group" data-hero>
          <span className="hero-location-pill">
            <span className="pulse-dot" />
            FLAGSHIP LAUNCH · WORLI SEA FACE, MUMBAI
          </span>
          <span className="hero-rera-badge">
            <ShieldCheck size={12} /> MAHARERA REGISTERED
          </span>
        </div>

        <h1 className="display hero-title" id="hero-heading">
          <span data-hero>ARCHITECTURAL</span>
          <span data-hero>PERMANENCE</span>
          <span data-hero>ON THE ARABIAN SEA.</span>
        </h1>

        <p className="hero-copy" data-hero>
          Forty-two bespoke duplex sky mansions and coastal beach estates.
          Starting from {formatPrice(4.8, currency)} to {formatPrice(15.0, currency)}.
        </p>

        {/* Quick Search Floating Bar */}
        <form
          className="hero-search-bar"
          onSubmit={handleSearchSubmit}
          data-hero
          aria-label="Quick Residence Filter"
        >
          <div className="search-field">
            <label htmlFor="search-location">Location</label>
            <select
              id="search-location"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            >
              <option value="All">All Coastal & Skyline Locations</option>
              <option value="Mumbai">Worli Sea Face, Mumbai</option>
              <option value="Gurugram">Golf Course Ext, Gurugram</option>
              <option value="Goa">Candolim Beach, Goa</option>
            </select>
          </div>

          <div className="search-field">
            <label htmlFor="search-type">Residence Type</label>
            <select
              id="search-type"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="All">All Residence Formats</option>
              <option value="Sky Residences">Luxury Sky Residences (3–4 BHK)</option>
              <option value="Penthouses">Duplex Sky Penthouses (4–5 BHK)</option>
              <option value="Beachfront">Beachfront Private Villas (4–6 BHK)</option>
            </select>
          </div>

          <button type="submit" className="search-btn" aria-label="Filter residences">
            <Search size={16} />
            <span>Discover Units</span>
          </button>
        </form>

        <div className="hero-cta-group" data-hero>
          <a
            className="btn btn-primary"
            href="#residences"
            onClick={() => trackEvent('cta_click', { label: 'explore_residences', location: 'hero' })}
          >
            Explore The Collection <ArrowRight size={16} />
          </a>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              onOpenBrochure()
              trackEvent('cta_click', { label: 'download_lookbook', location: 'hero' })
            }}
          >
            <SlidersHorizontal size={15} /> Download VIP Lookbook
          </button>
        </div>
      </div>

      <div className="hero-bottom-controls">
        <a className="scroll-cue" href="#statement" aria-label="Scroll to discover monograph">
          <span>DISCOVER MONOGRAPH</span>
          <ChevronDown size={18} />
        </a>
      </div>
    </section>
  )
}
