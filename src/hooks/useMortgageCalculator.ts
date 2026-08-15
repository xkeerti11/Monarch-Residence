import { useState, useMemo } from 'react'
import { MortgageInput } from '../types/finance.types'
import { calculateMortgageBreakdown } from '../utils/formatters'

export function useMortgageCalculator(initialPriceINR: number = 4.8) {
  const [propertyPriceINR, setPropertyPriceINR] = useState<number>(initialPriceINR)
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20)
  const [loanTenureYears, setLoanTenureYears] = useState<number>(20)
  const [interestRatePercent, setInterestRatePercent] = useState<number>(8.5)

  const input: MortgageInput = {
    propertyPriceINR,
    downPaymentPercent,
    loanTenureYears,
    interestRatePercent,
  }

  const result = useMemo(() => {
    return calculateMortgageBreakdown(input)
  }, [propertyPriceINR, downPaymentPercent, loanTenureYears, interestRatePercent])

  return {
    propertyPriceINR,
    setPropertyPriceINR,
    downPaymentPercent,
    setDownPaymentPercent,
    loanTenureYears,
    setLoanTenureYears,
    interestRatePercent,
    setInterestRatePercent,
    result,
  }
}
