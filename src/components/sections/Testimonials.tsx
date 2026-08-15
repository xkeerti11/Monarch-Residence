import { Reveal } from '../common/Reveal'
import { testimonialsData } from '../../data/stats.data'
import { ShieldCheck } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="section testimonial" id="testimonials" aria-labelledby="testimonial-heading">
      <div className="container">
        <Reveal className="testimonial-header">
          <div>
            <p className="section-label">10 / Resident Accolades & Perspectives</p>
            <h2 className="display section-heading" id="testimonial-heading">
              In The Words of Our<br />Resident Patrons.
            </h2>
          </div>
          <p className="body-copy">
            The authentic measure of exceptional architecture is how an address becomes part of a family’s generational legacy.
          </p>
        </Reveal>

        <div className="testimonials-grid">
          {testimonialsData.map((item, index) => (
            <Reveal className="testimonial-card" delay={index * 130} key={item.author}>
              <span className="quote-mark">“</span>
              <blockquote>{item.quote}</blockquote>

              <div className="testimonial-meta">
                <strong className="testimonial-author">{item.author}</strong>
                <span className="testimonial-role">{item.role}</span>
                <span className="testimonial-verification">
                  <ShieldCheck size={12} /> {item.verification}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="satisfaction" delay={200}>
          <strong data-counter="true" data-value="100" data-suffix="%">
            0%
          </strong>
          <span>On-Time Statutory Handover Track Record</span>
        </Reveal>
      </div>
    </section>
  )
}
