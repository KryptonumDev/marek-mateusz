import { domain } from '../global/Seo';

const staticPages = [
  '',
  '/polityka-prywatnosci'
]

export default function sitemap() {
  const currentDate = new Date();
  const sitemap = staticPages.map(route => ({
    url: `${domain}${route}`,
    lastModified: currentDate,
  }));
  return sitemap;
}