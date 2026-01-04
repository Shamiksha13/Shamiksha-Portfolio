
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Shamiksha-Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Shamiksha-Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Shamiksha-Portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/Shamiksha-Portfolio/education"
  },
  {
    "renderMode": 2,
    "route": "/Shamiksha-Portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/Shamiksha-Portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/Shamiksha-Portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7129, hash: 'eabf64f8652bb40836d7c78e3f87f950d0f219e9c080b76799713a80d336b6e5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 976, hash: 'b5d7d98ae6df2f109de2b36d2041c33f7d8b3fb7a89d6a8f8fdbbbaceba4c8bb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 966978, hash: 'ed4741274eb00852dd3cff20477c15a759af15218f728d150137b16537f508fe', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 13283, hash: '94bf2443a8d8f8e09e70cffcd7515d0c177eecb7c74a2c62a35f5f326e181bc3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 13265, hash: '96b52a94ed78813452c561e04146de431fed2727ec4a1444817dfa7cb775d787', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 12826, hash: 'c9aad798018e76abbd4e78eee7494972a9152fef369a7f433874a05a24484a2a', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 15029, hash: '732b05e26d992491179aa4f9f022ac7dd55b425480863f13dea73fe35b49ae75', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 14690, hash: '64051c03c0ce2b9e50420e1d67dc0954a55411d4e34e3ebffd0567b1e3f10cca', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'styles-IHDOEHP4.css': {size: 8311, hash: '2BKoZAvpzCA', text: () => import('./assets-chunks/styles-IHDOEHP4_css.mjs').then(m => m.default)}
  },
};
