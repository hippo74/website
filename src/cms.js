import CMS from 'netlify-cms-app'

CMS.init({
  config: {
    site_url: 'https://brynabobick.netlify.com',
    load_config_file: false,
    backend: {
      name: 'git-gateway',
      identity_url: 'https://brynabobick.netlify.com/.netlify/identity',
      gateway_url: 'https://brynabobick.netlify.com/.netlify/git/github',
      repo: 'hippo74/website',
      branch: 'master',
    },
    media_folder: 'static/images/uploads',
    public_folder: '/images/uploads',
    collections: [
      {
        label: 'Pages',
        name: 'pages',
        editor: {
          preview: false
        },
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
                name: 'text',
                label: 'Text',
                widget: 'text',
                required: false
              },
              {
                label: 'Photo',
                name: 'photo',
                widget: 'image',
              }
            ]
          },
          {
            label: 'Education',
            name: 'education',
            file: 'src/content/pages/education.md',
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
                widget: 'text',
                required: false
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
            label: 'Art',
            name: 'art',
            file: 'src/content/pages/art.md',
            fields: [
              {
                label: 'Name',
                name: 'name',
                widget: 'hidden',
                default: 'art'
              },
              {
                name: 'title',
                label: 'Title',
                widget: 'string'
              },
              {
                name: 'text',
                label: 'Text',
                widget: 'text',
                required: false
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
            label: 'Student Work',
            name: 'student-work',
            file: 'src/content/pages/student-work.md',
            fields: [
              {
                label: 'Name',
                name: 'name',
                widget: 'hidden',
                default: 'student-work'
              },
              {
                name: 'title',
                label: 'Title',
                widget: 'string'
              },
              {
                name: 'text',
                label: 'Text',
                widget: 'text',
                required: false
              },
              {
                label: 'Student Work',
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
                widget: 'text',
                required: false
              },
              {
                label: 'Partnerships',
                name: 'partnerships',
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
                    widget: 'image',
                    required: false
                  },
                  {
                    label: 'Link Text',
                    name: 'text',
                    widget: 'string',
                    required: false
                  },
                  {
                    label: 'Link',
                    name: 'url',
                    widget: 'string',
                    required: false
                  },
                ]
              },
            ]
          }
        ]
      }
    ]
  }
})
