export type BuyerProfile = 'End-User Residence' | 'NRI Portfolio Investment' | 'Penthouse Upgrade' | 'Institutional Buyer'
export type TimelinePreference = 'Immediate / Ready' | 'Next 3-6 Months' | 'Q4 2026 / Under Construction'

export interface InquiryFormData {
  fullName: string
  email: string
  phone: string
  residenceInterest: string
  buyerProfile: BuyerProfile
  timeline: TimelinePreference
  requestBrochure: boolean
  requestCallbackTime?: string
  ndaRequired: boolean
  notes?: string
}

export type LegalDocType = 'privacy' | 'terms' | 'cookies' | 'rera'
