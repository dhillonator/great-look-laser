declare global {
    interface Window {
      gtag: (...args: any[]) => void;
    }
  }
  
  const GA_MEASUREMENT_ID = 'G-PGWSK1EEDX'
  
  export const initGA = () => {
    const script1 = document.createElement('script')
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    script1.async = true
    document.head.appendChild(script1)
  
    const script2 = document.createElement('script')
    script2.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `
    document.head.appendChild(script2)
  }
  
  export const pageview = (url: string) => {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
  
  export const event = ({ action, category, label, value }: {
    action: string
    category: string
    label: string
    value?: number
  }) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
  
  // Custom events for your site
  export const trackBooking = () => {
    event({
      action: 'booking_started',
      category: 'Booking',
      label: 'Calendly Opened',
    })
  }
  
  export const trackPackageView = (packageName: string) => {
    event({
      action: 'package_viewed',
      category: 'Packages',
      label: packageName,
    })
  }
  
  export const trackContactClick = (method: string) => {
    event({
      action: 'contact_clicked',
      category: 'Contact',
      label: method,
    })
  }