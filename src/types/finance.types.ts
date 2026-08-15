export interface MortgageInput {
  propertyPriceINR: number // in Crores
  downPaymentPercent: number // e.g. 20%
  loanTenureYears: number // e.g. 20
  interestRatePercent: number // e.g. 8.5%
}

export interface MortgageResult {
  principalAmountINR: number
  downPaymentAmountINR: number
  monthlyEMIINR: number
  totalInterestINR: number
  totalPaymentINR: number
  stampDutyEstimateINR: number
  registrationEstimateINR: number
  gstEstimateINR: number
  totalAcquisitionCostINR: number
}
