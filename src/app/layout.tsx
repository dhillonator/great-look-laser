import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Topbar from '@/components/Topbar'
import AnalyticsWrapper from '@/components/AnalyticsWrapper'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Great Look Laser | Best Laser Hair Removal in Surrey, BC',
  description: 'Professional laser hair removal services in Surrey, BC. Affordable packages, experienced technicians, and advanced diode laser technology. Book your free consultation today.',
  keywords: 'laser hair removal Surrey, laser hair removal BC, hair removal Surrey, permanent hair removal Surrey, laser hair clinic Surrey, affordable laser hair removal Surrey',
  openGraph: {
    title: 'Great Look Laser | Professional Laser Hair Removal in Surrey',
    description: 'Transform your beauty routine with permanent laser hair removal in Surrey, BC. Free consultations, experienced staff, and comfortable treatments.',
    url: 'https://greatlooklaser.ca',
    siteName: 'Great Look Laser',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: 'https://greatlooklaser.ca/GLL-logo-bg.png',
        width: 1408,
        height: 768,
        alt: 'Great Look Laser — Laser Hair Removal in Surrey, BC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Great Look Laser | Professional Laser Hair Removal in Surrey',
    description: 'Professional laser hair removal in Surrey, BC. For women of all skin types.',
    images: ['https://greatlooklaser.ca/GLL-logo-bg.png'],
  },
  icons: {
    icon: '/GLL-logo-transparent.png',
    apple: '/GLL-logo-bg.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // You'll need to add this
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Great Look Laser',
    image: 'https://greatlooklaser.ca/GLL-logo-bg.png',
    '@id': 'https://greatlooklaser.ca',
    url: 'https://greatlooklaser.ca',
    telephone: '604-723-9281',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8925 135A St',
      addressLocality: 'Surrey',
      addressRegion: 'BC',
      postalCode: 'V3V 5V2',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.164282,
      longitude: -122.844275
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '08:00',
      closes: '20:00'
    },
    sameAs: [
      'YOUR_FACEBOOK_URL',
      'YOUR_INSTAGRAM_URL',
    ],
    priceRange: '$$',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 49.164282,
        longitude: -122.844275
      },
      geoRadius: '30000'
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://greatlooklaser.ca" />
        <meta name="geo.region" content="CA-BC" />
        <meta name="geo.placename" content="Surrey" />
        <meta name="geo.position" content="49.164282;-122.844275" />
        <meta name="ICBM" content="49.164282, -122.844275" />
      </head>
      <body className={`${cormorant.variable} ${dmSans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <AnalyticsWrapper>
          <Topbar />
          {children}
        </AnalyticsWrapper>
      </body>
    </html>
  )
}