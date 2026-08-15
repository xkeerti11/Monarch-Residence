import { MediaAsset } from '../assets'

export interface MaterialItem {
  id: string
  name: string
  number: string
  origin: string
  craftsmanship: string
  description: string
  kind: MediaAsset
  tone: string
  sustainability: string
}

export const materialsData: MaterialItem[] = [
  {
    id: 'marble',
    name: 'Italian Calacatta Oro',
    number: '01',
    origin: 'Carrara, Tuscany, Italy',
    craftsmanship: 'Hand-quarried and precision book-matched by 3rd generation Tuscan stonemasons.',
    description:
      'Luminous warm-veined surfaces selected for their depth, gentle amber undertones, and velvet honed finish that develops an enduring patina over decades of living.',
    kind: 'italianMarble',
    tone: 'material-marble',
    sustainability: 'Zero-waste quarry extraction with closed-loop water filtration.',
  },
  {
    id: 'timber',
    name: 'Sustainable French Oak',
    number: '02',
    origin: 'Tronçais Forest, Auvergne, France',
    craftsmanship: 'Slow kiln-dried for 18 months and finished with natural organic plant-derived matte hardwax oils.',
    description:
      'Wide-plank quarter-sawn oak brings acoustic warmth, tactile softness, and natural humidity regulation to private suite bedrooms.',
    kind: 'naturalTimber',
    tone: 'material-timber',
    sustainability: '100% PEFC & FSC Certified managed sustainable forestry.',
  },
  {
    id: 'metal',
    name: 'Brushed Architectural Bronze',
    number: '03',
    origin: 'Milan, Lombardy, Italy',
    craftsmanship: 'Individually hand-patinated and precision CNC-milled with hairline micro-bevel edges.',
    description:
      'An understated tactile finish that provides refined tactile resistance to entry portals, concealed hardware, and architectural trims.',
    kind: 'brushedMetal',
    tone: 'material-metal',
    sustainability: '92% Recycled metallurgical grade with non-toxic chemical treatments.',
  },
  {
    id: 'glass',
    name: 'Low-E Acoustic Structural Glass',
    number: '04',
    origin: 'Saint-Gobain, Stolberg, Germany',
    craftsmanship: 'Triple-laminated with sound-dampening acoustic PVB interlayers and solar reflective nano-coating.',
    description:
      'Seamless floor-to-ceiling transparent boundaries that eliminate 99.4% of ultraviolet radiation and reduce ambient urban noise below 32 decibels.',
    kind: 'architecturalGlass',
    tone: 'material-glass',
    sustainability: 'U-Value 0.58 W/m²K exceeding international passive house green standards.',
  },
]
