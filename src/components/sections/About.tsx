import { Reveal } from '../common/Reveal'
import { Media } from '../common/Media'
import { ShieldCheck, Award, Building, Sparkles } from 'lucide-react'

export function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-heading">
      <div className="container about-grid">
        <Reveal className="about-copy">
          <p className="section-label">09 / The Monarch Point of View</p>
          <h2 className="display" id="about-heading">
            Designed for the Life You Want to Remember.
          </h2>

          <p className="body-copy">
            Monarch was founded on an uncompromising principle: a home should provide profound psychological tranquility. A sense of arrival that calms the mind. A sanctuary worthy of the memories created within it.
          </p>

          <p className="body-copy">
            We collaborate with internationally revered structural engineers, master stone artisans, and acoustic physicists to craft residences with a rare quality — they feel structurally inevitable, as if they have always belonged where they stand.
          </p>

          <div className="awards-row">
            <span className="award-pill">
              <ShieldCheck size={13} /> 100% RERA Compliant
            </span>
            <span className="award-pill">
              <Award size={13} /> IGBC Platinum Standard
            </span>
            <span className="award-pill">
              <Building size={13} /> 15+ Years Track Record
            </span>
            <span className="award-pill">
              <Sparkles size={13} /> Private Family Office Advisory
            </span>
          </div>
        </Reveal>

        <Reveal className="about-media" delay={180}>
          <Media
            kind="designStudio"
            label="Monarch design team and architectural studio"
            className="about-placeholder"
          />
        </Reveal>
      </div>
    </section>
  )
}
