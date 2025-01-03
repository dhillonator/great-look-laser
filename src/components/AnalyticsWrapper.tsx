'use client'

import React, { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { pageview, initGA } from '../lib/analytics'

function AnalyticsContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    initGA()
  }, [])

  useEffect(() => {
    const url = pathname + searchParams.toString()
    pageview(url)
  }, [pathname, searchParams])

  return null
}

export default function AnalyticsWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense fallback={null}>
        <AnalyticsContent />
      </Suspense>
      {children}
    </>
  )
}