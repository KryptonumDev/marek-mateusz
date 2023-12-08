export default {
  name: 'IndexPage',
  title: 'Homepage',
  type: 'document',
  icon: () => '⭐️',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'hero',
    },
    {
      name: 'callout',
      title: 'Wyróżniona sekcja',
      type: 'TextSection',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'textSection',
      title: 'Kolumna z tekstem',
      type: 'TextSection',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'contactForm',
      type: 'ContactForm',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'faq',
      type: 'Faq',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero',
      options: { collapsible: true }
    },
  ],
  groups: [
    {
      title: 'SEO',
      name: 'seo',
    },
  ]
}