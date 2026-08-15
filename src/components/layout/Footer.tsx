import { Instagram, Linkedin, Twitter, Shield, Award, Building2 } from 'lucide-react'
import { LogoMark } from '../common/LogoMark'
import { LegalDocType } from '../../types/inquiry.types'

export function Footer({ onOpenLegal }: { onOpenLegal: (type: LegalDocType) => void }) {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-col">
          <a className="brand" href="#top">
            <LogoMark />
            <div className="brand-text">
              <span>MONARCH</span>
              <small>RESIDENCES</small>
            </div>
          </a>
          <p className="footer-brand-copy">
            Curating iconic residential landmarks across India’s most coveted coastal enclaves and skyline corridors.
            Engineered for generational permanence.
          </p>
          <div className="regulatory-badges">
            <span className="badge-pill">
              <Shield size={13} /> MahaRERA Certified
            </span>
            <span className="badge-pill">
              <Award size={13} /> IGBC Platinum Rated
            </span>
            <span className="badge-pill">
              <Building2 size={13} /> ISO 9001:2015
            </span>
          </div>
        </div>

        <div>
          <h2 className="footer-heading">Flagship Residences</h2>
          <ul className="footer-links">
            <li>
              <a href="#residences">
                <strong>Monarch One</strong>
                <small>Worli Sea Face, Mumbai · MAHARERA/P51900049281</small>
              </a>
            </li>
            <li>
              <a href="#residences">
                <strong>Monarch Heights</strong>
                <small>Golf Course Ext, Gurugram · HRERA-GGM/PRJ/2026/892</small>
              </a>
            </li>
            <li>
              <a href="#residences">
                <strong>Monarch Villas</strong>
                <small>Candolim Coast, Goa · GOA-RERA/PRJ/2026/104</small>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Advisory & Governance</h2>
          <ul className="footer-links">
            <li><a href="#architecture">Architectural Monograph</a></li>
            <li><a href="#mortgage-calc">Financial Amortization Suite</a></li>
            <li><a href="#neighborhood">Strategic Connectivity Map</a></li>
            <li><a href="#journal">Editorial Journal</a></li>
            <li><a href="#inquiry">Private Client Services</a></li>
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Global Family Office</h2>
          <address className="footer-address">
            <p><strong>Mumbai Headquarters:</strong> Level 45, Monarch One Tower, Worli Sea Face, Mumbai 400030</p>
            <p><strong>Client Desk:</strong> +91 9876 543 210</p>
            <p><strong>Email:</strong> concierge@monarch.com</p>
          </address>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Monarch Instagram">
              <Instagram size={17} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Monarch LinkedIn">
              <Linkedin size={17} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Monarch Twitter">
              <Twitter size={17} />
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="copyright-text">
          <span>© 2026 Monarch Residences & Asset Holdings Private Limited. All rights reserved.</span>
          <p className="disclaimer-text">
            Disclaimer: Images, plans, and specifications are conceptual representations and subject to architectural approvals. Registered under Real Estate (Regulation and Development) Act.
          </p>
        </div>

        <nav className="footer-legal" aria-label="Legal & Privacy Navigation">
          <button type="button" onClick={() => onOpenLegal('privacy')}>Privacy Policy</button>
          <button type="button" onClick={() => onOpenLegal('terms')}>Terms of Advisory</button>
          <button type="button" onClick={() => onOpenLegal('cookies')}>Cookie Preferences</button>
          <button type="button" onClick={() => onOpenLegal('rera')}>RERA Disclosures</button>
        </nav>
      </div>
    </footer>
  )
}
