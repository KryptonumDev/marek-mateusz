import Seo from "@/global/Seo";
import fetchData from "@/utils/fetchData";
import Breadcrumbs from "@/components/moleculas/Breadcrumbs";
import Hero from "@/components/sections/privacy-policy-hero";
import Content from "@/components/sections/privacy-policy-content";

const pathname = 'polityka-prywatnosci';

const PrivacyPolicyPage = async () => {
  const { page: {
    hero_Heading,
    hero_Paragraph,
    content
  } } = await query();

  return (
    <>
      <Breadcrumbs data={[
        { name: 'Polityka prywatności', path: pathname },
      ]} visible={false} />
      <Hero
        {...{
          heading: hero_Heading,
          paragraph: hero_Paragraph,
        }}
        id='obrazy'
      />
      <Content content={content} />
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
      page: PrivacyPolicyPage(id: "PrivacyPolicyPage") {
        # Hero
        hero_Heading
        hero_Paragraph
        content {
          title
          description
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

export default PrivacyPolicyPage;