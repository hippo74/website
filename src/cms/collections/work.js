export const work = {
  label: 'Work',
  name: 'work',
  folder: 'src/content/work',
  extension: 'md',
  format: 'frontmatter',
  create: true,
  delete: true,
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string'
    },
    {
      name: 'description',
      label: 'Description',
      widget: 'text',
      required: false
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image'
    },
    {
      label: 'Thumbnail',
      name: 'thumbnail',
      widget: 'image',
      required: false
    }
  ]
}
