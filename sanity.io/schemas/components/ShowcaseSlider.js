import removeMarkdown from "../../utils/removeMarkdown"

export default {
  name: "ShowcaseSlider",
  title: "Showcase Slider",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required()
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required()
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'CTA',
      validation: Rule => Rule.required()
    },
    {
      name: 'list',
      type: 'array',
      options: {
        layout: 'grid'
      },
      of: [
        {
          type: 'reference',
          to: {
            type: 'mural'
          },
          options: {
            disableNew: true,
          },
        }
      ],
      title: 'Lista',
      validation: Rule => Rule.required().unique(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      paragraph: 'paragraph',
    },
    prepare({ heading, paragraph }) {
      return {
        title: removeMarkdown(heading),
        paragraph: removeMarkdown(paragraph),
      }
    }
  }
}