export const pages = {
  label: 'Pages',
  name: 'pages',
  files: [
    {
      label: 'Home',
      name: 'home',
      file: 'src/content/pages/home.md',
      fields: [
        {
          label: 'Name',
          name: 'name',
          widget: 'hidden',
          default: 'home'
        },
        {
          name: 'title',
          label: 'Title',
          widget: 'string'
        },
        {
          name: 'body',
          label: 'Body',
          widget: 'text'
        }
      ]
    },
    {
      label: 'Papers',
      name: 'papers',
      file: 'src/content/pages/papers.md',
      fields: [
        {
          label: 'Name',
          name: 'name',
          widget: 'hidden',
          default: 'papers'
        },
        {
          name: 'title',
          label: 'Title',
          widget: 'string'
        },
        {
          name: 'text',
          label: 'Text',
          widget: 'text'
        },
        {
          label: 'Papers',
          name: 'papers',
          widget: 'list',
          allow_add: true,
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
              label: 'PDF Url',
              name: 'url',
              widget: 'string',
              required: false
            },
            {
              label: 'PDF File',
              name: 'file',
              widget: 'file',
              required: false
            }
          ]
        },
      ]
    },
    {
      label: 'Work',
      name: 'work',
      file: 'src/content/pages/work.md',
      fields: [
        {
          label: 'Name',
          name: 'name',
          widget: 'hidden',
          default: 'work'
        },
        {
          name: 'title',
          label: 'Title',
          widget: 'string'
        },
        {
          name: 'text',
          label: 'Text',
          widget: 'text'
        },
        {
          label: 'Work',
          name: 'gallery',
          widget: 'list',
          allow_add: true,
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
        },
      ]
    },
    {
      label: 'Partnerships',
      name: 'partnerships',
      file: 'src/content/pages/partnerships.md',
      fields: [
        {
          label: 'Name',
          name: 'name',
          widget: 'hidden',
          default: 'partnerships'
        },
        {
          name: 'title',
          label: 'Title',
          widget: 'string'
        },
        {
          name: 'text',
          label: 'Text',
          widget: 'text'
        },
        {
          label: 'Partnerships',
          name: 'partnerships',
          widget: 'list',
          allow_add: true,
          fields: [{
            label: 'Partnerships',
            name: 'partnerships',
            widget: 'relation',
            collection: 'partnerships',
            searchFields: ['title'],
            valueField: 'title',
            displayFields: ['title']
          }]
        },
      ]
    }
  ]
}
