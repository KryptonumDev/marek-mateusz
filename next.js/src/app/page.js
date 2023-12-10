import Seo from "@/global/Seo";
import fetchData from "@/utils/fetchData";
import Breadcrumbs from "@/components/moleculas/Breadcrumbs";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Callout from "@/components/sections/Callout";
import TextSection from "@/components/sections/TextSection";
import Hero from "@/components/sections/homepage-hero";
import ShowcaseSlider from "@/components/sections/ShowcaseSlider";

const pathname = '';

const IndexPage = async () => {
  const { page: {
    hero_Heading,
    hero_Paragraph,
    hero_Cta,
    paintings,
    callout,
    murals,
    textSection,
    contactForm,
    faq,
  } } = await query();

  return (
    <>
      <Breadcrumbs data={[
        { name: 'Strona główna', path: pathname },
      ]} visible={false} />
      <Hero
        {...{
          heading: hero_Heading,
          paragraph: hero_Paragraph,
          cta: hero_Cta,
          paintings,
        }}
      />
      <Callout {...callout} />
      <ShowcaseSlider {...murals} />
      <TextSection {...textSection} />
      <Contact {...contactForm} />
      <Faq data={faq} />
    </>
  )
}

export async function generateMetadata() {
  const { page: { seo } } = await query();
  return Seo({
    title: seo?.title,
    description: seo?.description,
    path: pathname,
  })
}

const query = async () => {
  const { body: { data } } = await fetchData(/* GraphQL */`
    query {
      page: IndexPage(id: "IndexPage") {
        # Hero
        hero_Heading
        hero_Paragraph
        hero_Cta {
          theme
          text
          href
        }
        paintings {
          img {
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
          year
          type
          title
          availability
        }

        # Callout
        callout {
          heading
          paragraph
          cta {
            theme
            text
            href
          }
        }

        # Murals
        murals {
          heading
          paragraph
          cta {
            theme
            text
            href
          }
          list {
            img {
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
            year
            type
            title
            availability
          }
        }

        # TextSection
        textSection {
          heading
          paragraph
          cta {
            theme
            text
            href
          }
        }

        # ContactForm
        contactForm {
          heading
          paragraph
        }
        # Faq
        faq {
          heading
          list {
            question: title
            answer: description
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

export default IndexPage;