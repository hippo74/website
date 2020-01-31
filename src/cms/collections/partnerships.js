export const partnerships = {
  label: 'Partnerships',
  name: 'partnerships',
  folder: 'src/content/partnerships',
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
      name: 'body',
      label: 'Body',
      widget: 'markdown'
    }
  ]
}
