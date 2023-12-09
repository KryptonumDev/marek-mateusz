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
      of: [
        {
          type: 'Painting'
        }
      ],
      title: 'Lista',
      validation: Rule => Rule.required()
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