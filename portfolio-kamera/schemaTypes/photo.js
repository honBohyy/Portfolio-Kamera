export default {
  name: 'photo',
  title: 'Fotografie',
  type: 'document',
  fields: [
    { name: 'title', title: 'Název fotky', type: 'string' },
    { name: 'category', title: 'Kategorie', type: 'string' },
    { name: 'image', title: 'Obrázek', type: 'image', options: { hotspot: true } }
  ]
}