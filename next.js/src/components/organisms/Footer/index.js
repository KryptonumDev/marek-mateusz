import styles from './styles.module.scss';
import fetchData from '@/utils/fetchData';

const Footer = async () => {
  // const { global: {
  //   instagram,
  //   facebook,
  // }} = await query();

  // const socials = [
  //   {
  //     name: 'Instagram',
  //     icon: <Social.Instagram />,
  //     url: instagram
  //   },
  //   {
  //     name: 'Facebook',
  //     icon: <Social.Facebook />,
  //     url: facebook
  //   },
  // ]
  
  return (
    <footer className={styles.wrapper}>
      <div className="max-width">
        
      </div>
    </footer>
  );
};

export default Footer;

// const query = async () => {
//   const { body: { data } } = await fetchData(`
//     query {
//       global: Global(id: "global") {
//         footer_Slogan
//         instagram
//         facebook
//         footer_Company {
//           name
//           address
//           phone
//         }
//       }
//     }
//   `)
//   return data;
// }