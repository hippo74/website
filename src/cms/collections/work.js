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
      name: 'body',
      label: 'Body',
      widget: 'markdown'
    }
  ]
}
