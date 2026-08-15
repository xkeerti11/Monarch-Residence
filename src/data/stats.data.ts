export interface StatItem {
  value: number
  prefix?: string
  suffix: string
  label: string
  sublabel: string
}

export const statsData: StatItem[] = [
  {
    value: 4800,
    prefix: '₹',
    suffix: ' Cr+',
    label: 'Gross Portfolio Asset Value',
    sublabel: 'Institutional ultra-luxury residential assets under development',
  },
  {
    value: 34,
    suffix: 'L sq.ft.',
    label: 'Prime Carpet Area Developed',
    sublabel: 'Delivered across coastal Mumbai, NCR, and beachside Goa',
  },
  {
    value: 100,
    suffix: '%',
    label: 'RERA On-Time Delivery Track Record',
    sublabel: 'Zero delay penalties across all luxury residential handovers',
  },
  {
    value: 49,
    suffix: '/5.0',
    label: 'IGBC Green Building Rating',
    sublabel: 'Platinum-certified net-zero energy conservation and clean air standards',
  },
]

export const testimonialsData = [
  {
    quote:
      'Monarch One sets an uncompromising benchmark for coastal structural engineering in South Mumbai. The acoustic stillness inside the 34th-floor duplex despite the sea winds is truly remarkable.',
    author: 'Vikramaditya Singhania',
    role: 'Managing Partner, Singhania Capital & Monarch One Resident',
    verification: 'Verified Residence Owner · Possession Q4 2026',
  },
  {
    quote:
      'The proportion of natural light and the seamless book-matching of Tuscan Calacatta marble in Monarch Heights reflects an extraordinary level of international craftsmanship rarely seen in Indian luxury development.',
    author: 'Natasha Poonawalla-Godrej',
    role: 'Private Collector & Architectural Patron',
    verification: 'Duplex Penthouse Client',
  },
  {
    quote:
      'From the confidential bespoke financial structuring to the bespoke interior fit-out advisory, the private client services team delivered an effortless white-glove acquisition experience.',
    author: 'Rajesh & Shobhna Mehra',
    role: 'Founding Directors, Mehra Global Holdings (Dubai & London)',
    verification: 'Monarch Villas Estate Owner',
  },
]
