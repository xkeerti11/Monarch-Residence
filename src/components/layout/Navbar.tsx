import { useState, useEffect } from 'react'
import { ArrowRight, Menu, X, Globe, Sparkles, MessageCircle } from 'lucide-react'
import { LogoMark } from '../common/LogoMark'
import { useCurrencyConverter } from '../../hooks/useCurrencyConverter'
import { CurrencyType, AreaUnitType } from '../../types/property.types'
import { trackEvent } from '../../utils/analytics'

const navLinks = [
  { label: 'Collection', href: '#residences' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Floor Plans', href: '#floor-plans' },
  { label: 'Financials', href: '#mortgage-calc' },
  { label: 'Connectivity', href: '#neighborhood' },
  { label: 'Journal', href: '#journal' },
]

export function Navbar({ onOpenBrochure }: { onOpenBrochure: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false)
  const { currency, setCurrency, areaUnit, setAreaUnit } = useCurrencyConverter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleCurrencyChange = (c: CurrencyType) => {
    setCurrency(c)
    setCurrencyDropdownOpen(false)
    trackEvent('currency_change', { currency: c })
  }

  const handleUnitToggle = () => {
    const nextUnit: AreaUnitType = areaUnit === 'sqft' ? 'sqm' : 'sqft'
    setAreaUnit(nextUnit)
    trackEvent('area_unit_change', { unit: nextUnit })
  }

  return (
    <header className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label="Monarch Residences Home" onClick={closeMenu}>
          <LogoMark />
          <div className="brand-text">
            <span>MONARCH</span>
            <small>RESIDENCES</small>
          </div>
        </a>

        <nav className="nav-pill" aria-label="Main Navigation">
          {navLinks.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          {/* Currency & Unit Switcher */}
          <div className="unit-switch-group">
            <div className="currency-selector-wrapper">
              <button
                type="button"
                className="currency-toggle-btn"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                aria-label={`Current currency: ${currency}. Click to change.`}
                aria-expanded={currencyDropdownOpen}
              >
                <Globe size={13} />
                <span>{currency}</span>
              </button>

              {currencyDropdownOpen && (
                <div className="currency-dropdown">
                  <button
                    type="button"
                    className={`dropdown-item ${currency === 'INR' ? 'active' : ''}`}
                    onClick={() => handleCurrencyChange('INR')}
                  >
                    <strong>₹ INR</strong>
                    <small>Indian Rupee (Cr)</small>
                  </button>
                  <button
                    type="button"
                    className={`dropdown-item ${currency === 'USD' ? 'active' : ''}`}
                    onClick={() => handleCurrencyChange('USD')}
                  >
                    <strong>$ USD</strong>
                    <small>US Dollar (M)</small>
                  </button>
                  <button
                    type="button"
                    className={`dropdown-item ${currency === 'AED' ? 'active' : ''}`}
                    onClick={() => handleCurrencyChange('AED')}
                  >
                    <strong>د.إ AED</strong>
                    <small>UAE Dirham (M)</small>
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              className="unit-toggle-btn"
              onClick={handleUnitToggle}
              title="Toggle area unit (sq.ft / sq.m)"
              aria-label={`Toggle area measurement. Currently ${areaUnit === 'sqft' ? 'Square Feet' : 'Square Meters'}`}
            >
              <span>{areaUnit === 'sqft' ? 'SQ.FT' : 'SQ.M'}</span>
            </button>
          </div>

          <button
            type="button"
            className="nav-brochure-btn"
            onClick={() => {
              onOpenBrochure()
              trackEvent('brochure_click', { location: 'navbar' })
            }}
          >
            <Sparkles size={14} />
            <span>Lookbook</span>
          </button>

          <a
            className="nav-inquire"
            href="#inquiry"
            onClick={() => trackEvent('inquire_click', { location: 'navbar' })}
          >
            Private Inquiry <ArrowRight size={14} />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Slide-over Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}>
          <nav className="mobile-panel" onClick={(e) => e.stopPropagation()} aria-label="Mobile Navigation Drawer">
            <div className="mobile-panel-header">
              <div className="brand">
                <LogoMark />
                <span>MONARCH</span>
              </div>
              <button type="button" className="close-drawer" onClick={closeMenu} aria-label="Close menu">
                <X size={20} />
              </button>
            </div>

            <div className="mobile-selectors">
              <span className="selector-title">Global Currency</span>
              <div className="currency-pills">
                {(['INR', 'USD', 'AED'] as CurrencyType[]).map((c) => (
                  <button
                    type="button"
                    key={c}
                    className={`pill-btn ${currency === c ? 'active' : ''}`}
                    onClick={() => handleCurrencyChange(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="unit-pill-row">
                <button
                  type="button"
                  className={`pill-btn ${areaUnit === 'sqft' ? 'active' : ''}`}
                  onClick={() => setAreaUnit('sqft')}
                >
                  Square Feet (sq.ft)
                </button>
                <button
                  type="button"
                  className={`pill-btn ${areaUnit === 'sqm' ? 'active' : ''}`}
                  onClick={() => setAreaUnit('sqm')}
                >
                  Square Meters (sq.m)
                </button>
              </div>
            </div>

            <div className="mobile-links">
              {navLinks.map((item) => (
                <a className="mobile-nav-link" href={item.href} key={item.href} onClick={closeMenu}>
                  <span>{item.label}</span>
                  <ArrowRight size={16} />
                </a>
              ))}
            </div>

            <div className="mobile-ctas">
              <a
                className="btn btn-primary w-full"
                href="#inquiry"
                onClick={closeMenu}
              >
                Schedule Private Viewing <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost w-full"
                onClick={closeMenu}
              >
                <MessageCircle size={16} /> WhatsApp Private Client Desk
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
