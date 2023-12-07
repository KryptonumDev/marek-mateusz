import '@/global/global.scss'
import localFont from 'next/font/local'
import Header from 'src/componenets/organisms/Header'
import Footer from '@/components/organisms/Footer'
import SmoothScroll from '@/utils/SmoothScroll'
import SchemaOrganization from '@/global/Schema/Organization'
import { locale } from '@/global/Seo'

const Raleway = localFont({
  src: [
    {
      path: '../assets/fonts/Raleway-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Raleway-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  fallback: ['serif'],
  display: 'swap',
})
const CinzelDecorative = localFont({
  src: '../assets/fonts/CinzelDecorative-Regular.woff2',
  fallback: ['sans-serif'],
  display: 'swap',
  variable: '--cinzel-decorative',
})

export const viewport = {
  themeColor: '#1D1E1D',
}

// export const runtime = 'edge'

export default function RootLayout({ children }) {
  return (
    <html lang={locale}>
      <head>
        <SchemaOrganization />
      </head>
      <body className={`${Raleway.className} ${CinzelDecorative.variable}`}>
        <Header />
        <SmoothScroll>
          <main id="main">
            {children}
          </main>
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  )
}