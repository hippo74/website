export const pages = {
  label: 'Pages',
  name: 'pages',
  folder: 'src/content/pages',
  extension: 'mdx',
  format: 'frontmatter',
  create: false,
  delete: false,
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
