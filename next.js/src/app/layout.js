import '@/global/global.scss'
import { locale } from '@/global/Seo'
import localFont from 'next/font/local'
import SchemaOrganization from '@/global/Schema/Organization'
import SmoothScroll from '@/utils/SmoothScroll'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import fetchData from '@/utils/fetchData'
import { Social } from '@/components/atoms/Icons'

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

const createSocial = (name, url, icon) => (url ? { name, url, icon } : null);

export default async function RootLayout({ children }) {
  const { global: {
    instagram,
    facebook
  }} = await query();
  const socials = [
    createSocial('Instagram', instagram, <Social.Instagram />),
    createSocial('Facebook', facebook, <Social.Facebook />),
  ].filter(Boolean);

  return (
    <html lang={locale}>
      <head>
        <SchemaOrganization />
      </head>
      <body className={`${Raleway.className} ${CinzelDecorative.variable}`}>
        <Header socials={socials} />
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

const query = async () => {
  const { body: { data } } = await fetchData(`
    query {
      global: Global(id: "global") {
        instagram
        facebook
      }
    }
  `)
  return data;
}