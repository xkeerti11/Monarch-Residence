import { MediaAsset } from '../assets'

export interface ArticleItem {
  id: string
  date: string
  category: string
  title: string
  excerpt: string
  tone: string
  kind?: MediaAsset
  author: string
  readTime: string
  paragraphs: string[]
  quote: string
}

export const articlesData: ArticleItem[] = [
  {
    id: 'future-luxury',
    date: 'March 2026',
    category: 'Structural Architecture',
    title: 'The Engineering of Acoustic Stillness',
    excerpt: 'How multi-layered facade aerodynamics and low-vibration subfloors create a tranquil sanctuary above urban noise.',
    tone: 'article-one',
    kind: 'futureLuxuryLiving',
    author: 'Elena Rostova, Principal Façade Engineer',
    readTime: '4 min read',
    quote: 'True luxury in the modern metropolis is not defined by ornate excess, but by the absolute mastery of silence, natural light, and clean air.',
    paragraphs: [
      'The modern luxury residence is evolving rapidly beyond superficial metrics of square footage and surface extravagance. Discerning global families prioritize atmospheric well-being, biological circadian lighting, and total acoustic insulation from the urban pulse below.',
      'At Monarch One, we engineered the exterior skin as a dynamic acoustic barrier. Triple-glazed laminated panels engineered by Schüco decouple structural sound vibrations, reducing exterior ambient traffic noise below 30 decibels—the acoustic equivalent of a quiet forest clearing.',
      'Integrated underfloor floating screed systems and silent displacement ventilation deliver hospital-grade purified air without audible mechanical hum, creating an unbroken sanctuary for rest and focus.',
    ],
  },
  {
    id: 'sustainable-luxury',
    date: 'January 2026',
    category: 'Biophilic Design',
    title: 'Net-Zero Engineering in Coastal Skyscraper Design',
    excerpt: 'Balancing monumental glass architecture with IGBC Platinum energy conservation and greywater cycles.',
    tone: 'article-two',
    kind: 'sustainableArchitecture',
    author: 'Dr. Marcus Vance, Director of Sustainable Infrastructure',
    readTime: '5 min read',
    quote: 'Permanence is the highest form of sustainability. We build not for decades, but for generations.',
    paragraphs: [
      'For decades, luxury construction was synonymous with excessive energy consumption. Monarch reverses this paradigm by embedding regenerative building principles from the initial foundation pour.',
      'Our residential towers integrate semi-transparent building-integrated photovoltaic (BIPV) glass within the crown and sky deck parapets, generating up to 35% of all common-area electrical loads from solar radiation.',
      'Dual-stage membrane bioreactor greywater recycling loops capture and treat 100% of non-black water for lush tropical courtyard irrigation and evaporative cooling, resulting in a 42% reduction in municipal water reliance.',
    ],
  },
  {
    id: 'monarch-one-journey',
    date: 'November 2025',
    category: 'Artisanal Craftsmanship',
    title: 'Inside Monarch One: The Curation of Calacatta & Bronze',
    excerpt: 'Eighteen months spent in Tuscan quarries and Milanese metal studios selecting materials that age with dignified grace.',
    tone: 'article-three',
    kind: 'insideMonarchOne',
    author: 'Siddharth Varma, Head of Interior Architecture',
    readTime: '6 min read',
    quote: 'Materials possess memory. When natural stone and hand-patinated bronze are handled by master artisans, they speak a quiet language of timeless permanence.',
    paragraphs: [
      'The creation of Monarch One began with a journey to Carrara, Italy. We inspected hundreds of raw Calacatta marble blocks, hand-selecting only sixteen consecutive slabs with unbroken honey-amber veins to book-match across the grand arrival galleries.',
      'In Milan, our team partnered with bespoke metallurgists to formulate a proprietary warm brushed bronze finish for door handles, window trims, and elevator portals. The alloy is treated to resist coastal saline corrosion while maintaining a deep, organic tactile warmth.',
      'Every junction where timber meets stone has been detailed with 4mm shadow-gap reveals, allowing the natural materials to breathe under tropical seasons without shifting or surface cracking.',
    ],
  },
]
