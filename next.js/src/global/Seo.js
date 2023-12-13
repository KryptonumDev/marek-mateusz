import fetchData from "@/utils/fetchData";

export const domain = 'https://marekmateusz.gallery';
export const locale = "pl";

const Seo = async ({ title, description, path, ...props }) => {
  const { global: {
    robotsIndex,
    seo: {
      og_Img
    }
  }} = await query();

  const seo = {
    title: title || 'Marek Mateusz',
    description: description || '',
    url: `${domain}${path}` || '',
    ogImage: og_Img?.asset?.url || ''
  }

  const metadata = {
    robots: {
      index: robotsIndex || true,
    },
    metadataBase: new URL(domain),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.url,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      siteName: seo.title,
      url: seo.url,
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: 'website',
    },
    ...props
  }

  return metadata;
}

export default Seo;

const query = async () => {
  const { body: { data } } = await fetchData(`
    query {
      global: Global(id: "global") {
        seo {
          og_Img {
            asset {
              url
            }
          }
        }
        robotsIndex
      }
    }
  `)
  return data;
}