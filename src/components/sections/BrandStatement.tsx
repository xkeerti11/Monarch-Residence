import { Reveal } from '../common/Reveal'

export function BrandStatement() {
  return (
    <section className="section statement" id="statement" aria-labelledby="statement-heading">
      <div className="container">
        <Reveal>
          <p className="statement-eyebrow">THE ARCHITECTURAL MANIFESTO</p>
          <h2 className="display statement-title" id="statement-heading">
            <span>ARCHITECTURE IS NOT MERELY</span>
            <span>THE ENCLOSURE OF SPACE.</span>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <div className="statement-rule" />
        </Reveal>
        <Reveal delay={280}>
          <p className="display statement-secondary">
            <span>IT IS THE CURATION OF LIGHT,</span>
            <span>AIR, AND STILLNESS AMIDST</span>
            <span>THE METROPOLIS.</span>
          </p>
        </Reveal>


        <Reveal delay={380} className="statement-narrative">
          <div className="narrative-grid">
            <div className="narrative-col">
              <span className="col-num">01 / PERMANENCE</span>
              <h4>Built for Generations</h4>
              <p>
                We reject the disposable nature of speculative real estate. Every structural column is cast with high-durability marine-grade concrete, and every facade panel is engineered to withstand century-scale monsoonal winds.
              </p>
            </div>
            <div className="narrative-col">
              <span className="col-num">02 / PROPORTION</span>
              <h4>Mastery of Daylight</h4>
              <p>
                Floor plates are oriented along solar declination trajectories, allowing morning light to flood the private living suites while deflecting peak afternoon thermal glare through deep cantilevered loggias.
              </p>
            </div>
            <div className="narrative-col">
              <span className="col-num">03 / PROVENANCE</span>
              <h4>Honest Tactility</h4>
              <p>
                From hand-quarried Calacatta marble in Tuscany to aged French oak in Auvergne, our material palette is restrained, natural, and chosen specifically to age with dignified character.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
