export default {
  name: 'NotFoundPage',
  title: 'Not Found',
  type: 'document',
  icon: () => '🔍',
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
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ],
      title: 'Galeria',
      fieldset: 'hero',
      validation: Rule => Rule.required().min(6).max(6),
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