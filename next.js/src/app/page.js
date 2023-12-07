import Seo from "@/global/Seo";
import fetchData from "@/utils/fetchData";
import Breadcrumbs from "@/components/moleculas/Breadcrumbs";

const pathname = '';

const IndexPage = async () => {
  // const { page: {
  //   hero_Heading,
  // } } = await query();

  return (
    <>
      <Breadcrumbs data={[
        { name: 'Homepage', path: pathname },
      ]} />
    </>
  )
}

// export async function generateMetadata() {
//   const { page: { seo } } = await query();
//   return Seo({
//     title: seo?.title,
//     description: seo?.description,
//     path: pathname,
//   })
// }

// const query = async () => {
//   const { body: { data } } = await fetchData(`
//     query {
//       page: IndexPage(id: "indexPage") {
//         # SEO
//         seo {
//           title
//           description
//         }
//       }
//     }
//   `)
//   return data;
// }

export default IndexPage;