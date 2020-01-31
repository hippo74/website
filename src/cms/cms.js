import CMS from 'netlify-cms-app'

// collection field partials
import { pages } from './collections/pages'
import { papers } from './collections/papers'
import { work } from './collections/work'
import { partnerships } from './collections/partnerships'

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
      pages,
      papers,
      work,
      partnerships,
    ]
  }
})
