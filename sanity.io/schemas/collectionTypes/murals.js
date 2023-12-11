export default {
  name: "mural",
  title: "Murale",
  type: "document",
  icon: () => '🏠',
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required(),
    },
    {
      name: 'year',
      type: 'number',
      title: 'Rok',
      validation: Rule => Rule.required(),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Typ',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      type: 'type',
      img: 'img'
    },
    prepare({ title, year, type, img }) {
      return {
        title: title,
        subtitle: `${year} | ${type}`,
        media: img
      }
    }
  }
}