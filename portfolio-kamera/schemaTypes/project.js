export default {
  name: 'project',
  title: 'Projekty',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Název projektu',
      type: 'string',
    },
    {
      name: 'videoUrl',
      title: 'Odkaz na YouTube/Vimeo',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Popisek',
      type: 'text',
    },
    {
      name: 'thumbnail',
      title: 'Náhledovka',
      type: 'image',
      options: { hotspot: true }
    }
  ]
}