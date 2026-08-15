import { useState, useEffect, FormEvent } from 'react'
import { ArrowRight, Phone, Mail, MapPin, MessageSquare, ShieldCheck, Check, Sparkles, FileText } from 'lucide-react'
import { Reveal } from '../common/Reveal'
import { InquiryFormData, BuyerProfile, TimelinePreference } from '../../types/inquiry.types'
import { trackEvent } from '../../utils/analytics'

interface InquiryProps {
  selectedProperty?: string
  onOpenBrochure: () => void
}

export function Inquiry({ selectedProperty = '', onOpenBrochure }: InquiryProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    residenceInterest: selectedProperty || 'Monarch One (Worli Sea Face)',
    buyerProfile: 'End-User Residence',
    timeline: 'Immediate / Ready',
    requestBrochure: true,
    ndaRequired: false,
    notes: '',
  })

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (selectedProperty) {
      setFormData((prev) => ({ ...prev, residenceInterest: selectedProperty }))
    }
  }, [selectedProperty])

  const updateField = (field: keyof InquiryFormData, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const errs: Partial<Record<keyof InquiryFormData, string>> = {}
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Please provide a valid email address.'
    if (!/^\+?[\d\s().-]{8,}$/.test(formData.phone)) errs.phone = 'Please provide a valid direct phone number.'
    if (!formData.residenceInterest) errs.residenceInterest = 'Please select a residence of interest.'
    return errs
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('sending')
    trackEvent('vip_inquiry_submission', {
      residence: formData.residenceInterest,
      buyerProfile: formData.buyerProfile,
      nda: formData.ndaRequired,
    })

    const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''
    if (formEndpoint) {
      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (!response.ok) throw new Error('Form submission failed')
        setStatus('success')
      } catch {
        setStatus('error')
      }
    } else {
      // Demo simulated response
      setTimeout(() => {
        setStatus('success')
      }, 750)
    }
  }

  const whatsappNumber = '919876543210'
  const whatsappMsg = encodeURIComponent(
    `Hello Monarch Private Client Services, I would like to schedule a private confidential briefing regarding ${formData.residenceInterest}.`
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`

  return (
    <section className="section inquiry" id="inquiry" aria-labelledby="inquiry-heading">
      <div className="container cta-grid">
        {/* Left Editorial Info */}
        <Reveal className="cta-copy">
          <div className="section-label-group">
            <p className="section-label light">12 / Private Advisory & Presentation</p>
            <span className="live-inventory-badge">
              <Sparkles size={12} /> CONFIDENTIAL CLIENT DESK
            </span>
          </div>

          <h2 className="display" id="inquiry-heading">
            Schedule a Confidential Private Viewing.
          </h2>

          <p className="body-copy light-copy">
            Our Senior Private Client Partner will coordinate a bespoke architectural presentation, physical scale-model walkthrough, and customized acquisition structuring.
          </p>

          {/* Instant Contact Cards */}
          <div className="contact-list">
            <a
              className="contact-card whatsapp-special"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { source: 'inquiry_section' })}
            >
              <span className="contact-icon whatsapp">
                <MessageSquare size={18} />
              </span>
              <span className="contact-text">
                <small>Instant Encrypted Advisory</small>
                <span>WhatsApp Private Client Desk</span>
              </span>
              <ArrowRight size={17} />
            </a>

            <a className="contact-card" href="tel:+919876543210">
              <span className="contact-icon">
                <Phone size={17} />
              </span>
              <span className="contact-text">
                <small>Direct Executive Line</small>
                <span>+91 9876 543 210</span>
              </span>
              <ArrowRight size={17} />
            </a>

            <a className="contact-card" href="mailto:concierge@monarch.com">
              <span className="contact-icon">
                <Mail size={17} />
              </span>
              <span className="contact-text">
                <small>Confidential Email</small>
                <span>concierge@monarch.com</span>
              </span>
              <ArrowRight size={17} />
            </a>

            <div className="contact-card">
              <span className="contact-icon">
                <MapPin size={17} />
              </span>
              <span className="contact-text">
                <small>Private Client Experience Centre</small>
                <span>Level 45, Monarch One, Worli Sea Face, Mumbai</span>
              </span>
            </div>
          </div>

          <div className="inquiry-brochure-prompt">
            <button
              type="button"
              className="btn btn-ghost light-ghost"
              onClick={onOpenBrochure}
            >
              <FileText size={15} /> Request Full Architectural Lookbook (PDF)
            </button>
          </div>
        </Reveal>

        {/* Right Form Card */}
        <Reveal delay={180}>
          <form className="form-card" onSubmit={handleSubmit} noValidate>
            <div className="form-card-header">
              <h3>Private Viewing Registration</h3>
              <p className="form-card-subtitle">
                Fill the confidential form below to receive a personalized briefing schedule.
              </p>
            </div>

            {/* Name */}
            <div className="form-field">
              <label htmlFor="inquiry-name">Full Name & Salutation *</label>
              <input
                id="inquiry-name"
                type="text"
                placeholder="e.g. Dr. Rajesh Singhania"
                value={formData.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                aria-invalid={Boolean(errors.fullName)}
              />
              {errors.fullName && <span className="field-error">{errors.fullName}</span>}
            </div>

            {/* Email & Phone Grid */}
            <div className="form-row-2">
              <div className="form-field">
                <label htmlFor="inquiry-email">Email Address *</label>
                <input
                  id="inquiry-email"
                  type="email"
                  placeholder="r.singhania@domain.com"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="inquiry-phone">Direct Phone *</label>
                <input
                  id="inquiry-phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </div>
            </div>

            {/* Residence Interest */}
            <div className="form-field">
              <label htmlFor="inquiry-residence">Residence of Interest *</label>
              <select
                id="inquiry-residence"
                value={formData.residenceInterest}
                onChange={(e) => updateField('residenceInterest', e.target.value)}
              >
                <option>Monarch One (Worli Sea Face, Mumbai)</option>
                <option>Monarch Heights (Golf Course Ext, Gurugram)</option>
                <option>Monarch Villas (Candolim Beach, Goa)</option>
                <option>Multiple Portfolio Residences / Bulk Investment</option>
              </select>
            </div>

            {/* Buyer Profile & Timeline */}
            <div className="form-row-2">
              <div className="form-field">
                <label htmlFor="inquiry-profile">Acquisition Purpose</label>
                <select
                  id="inquiry-profile"
                  value={formData.buyerProfile}
                  onChange={(e) => updateField('buyerProfile', e.target.value as BuyerProfile)}
                >
                  <option>End-User Residence</option>
                  <option>NRI Portfolio Investment</option>
                  <option>Penthouse Upgrade</option>
                  <option>Institutional Buyer</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="inquiry-timeline">Target Timeline</label>
                <select
                  id="inquiry-timeline"
                  value={formData.timeline}
                  onChange={(e) => updateField('timeline', e.target.value as TimelinePreference)}
                >
                  <option>Immediate / Ready</option>
                  <option>Next 3-6 Months</option>
                  <option>Q4 2026 / Under Construction</option>
                </select>
              </div>
            </div>

            {/* Checkbox Options */}
            <div className="form-checkboxes">
              <label className="checkbox-custom-label">
                <input
                  type="checkbox"
                  checked={formData.ndaRequired}
                  onChange={(e) => updateField('ndaRequired', e.target.checked)}
                />
                <span className="checkbox-box">
                  {formData.ndaRequired && <Check size={12} />}
                </span>
                <span>Request Non-Disclosure Agreement (NDA) prior to floor plan release</span>
              </label>
            </div>

            <button
              className="btn btn-primary form-submit"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Submitting Confidential Request…' : 'Request Private Viewing & Briefing'}{' '}
              <ArrowRight size={16} />
            </button>

            {status === 'success' && (
              <div className="form-status success" role="status">
                <Check size={18} />
                <div>
                  <strong>Thank You for Registering Your Interest.</strong>
                  <p>Our Senior Private Client Director will contact you within 2 business hours to coordinate your private briefing.</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <p className="form-status error" role="alert">
                Submission could not be completed. Please reach us directly via WhatsApp or phone.
              </p>
            )}

            <div className="form-security-note">
              <ShieldCheck size={13} />
              <span>All client submissions are protected under strict international privacy governance.</span>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
