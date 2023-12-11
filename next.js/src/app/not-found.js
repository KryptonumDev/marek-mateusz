import Hero from "@/components/sections/not-found-hero";
import Seo from "@/global/Seo";
import fetchData from "@/utils/fetchData";

const NotFoundPage = async () => {
  const { page: {
    hero_Heading,
    hero_Paragraph,
    hero_Cta,
    images
  } } = await query();

  return (
    <>
      <Hero
        {...{
          heading: hero_Heading,
          paragraph: hero_Paragraph,
          cta: hero_Cta,
          images,
        }}
      />
    </>
  )
}

export async function generateMetadata() {
  const { page: { seo } } = await query();
  return Seo({
    title: seo?.title,
    description: seo?.description,
  })
}

const query = async () => {
  const { body: { data } } = await fetchData(/* GraphQL */`
    query {
      page: NotFoundPage(id: "NotFoundPage") {
        # Hero
        hero_Heading
        hero_Paragraph
        hero_Cta {
          theme
          text
          href
        }
        images {
          asset {
            altText
            url
            metadata {
              lqip
              dimensions {
                width
                height
              }
            }
          }
        }

        # SEO
        seo {
          title
          description
        }
      }
    }
  `)
  return data;
}

export default NotFoundPage;