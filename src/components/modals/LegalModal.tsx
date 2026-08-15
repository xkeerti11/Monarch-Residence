import { useEffect } from 'react'
import { X, ShieldCheck, FileText, Check } from 'lucide-react'
import { LegalDocType } from '../../types/inquiry.types'

interface LegalModalProps {
  docType: LegalDocType
  onClose: () => void
}

export function LegalModal({ docType, onClose }: LegalModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const titles: Record<LegalDocType, string> = {
    privacy: 'Private Client Confidentiality & Privacy Policy',
    terms: 'Terms of Real Estate Advisory & Representation',
    cookies: 'Cookie Governance & Client Tracking Preferences',
    rera: 'RERA Regulatory Compliance & Statutory Disclosures',
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog legal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close legal modal"
        >
          <X size={20} />
        </button>

        <div className="modal-header-badges">
          <span className="modal-badge">
            <ShieldCheck size={12} /> MONARCH INSTITUTIONAL GOVERNANCE
          </span>
        </div>

        <h2 className="display modal-title">{titles[docType]}</h2>

        <div className="modal-body legal-text-content">
          <p className="legal-update-date">Effective Date: January 2026 · Registered under Indian Real Estate Regulatory Authority</p>

          {docType === 'privacy' && (
            <>
              <p>
                Monarch Residences & Asset Holdings Private Limited is committed to the highest standards of data confidentiality and personal privacy for our global clientele and family office partners.
              </p>
              <h4>1. Information Collected</h4>
              <p>
                We collect personal information (name, direct contact phone, email, and property preferences) exclusively for facilitating private architectural presentations, scheduling site tours, and delivering requested brochures.
              </p>
              <h4>2. Non-Disclosure & Security</h4>
              <p>
                Your personal and financial profile will never be sold, rented, or distributed to any third-party marketing entities. All inquiries are encrypted under TLS 1.3 standards.
              </p>
            </>
          )}

          {docType === 'terms' && (
            <>
              <p>
                All specifications, architectural renderings, floor layouts, dimensions, and amenities showcased on this platform are conceptual representations and subject to final municipal approvals.
              </p>
              <h4>1. Advisory Nature</h4>
              <p>
                Content presented on this website does not constitute an irrevocable commercial offer. Sale transactions are governed solely by the formal Agreement for Sale executed under prevailing Real Estate Regulatory Authority guidelines.
              </p>
            </>
          )}

          {docType === 'cookies' && (
            <>
              <p>
                This platform uses essential cookies and aggregated analytics tokens to personalize your currency preferences (INR/USD/AED), retain measurement units (sq.ft/sq.m), and track high-level engagement.
              </p>
              <div className="cookie-choice-box">
                <div className="cookie-row">
                  <div>
                    <strong>Essential Functional Cookies</strong>
                    <p>Required for currency conversion and floor plan interactivity.</p>
                  </div>
                  <span className="cookie-status active"><Check size={14} /> Always Active</span>
                </div>
              </div>
            </>
          )}

          {docType === 'rera' && (
            <>
              <p>
                All residential projects listed on this platform are registered under respective state Real Estate Regulatory Authorities:
              </p>
              <ul className="rera-list">
                <li>
                  <strong>Monarch One (Mumbai):</strong> MAHARERA Registration No. <code>P51900049281</code> (Available at maharera.mahaonline.gov.in)
                </li>
                <li>
                  <strong>Monarch Heights (Gurugram):</strong> HRERA Registration No. <code>HRERA-GGM/PRJ/2026/892</code> (Available at haryanarera.gov.in)
                </li>
                <li>
                  <strong>Monarch Villas (Goa):</strong> GOA-RERA Registration No. <code>GOA-RERA/PRJ/2026/104</code> (Available at rera.goa.gov.in)
                </li>
              </ul>
            </>
          )}
        </div>

        <div className="modal-cta-group">
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Acknowledge & Close Disclosures
          </button>
        </div>
      </div>
    </div>
  )
}
