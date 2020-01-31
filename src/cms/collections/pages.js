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
          fields: [{
            label: 'Papers',
            name: 'papers',
            widget: 'relation',
            collection: 'papers',
            searchFields: ['title'],
            valueField: 'title',
            displayFields: ['title']
          }]
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
          name: 'work',
          widget: 'list',
          allow_add: true,
          fields: [{
            label: 'Work',
            name: 'work',
            widget: 'relation',
            collection: 'work',
            searchFields: ['title'],
            valueField: 'title',
            displayFields: ['title']
          }]
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
