export const papers = {
  label: 'Papers',
  name: 'papers',
  folder: 'src/content/papers',
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
