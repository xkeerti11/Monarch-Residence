import { CurrencyType, AreaUnitType } from '../types/property.types'
import { MortgageInput, MortgageResult } from '../types/finance.types'

// Currency Exchange rates relative to INR Crore baseline
// 1 Cr INR = ~10,000,000 INR = ~$119,000 USD = ~438,000 AED
const INR_TO_USD_MILLIONS_PER_CRORE = 0.119
const INR_TO_AED_MILLIONS_PER_CRORE = 0.438

export function formatPrice(priceINRInCrore: number, currency: CurrencyType): string {
  switch (currency) {
    case 'INR':
      return `₹${priceINRInCrore.toFixed(1)} Cr`
    case 'USD': {
      const usdMillions = priceINRInCrore * INR_TO_USD_MILLIONS_PER_CRORE
      return `$${usdMillions.toFixed(2)}M`
    }
    case 'AED': {
      const aedMillions = priceINRInCrore * INR_TO_AED_MILLIONS_PER_CRORE
      return `AED ${aedMillions.toFixed(2)}M`
    }
    default:
      return `₹${priceINRInCrore.toFixed(1)} Cr`
  }
}

export function formatPriceExactINR(amountInRupees: number): string {
  if (amountInRupees >= 10000000) {
    return `₹${(amountInRupees / 10000000).toFixed(2)} Cr`
  }
  if (amountInRupees >= 100000) {
    return `₹${(amountInRupees / 100000).toFixed(2)} Lakh`
  }
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amountInRupees)
}

export function formatArea(areaSqFt: number, unit: AreaUnitType): string {
  if (unit === 'sqm') {
    const sqMeters = Math.round(areaSqFt * 0.092903)
    return `${sqMeters.toLocaleString('en-IN')} sq.m.`
  }
  return `${areaSqFt.toLocaleString('en-IN')} sq.ft.`
}

export function formatAreaRange(minSqFt: number, maxSqFt: number, unit: AreaUnitType): string {
  if (unit === 'sqm') {
    const minM = Math.round(minSqFt * 0.092903)
    const maxM = Math.round(maxSqFt * 0.092903)
    return `${minM.toLocaleString('en-IN')}–${maxM.toLocaleString('en-IN')} sq.m.`
  }
  return `${minSqFt.toLocaleString('en-IN')}–${maxSqFt.toLocaleString('en-IN')} sq.ft.`
}

export function calculateMortgageBreakdown({
  propertyPriceINR,
  downPaymentPercent,
  loanTenureYears,
  interestRatePercent,
}: MortgageInput): MortgageResult {
  const propertyPriceRupees = propertyPriceINR * 10000000
  const downPaymentAmountINR = (propertyPriceRupees * downPaymentPercent) / 100
  const principalAmountINR = propertyPriceRupees - downPaymentAmountINR

  const monthlyRate = interestRatePercent / 12 / 100
  const totalMonths = loanTenureYears * 12

  let monthlyEMIINR = 0
  if (monthlyRate > 0) {
    monthlyEMIINR =
      (principalAmountINR * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  } else {
    monthlyEMIINR = principalAmountINR / totalMonths
  }

  const totalPaymentINR = monthlyEMIINR * totalMonths
  const totalInterestINR = totalPaymentINR - principalAmountINR

  // Standard Indian luxury real estate statutory estimates
  const stampDutyEstimateINR = propertyPriceRupees * 0.06 // ~6% Stamp duty in Maharashtra
  const registrationEstimateINR = Math.min(propertyPriceRupees * 0.01, 30000) // ₹30,000 cap or 1%
  const gstEstimateINR = propertyPriceRupees * 0.05 // 5% GST on under-construction luxury units

  const totalAcquisitionCostINR = propertyPriceRupees + stampDutyEstimateINR + registrationEstimateINR + gstEstimateINR

  return {
    principalAmountINR,
    downPaymentAmountINR,
    monthlyEMIINR: Math.round(monthlyEMIINR),
    totalInterestINR: Math.round(totalInterestINR),
    totalPaymentINR: Math.round(totalPaymentINR),
    stampDutyEstimateINR: Math.round(stampDutyEstimateINR),
    registrationEstimateINR: Math.round(registrationEstimateINR),
    gstEstimateINR: Math.round(gstEstimateINR),
    totalAcquisitionCostINR: Math.round(totalAcquisitionCostINR),
  }
}
