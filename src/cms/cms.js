import CMS from 'netlify-cms-app'

// collection field partials
import { pages } from './collections/pages'
import { papers } from './collections/papers'
import { work } from './collections/work'
import { partnerships } from './collections/partnerships'

CMS.init({
  config: {
    // site_url: 'https://ryanfiller.com',
    load_config_file: false,
    backend: {
      name: 'git-gateway',
      repo: 'hippo74/website',
      branch: 'master',
    },
    media_folder: 'static/images',
    public_folder: '/images',
    collections: [
      pages,
      papers,
      work,
      partnerships,
    ]
  }
})
