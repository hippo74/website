export const pages = {
  label: 'Pages',
  name: 'pages',
  folder: 'src/content/pages',
  extension: 'mdx',
  format: 'frontmatter',
  create: true,
  delete: true,
  fields: [
    {
      name: 'body',
      label: 'Body',
      widget: 'markdown'
    }
  ]
}
