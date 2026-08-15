import { Reveal } from '../common/Reveal'
import { statsData } from '../../data/stats.data'
import { Award, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react'

export function Numbers() {
  const icons = [TrendingUp, Sparkles, ShieldCheck, Award]

  return (
    <section className="section numbers" id="numbers" aria-labelledby="numbers-heading">
      <div className="container">
        <Reveal className="numbers-header">
          <div>
            <p className="section-label light">06 / Institutional Scale & Governance</p>
            <h2 className="display section-heading" id="numbers-heading">
              A Proven Legacy of<br />Architectural Execution.
            </h2>
          </div>
          <p className="body-copy light-copy numbers-intro">
            Measured not in superficial claims, but in institutional capital entrusted, structural standards surpassed, and 100% on-time RERA handover milestones.
          </p>
        </Reveal>

        <div className="stats-grid">
          {statsData.map((stat, index) => {
            const Icon = icons[index]
            return (
              <Reveal className="stat" delay={index * 110} key={stat.label}>
                <div className="stat-icon-row">
                  <Icon size={18} className="stat-icon" />
                </div>
                <strong
                  className="stat-value"
                  data-counter="true"
                  data-value={stat.value}
                  data-suffix={stat.suffix}
                >
                  {stat.prefix || ''}0{stat.suffix}
                </strong>
                <span className="stat-label">{stat.label}</span>
                <p className="stat-sublabel">{stat.sublabel}</p>
              </Reveal>
            )
          })}
        </div>

        <div className="stats-foot">
          <span>01 — Uncompromising adherence to structural and environmental governance.</span>
          <span>MONARCH ASSET HOLDINGS / 2026</span>
        </div>
      </div>
    </section>
  )
}
