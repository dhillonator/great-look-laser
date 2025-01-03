import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Topbar from '@/components/Topbar'
import AnalyticsWrapper from '@/components/AnalyticsWrapper'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Great Look Laser - Professional Laser Hair Removal in Surrey',
  description: 'Discover professional laser hair removal services in Surrey, BC. Book your free consultation today and experience the latest in permanent hair reduction technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AnalyticsWrapper>
          <Topbar />
          {children}
        </AnalyticsWrapper>
      </body>
    </html>
  )
}