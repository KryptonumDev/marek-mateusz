import '@/global/global.scss'
import { locale } from '@/global/Seo'
import localFont from 'next/font/local'
import SchemaOrganization from '@/global/Schema/Organization'
import SmoothScroll from '@/utils/SmoothScroll'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import fetchData from '@/utils/fetchData'

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

const Social = {
  "Instagram": () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='33'
      fill='none'
      viewBox='0 0 32 33'
    >
      <path
        fill='#C9B083'
        d='M16 10.5a6 6 0 106 6 6.006 6.006 0 00-6-6zm0 10a4 4 0 110-8 4 4 0 010 8zm6-17H10a7.007 7.007 0 00-7 7v12a7.008 7.008 0 007 7h12a7.008 7.008 0 007-7v-12a7.008 7.008 0 00-7-7zm5 19a5 5 0 01-5 5H10a5 5 0 01-5-5v-12a5 5 0 015-5h12a5 5 0 015 5v12zM24 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
      ></path>
    </svg>
  ),
  "Facebook": () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='33'
      fill='none'
      viewBox='0 0 32 33'
    >
      <path
        fill='#C9B083'
        d='M16 3.5a13 13 0 1013 13 13.013 13.013 0 00-13-13zm1 23.954V19.5h3a1 1 0 000-2h-3v-3a2 2 0 012-2h2a1 1 0 000-2h-2a4 4 0 00-4 4v3h-3a1 1 0 000 2h3v7.954a11 11 0 112 0z'
      ></path>
    </svg>
  )
}