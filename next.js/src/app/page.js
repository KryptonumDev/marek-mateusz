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
      ]} visible={false} />
      <h1>Hej</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, obcaecati. Velit sit adipisci exercitationem ducimus deleniti eveniet, saepe qui repudiandae dignissimos vel molestiae ipsum nulla rerum minus pariatur veritatis tenetur natus. Ea, eaque eius. Illo labore possimus ab dolorum commodi quae, eligendi dignissimos, modi dolor pariatur at nisi adipisci alias omnis quisquam eveniet itaque corporis! Voluptas, et expedita ducimus distinctio, exercitationem ipsa nihil aspernatur quos, libero laboriosam impedit eaque incidunt possimus veritatis commodi! Ipsam suscipit perspiciatis dolores nemo odit. Ipsa eum illo deleniti aspernatur suscipit quis veritatis totam quia voluptatibus, a atque beatae assumenda nam sint dicta consequuntur facilis officia.</p>
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