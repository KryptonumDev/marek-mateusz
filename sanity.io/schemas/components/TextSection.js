import removeMarkdown from "../../utils/removeMarkdown"

export default {
  name: "TextSection",
  title: "Text Section",
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