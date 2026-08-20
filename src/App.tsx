import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { CurrencyProvider } from './hooks/useCurrencyConverter'
import { PropertyItem } from './types/property.types'
import { ArticleItem } from './data/articles.data'
import { LegalDocType } from './types/inquiry.types'

import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { StickyWhatsAppBar } from './components/common/StickyWhatsAppBar'

import { Hero } from './components/sections/Hero'
import { BrandStatement } from './components/sections/BrandStatement'
import { FeaturedResidence } from './components/sections/FeaturedResidence'
import { Collection } from './components/sections/Collection'
import { FloorPlan } from './components/sections/FloorPlan'
import { BuildingCanvas3D } from './components/sections/BuildingCanvas3D'
import { MortgageCalculator } from './components/sections/MortgageCalculator'
import { PropertyComparator } from './components/sections/PropertyComparator'
import { NeighborhoodMap } from './components/sections/NeighborhoodMap'
import { Numbers } from './components/sections/Numbers'
import { Lifestyle } from './components/sections/Lifestyle'
import { Materials } from './components/sections/Materials'
import { About } from './components/sections/About'
import { Testimonials } from './components/sections/Testimonials'
import { Journal } from './components/sections/Journal'
import { Inquiry } from './components/sections/Inquiry'

import { PropertyModal } from './components/modals/PropertyModal'
import { ArticleModal } from './components/modals/ArticleModal'
import { LegalModal } from './components/modals/LegalModal'
import { BrochureModal } from './components/modals/BrochureModal'

gsap.registerPlugin(ScrollTrigger)

function MainApp() {
  const appRef = useRef<HTMLDivElement>(null)

  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null)
  const [activeProperty, setActiveProperty] = useState<PropertyItem | null>(null)
  const [activeLegal, setActiveLegal] = useState<LegalDocType | null>(null)
  const [isBrochureOpen, setIsBrochureOpen] = useState(false)

  const [selectedForComparison, setSelectedForComparison] = useState<string[]>([])
  const [isComparatorOpen, setIsComparatorOpen] = useState(false)

  const [selectedInquiryProperty, setSelectedInquiryProperty] = useState<string>('')
  const [mortgageSelectedPriceINR, setMortgageSelectedPriceINR] = useState<number>(4.8)

  const [searchLocation, setSearchLocation] = useState<string>('All')
  const [searchType, setSearchType] = useState<string>('All')

  // Initialize GSAP scroll animations
  useEffect(() => {
    if (!appRef.current) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set('[data-reveal], [data-clip]', { opacity: 1, y: 0, clearProps: 'filter,clipPath' })
        return
      }

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        const rawDelay = Number(element.dataset.reveal || 0)
        // Make delay crisp and immediate (max 60ms)
        const delay = Math.min(rawDelay * 0.15, 60) / 1000
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 12 },
          {
            autoAlpha: 1,
            y: 0,
            delay,
            duration: 0.32,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 95%', once: true },
          }
        )
      })

      gsap.utils.toArray<HTMLElement>('[data-clip]').forEach((element) => {
        gsap.fromTo(
          element,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 0.45,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 94%', once: true },
          }
        )
      })

      gsap.utils.toArray<HTMLElement>('[data-counter]').forEach((element) => {
        const value = Number(element.dataset.value || 0)
        const suffix = element.dataset.suffix || ''
        const prefix = element.textContent?.startsWith('₹') ? '₹' : ''
        const counter = { value: 0 }
        gsap.to(counter, {
          value,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 95%', once: true },
          onUpdate: () => {
            element.textContent = `${prefix}${Math.round(counter.value)}${suffix}`
          },
        })
      })
    }, appRef)

    return () => ctx.revert()
  }, [])

  const handleToggleComparison = (propertyId: string) => {
    setSelectedForComparison((prev) => {
      if (prev.includes(propertyId)) {
        return prev.filter((id) => id !== propertyId)
      }
      if (prev.length >= 3) return prev
      return [...prev, propertyId]
    })
  }

  const handleInquireProperty = (propertyName: string) => {
    setSelectedInquiryProperty(propertyName)
    const el = document.getElementById('inquiry')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleOpenMortgageWithPrice = (priceINR: number) => {
    setMortgageSelectedPriceINR(priceINR)
    const el = document.getElementById('mortgage-calc')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleQuickSearch = (location: string, type: string) => {
    setSearchLocation(location)
    setSearchType(type)
  }

  return (
    <div className="page-shell" ref={appRef}>
      <Navbar onOpenBrochure={() => setIsBrochureOpen(true)} />

      <main>
        <Hero
          onQuickSearch={handleQuickSearch}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />
        <BrandStatement />
        <FeaturedResidence
          onSelectProperty={(p) => setActiveProperty(p)}
          onOpenMortgageWithPrice={handleOpenMortgageWithPrice}
        />
        <Collection
          onSelectProperty={(p) => setActiveProperty(p)}
          selectedForComparison={selectedForComparison}
          onToggleComparison={handleToggleComparison}
          onOpenComparator={() => setIsComparatorOpen(true)}
          initialLocationFilter={searchLocation}
          initialTypeFilter={searchType}
        />
        <FloorPlan onOpenBrochure={() => setIsBrochureOpen(true)} />
        <BuildingCanvas3D />
        <MortgageCalculator externalSelectedPriceINR={mortgageSelectedPriceINR} />
        <NeighborhoodMap />
        <Numbers />
        <Lifestyle />
        <Materials />
        <About />
        <Testimonials />
        <Journal onSelectArticle={(a) => setActiveArticle(a)} />
        <Inquiry
          selectedProperty={selectedInquiryProperty}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />
      </main>

      <Footer onOpenLegal={(l) => setActiveLegal(l)} />

      <StickyWhatsAppBar onOpenBrochure={() => setIsBrochureOpen(true)} />

      {activeProperty && (
        <PropertyModal
          property={activeProperty}
          onClose={() => setActiveProperty(null)}
          onInquire={handleInquireProperty}
          onOpenMortgageWithPrice={handleOpenMortgageWithPrice}
        />
      )}

      {activeArticle && (
        <ArticleModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
        />
      )}

      {activeLegal && (
        <LegalModal
          docType={activeLegal}
          onClose={() => setActiveLegal(null)}
        />
      )}

      {isBrochureOpen && (
        <BrochureModal onClose={() => setIsBrochureOpen(false)} />
      )}

      {isComparatorOpen && (
        <PropertyComparator
          selectedIds={selectedForComparison}
          onClose={() => setIsComparatorOpen(false)}
          onRemove={(id) => setSelectedForComparison((prev) => prev.filter((item) => item !== id))}
          onInquire={handleInquireProperty}
        />
      )}
    </div>
  )
}

export default function App() {
  return (
    <CurrencyProvider>
      <MainApp />
    </CurrencyProvider>
  )
}
