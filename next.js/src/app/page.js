import Seo from "@/global/Seo";
import fetchData from "@/utils/fetchData";
import Breadcrumbs from "@/components/moleculas/Breadcrumbs";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Callout from "@/components/sections/Callout";

const pathname = '';

const IndexPage = async () => {
  const { page: {
    callout,
    contactForm,
    faq,
  } } = await query();

  return (
    <>
      <Breadcrumbs data={[
        { name: 'Homepage', path: pathname },
      ]} visible={false} />
      <Callout {...callout} />
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