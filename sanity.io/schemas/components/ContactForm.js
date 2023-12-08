import removeMarkdown from "../../utils/removeMarkdown"

export default {
  name: "ContactForm",
  title: "ContactForm",
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