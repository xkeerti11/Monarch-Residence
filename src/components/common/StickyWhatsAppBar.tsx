import { MessageSquare, PhoneCall, ArrowUpRight } from 'lucide-react'
import { trackEvent } from '../../utils/analytics'

export function StickyWhatsAppBar({ onOpenBrochure }: { onOpenBrochure: () => void }) {
  const whatsappNumber = '919876543210'
  const messageText = encodeURIComponent(
    'Hello Monarch Private Client Services, I would like to schedule a confidential private residence presentation.'
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${messageText}`

  return (
    <aside className="sticky-vip-bar" aria-label="VIP Concierge Quick Access">
      <div className="vip-bar-inner">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="vip-action-btn whatsapp"
          onClick={() => trackEvent('whatsapp_click', { source: 'floating_bar' })}
          aria-label="Direct WhatsApp Private Relationship Manager"
        >
          <span className="icon-pulse">
            <MessageSquare size={16} />
          </span>
          <span className="btn-text">
            <strong>VIP Concierge</strong>
            <small>WhatsApp Direct</small>
          </span>
          <ArrowUpRight size={14} className="arrow" />
        </a>

        <button
          type="button"
          className="vip-action-btn brochure"
          onClick={() => {
            onOpenBrochure()
            trackEvent('brochure_modal_open', { source: 'floating_bar' })
          }}
          aria-label="Request Architectural Lookbook PDF"
        >
          <PhoneCall size={15} />
          <span className="btn-text">
            <strong>Private Advisory</strong>
            <small>Request Call / Lookbook</small>
          </span>
        </button>
      </div>
    </aside>
  )
}
