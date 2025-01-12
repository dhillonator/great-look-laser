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
    image: 'YOUR_BUSINESS_IMAGE_URL',
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
      <body className={roboto.className}>
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