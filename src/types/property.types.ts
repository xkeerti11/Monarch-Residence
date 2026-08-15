import { MediaAsset } from '../assets'

export type CurrencyType = 'INR' | 'USD' | 'AED'
export type AreaUnitType = 'sqft' | 'sqm'

export interface PropertyMetric {
  label: string
  value: string
}

export interface ResidenceHighlight {
  title: string
  description: string
}

export interface UnitDetail {
  unitNo: string
  floor: string
  type: string
  carpetAreaSqFt: number
  balconyAreaSqFt: number
  priceINR: number // in Crores (e.g. 4.8)
  priceUSD: number // in Millions (e.g. 0.58)
  priceAED: number // in Millions (e.g. 2.13)
  status: 'Available' | 'Reserved' | 'Sold'
  facing: string
}

export interface PropertyItem {
  id: string
  number: string
  name: string
  tagline: string
  location: string
  city: string
  type: string
  priceINR: number // in Crores e.g. 4.8
  priceUSD: number // in Millions USD e.g. 0.58
  priceAED: number // in Millions AED e.g. 2.13
  carpetAreaSqFtMin: number
  carpetAreaSqFtMax: number
  bedroomsMin: number
  bedroomsMax: number
  bathroomsMin: number
  bathroomsMax: number
  carParks: number
  possessionDate: string
  reraId: string
  architect: string
  tone: string
  kind?: MediaAsset
  gallery?: MediaAsset[]
  description: string
  architecturalPhilosophy: string
  specs: {
    ceilingHeight: string
    glazing: string
    kitchen: string
    flooring: string
    smartHome: string
    climate: string
  }
  highlights: string[]
  amenities: string[]
  inventory: UnitDetail[]
}
