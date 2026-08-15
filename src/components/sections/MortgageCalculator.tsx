import { useState, useEffect } from 'react'
import { Calculator, ArrowRight, ShieldCheck, PieChart, Coins } from 'lucide-react'
import { Reveal } from '../common/Reveal'
import { useMortgageCalculator } from '../../hooks/useMortgageCalculator'
import { formatPriceExactINR } from '../../utils/formatters'
import { trackEvent } from '../../utils/analytics'

interface MortgageCalculatorProps {
  externalSelectedPriceINR?: number
}

export function MortgageCalculator({ externalSelectedPriceINR }: MortgageCalculatorProps) {
  const {
    propertyPriceINR,
    setPropertyPriceINR,
    downPaymentPercent,
    setDownPaymentPercent,
    loanTenureYears,
    setLoanTenureYears,
    interestRatePercent,
    setInterestRatePercent,
    result,
  } = useMortgageCalculator(4.8)

  useEffect(() => {
    if (externalSelectedPriceINR && externalSelectedPriceINR > 0) {
      setPropertyPriceINR(externalSelectedPriceINR)
    }
  }, [externalSelectedPriceINR, setPropertyPriceINR])

  const propertyPresets = [
    { label: 'Monarch One (₹4.8 Cr)', price: 4.8 },
    { label: 'Monarch Heights (₹6.2 Cr)', price: 6.2 },
    { label: 'Monarch Villas (₹8.5 Cr)', price: 8.5 },
    { label: 'Penthouse Estate (₹12.0 Cr)', price: 12.0 },
  ]

  const tenureOptions = [10, 15, 20, 25]

  return (
    <section className="section mortgage-section" id="mortgage-calc" aria-labelledby="mortgage-heading">
      <div className="container">
        <Reveal className="mortgage-header">
          <div>
            <div className="section-label-group">
              <p className="section-label">04 / Financial Engineering & Structuring</p>
              <span className="fin-badge">
                <Coins size={12} /> BESPOKE AMORTIZATION ENGINE
              </span>
            </div>
            <h2 className="display section-heading" id="mortgage-heading">
              Residence Financing & Acquisition Calculator
            </h2>
          </div>
          <p className="body-copy mortgage-intro">
            Simulate customized loan amortization schedules, down payment capital requirements, and statutory stamp duty disbursements.
          </p>
        </Reveal>

        {/* Quick Presets */}
        <div className="preset-bar">
          <span className="preset-label">Select Residence Preset:</span>
          <div className="preset-buttons">
            {propertyPresets.map((preset) => (
              <button
                type="button"
                key={preset.label}
                className={`preset-btn ${propertyPriceINR === preset.price ? 'active' : ''}`}
                onClick={() => {
                  setPropertyPriceINR(preset.price)
                  trackEvent('mortgage_preset_select', { preset: preset.label })
                }}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mortgage-grid">
          {/* Controls Column */}
          <Reveal className="mortgage-controls-card">
            {/* Property Price Slider */}
            <div className="calc-slider-group">
              <div className="slider-header">
                <label htmlFor="prop-price-slider">Property Valuation</label>
                <strong className="slider-value">₹{propertyPriceINR.toFixed(1)} Cr</strong>
              </div>
              <input
                id="prop-price-slider"
                type="range"
                min="4.0"
                max="20.0"
                step="0.2"
                value={propertyPriceINR}
                onChange={(e) => setPropertyPriceINR(parseFloat(e.target.value))}
                className="custom-range-slider"
              />
              <div className="slider-bounds">
                <span>₹4.0 Cr</span>
                <span>₹20.0 Cr</span>
              </div>
            </div>

            {/* Down Payment Slider */}
            <div className="calc-slider-group">
              <div className="slider-header">
                <label htmlFor="down-payment-slider">Equity Down Payment ({downPaymentPercent}%)</label>
                <strong className="slider-value">
                  {formatPriceExactINR(result.downPaymentAmountINR)}
                </strong>
              </div>
              <input
                id="down-payment-slider"
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(parseInt(e.target.value, 10))}
                className="custom-range-slider"
              />
              <div className="slider-bounds">
                <span>10% (Minimum)</span>
                <span>50% (Recommended)</span>
              </div>
            </div>

            {/* Loan Tenure Selector */}
            <div className="calc-slider-group">
              <div className="slider-header">
                <label>Loan Amortization Tenure</label>
                <strong className="slider-value">{loanTenureYears} Years</strong>
              </div>
              <div className="tenure-pills">
                {tenureOptions.map((t) => (
                  <button
                    type="button"
                    key={t}
                    className={`tenure-pill ${loanTenureYears === t ? 'active' : ''}`}
                    onClick={() => setLoanTenureYears(t)}
                  >
                    {t} Years
                  </button>
                ))}
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="calc-slider-group">
              <div className="slider-header">
                <label htmlFor="interest-rate-slider">Annual Interest Rate</label>
                <strong className="slider-value">{interestRatePercent.toFixed(1)}% p.a.</strong>
              </div>
              <input
                id="interest-rate-slider"
                type="range"
                min="7.0"
                max="12.0"
                step="0.1"
                value={interestRatePercent}
                onChange={(e) => setInterestRatePercent(parseFloat(e.target.value))}
                className="custom-range-slider"
              />
              <div className="slider-bounds">
                <span>7.0% (Prime Jumbo)</span>
                <span>12.0%</span>
              </div>
            </div>
          </Reveal>

          {/* Results Summary Column */}
          <Reveal className="mortgage-result-card" delay={180}>
            <div className="emi-highlight-box">
              <span className="emi-label">Estimated Monthly Repayment (EMI)</span>
              <h3 className="emi-amount">
                {formatPriceExactINR(result.monthlyEMIINR)}
                <small> / month</small>
              </h3>
              <p className="emi-caption">
                Calculated on Principal Loan of {formatPriceExactINR(result.principalAmountINR)} over {loanTenureYears} years @ {interestRatePercent}%
              </p>
            </div>

            {/* Financial Breakdown Table */}
            <div className="breakdown-table">
              <div className="breakdown-row">
                <span>Equity Down Payment ({downPaymentPercent}%)</span>
                <strong>{formatPriceExactINR(result.downPaymentAmountINR)}</strong>
              </div>
              <div className="breakdown-row">
                <span>Principal Loan Financing</span>
                <strong>{formatPriceExactINR(result.principalAmountINR)}</strong>
              </div>
              <div className="breakdown-row">
                <span>Total Interest Payable over {loanTenureYears} Yrs</span>
                <strong className="text-orange">{formatPriceExactINR(result.totalInterestINR)}</strong>
              </div>

              <div className="table-divider" />

              <div className="statutory-header">
                <ShieldCheck size={14} />
                <span>Statutory Government Taxes & Registration (Estimates)</span>
              </div>

              <div className="breakdown-row sub">
                <span>Estimated Stamp Duty (6% in Maharashtra)</span>
                <span>{formatPriceExactINR(result.stampDutyEstimateINR)}</span>
              </div>
              <div className="breakdown-row sub">
                <span>Applicable GST (5% Under Construction)</span>
                <span>{formatPriceExactINR(result.gstEstimateINR)}</span>
              </div>
              <div className="breakdown-row sub">
                <span>Registration & Document Charges</span>
                <span>{formatPriceExactINR(result.registrationEstimateINR)}</span>
              </div>

              <div className="table-divider" />

              <div className="breakdown-row total">
                <span>Estimated Total Acquisition Outlay</span>
                <strong className="total-val">{formatPriceExactINR(result.totalAcquisitionCostINR)}</strong>
              </div>
            </div>

            <div className="mortgage-cta-block">
              <a
                className="btn btn-primary w-full"
                href="#inquiry"
                onClick={() => trackEvent('mortgage_consult_click', { priceINR: propertyPriceINR, emi: result.monthlyEMIINR })}
              >
                Schedule Private Wealth Structuring Consultation <ArrowRight size={16} />
              </a>
              <p className="disclaimer-micro">
                *Illustrative calculations only. Actual bank sanction rates, stamp duties, and concessions are subject to individual underwriting and prevailing government tax rules.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
