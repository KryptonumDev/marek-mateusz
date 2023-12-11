export default {
  name: 'IndexPage',
  title: 'Strona główna',
  type: 'document',
  icon: () => '⭐️',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'hero_Cta',
      type: 'cta',
      title: 'CTA',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paintings',
      type: 'array',
      of: [
        {
          type: 'Painting'
        }
      ],
      title: 'Galeria',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'callout',
      title: 'Wyróżniona sekcja',
      type: 'TextSection',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'murals',
      title: 'Murale',
      type: 'ShowcaseSlider',
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