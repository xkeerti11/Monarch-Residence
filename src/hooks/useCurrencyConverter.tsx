import { useState, createContext, useContext, ReactNode } from 'react'
import { CurrencyType, AreaUnitType } from '../types/property.types'

interface CurrencyContextType {
  currency: CurrencyType
  setCurrency: (c: CurrencyType) => void
  areaUnit: AreaUnitType
  setAreaUnit: (u: AreaUnitType) => void
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'INR',
  setCurrency: () => {},
  areaUnit: 'sqft',
  setAreaUnit: () => {},
})

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<CurrencyType>('INR')
  const [areaUnit, setAreaUnit] = useState<AreaUnitType>('sqft')

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, areaUnit, setAreaUnit }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrencyConverter() {
  return useContext(CurrencyContext)
}
