export default {
  name: "painting",
  title: "Obrazy",
  type: "document",
  icon: () => '🖼️',
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
    {
      name: 'availability',
      type: 'boolean',
      title: 'Dostępny?',
    },
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      type: 'type',
      availability: 'availability',
      img: 'img'
    },
    prepare({ title, year, type, availability, img }) {
      return {
        title: title,
        subtitle: `${year} | ${type} | ${availability ? 'Dostępny' : 'Niedostępny'}`,
        media: img
      }
    }
  }
}