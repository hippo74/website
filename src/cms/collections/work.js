export const work = {
  label: 'Work',
  name: 'work',
  folder: 'src/content/work',
  extension: 'mdx',
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
