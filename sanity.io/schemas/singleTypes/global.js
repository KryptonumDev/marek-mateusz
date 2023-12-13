export default {
  name: 'global',
  title: 'Globalne',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      type: 'string',
      name: 'email',
      title: 'Email',
      validation: Rule => Rule.required(),
    },
    {
      type: 'string',
      name: 'phone',
      title: 'Phone number',
    },
    {
      type: 'url',
      name: 'instagram',
      title: 'Instagram',
      fieldset: 'social',
    },
    {
      type: 'url',
      name: 'facebook',
      title: 'Facebook',
      fieldset: 'social',
    },
    {
      name: 'seo',
      type: 'global_Seo',
      title: 'Global SEO',
    },
    {
      name: 'robotsIndex',
      type: 'boolean',
      title: 'Indeksowanie przez roboty SEO',
      description: 'Jeśli włączone roboty SEO (np. Google) będą mogły zaindeksować stronę w wyszukiwarkach.'
    },
  ],
  fieldsets: [
    {
      name: 'social',
      title: 'Social links',
      options: { collapsible: true, collapsed: true }
    },
  ]
}

export const global_Seo = {
  name: "global_Seo",
  title: "Global SEO",
  type: "object",
  fields: [
    {
      name: 'og_Img',
      type: 'image',
      title: 'OG Image',
      description: 'An image that is visible when sharing the page on social media. The dimensions of the photo should be 1200x630px'
    },
  ]
}