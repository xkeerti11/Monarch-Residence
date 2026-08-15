import { useState, useEffect, FormEvent } from 'react'
import { X, ArrowRight, Download, FileText, Check, ShieldCheck, Sparkles } from 'lucide-react'
import { trackEvent } from '../../utils/analytics'

interface BrochureModalProps {
  onClose: () => void
}

export function BrochureModal({ onClose }: BrochureModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedEdition, setSelectedEdition] = useState('Monarch One Flagship Lookbook')
  const [status, setStatus] = useState<'idle' | 'sending' | 'downloaded'>('idle')

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleDownload = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    setStatus('sending')
    trackEvent('brochure_download_submit', { edition: selectedEdition })

    setTimeout(() => {
      setStatus('downloaded')
      // Trigger a simulated download of architectural lookbook
      const dummyPdfContent = `MONARCH RESIDENCES — ARCHITECTURAL MONOGRAPH & SPECIFICATION PORTFOLIO\nEdition: ${selectedEdition}\nClient: ${name} (${email})\nStatus: Official Approved Master PDF`
      const blob = new Blob([dummyPdfContent], { type: 'text/plain;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `Monarch_Residences_Lookbook_${selectedEdition.replace(/\s+/g, '_')}.txt`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }, 800)
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog brochure-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close lookbook modal"
        >
          <X size={20} />
        </button>

        <div className="modal-header-badges">
          <span className="modal-badge">
            <Sparkles size={12} /> VIP ARCHITECTURAL LOOKBOOK
          </span>
        </div>

        <h2 className="display modal-title">Download Architectural Monograph</h2>
        <p className="modal-subtitle">
          Receive the complete high-resolution 48-page architectural monograph, CAD floor plans, and material provenance specification sheet.
        </p>

        {status === 'downloaded' ? (
          <div className="brochure-success-box">
            <div className="success-icon-circle">
              <Check size={28} />
            </div>
            <h3>Your Lookbook Download Has Started</h3>
            <p>
              A copy of the complete architectural portfolio and high-resolution CAD floor plans has also been dispatched to <strong>{email}</strong>.
            </p>
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Return to Website
            </button>
          </div>
        ) : (
          <form className="brochure-form" onSubmit={handleDownload}>
            <div className="form-field">
              <label htmlFor="brochure-edition">Select Architectural Edition</label>
              <select
                id="brochure-edition"
                value={selectedEdition}
                onChange={(e) => setSelectedEdition(e.target.value)}
              >
                <option>Monarch One (Worli Sea Face, Mumbai) Lookbook</option>
                <option>Monarch Heights (Gurugram) Sky Penthouses Lookbook</option>
                <option>Monarch Villas (Goa) Beach Estates Lookbook</option>
                <option>Complete 2026 Master Portfolio Monograph</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="brochure-name">Full Name *</label>
              <input
                id="brochure-name"
                type="text"
                required
                placeholder="e.g. Vikramaditya Singhania"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="brochure-email">Email Address *</label>
              <input
                id="brochure-email"
                type="email"
                required
                placeholder="v.singhania@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="brochure-phone">Phone Number (Optional for WhatsApp Copy)</label>
              <input
                id="brochure-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                'Preparing High-Res PDF…'
              ) : (
                <>
                  <Download size={16} /> Instant Download Lookbook (PDF)
                </>
              )}
            </button>

            <div className="brochure-security">
              <ShieldCheck size={13} />
              <span>Direct encrypted download. No unsolicited spam.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
