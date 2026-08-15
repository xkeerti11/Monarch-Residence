import { Reveal } from '../common/Reveal'
import { Media } from '../common/Media'

export function Lifestyle() {
  return (
    <section className="section lifestyle-section" id="lifestyle" aria-labelledby="lifestyle-heading">
      <div className="container">
        <Reveal className="lifestyle-heading">
          <div>
            <p className="section-label">07 / The Residential Atmosphere</p>
            <h2 className="display section-heading" id="lifestyle-heading">
              Living, Beautifully<br />Composed.
            </h2>
          </div>
          <p className="body-copy">
            The spaces between spaces define everyday tranquility. From morning ocean light in private reflection lounges to sunset swims in cantilevered infinity pools.
          </p>
        </Reveal>

        <div className="lifestyle-grid">
          <Reveal className="lifestyle-item">
            <Media kind="residentsLounge" label="Residents private library lounge" className="lounge" />
            <span className="lifestyle-caption">The Private Residents Lounge</span>
          </Reveal>

          <Reveal className="lifestyle-item tall" delay={100}>
            <Media kind="rooftopLounge" label="Sky Observatory and Rooftop Experience" className="rooftop" />
            <span className="lifestyle-caption">The Sky Observatory</span>
          </Reveal>

          <Reveal className="lifestyle-item wide" delay={160}>
            <Media kind="pool" label="Cantilevered infinity plunge pool at dusk" />
            <span className="lifestyle-caption">Cantilevered Ocean Pool</span>
          </Reveal>

          <Reveal className="lifestyle-item" delay={220}>
            <Media kind="interior" label="Double-height living room gallery interior" />
            <span className="lifestyle-caption">The Grand Living Suite</span>
          </Reveal>
        </div>

        <Reveal className="lifestyle-copy">
          <p className="display">
            Where the rhythm of life<br />finds absolute clarity.
          </p>
          <p className="body-copy">
            Private thermal wellness suites, acoustic wine degustation cellars, 24/7 dedicated white-glove butler service, and horizons that remind you why you chose this address.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
