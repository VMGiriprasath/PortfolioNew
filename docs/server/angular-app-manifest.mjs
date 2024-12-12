
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'Portfolio1',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 7657, hash: '77cd59ad65c7e742999e0721afde8f9d7383aea0207accd5a8339c7e960e1e85', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7984, hash: '5d5d2452654ad02d9680e454b3e4fec54a4ae5911f58283ec5db3b1af14733b0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5XVWDKWT.css': {size: 105, hash: 'RdUNBt6AY6U', text: () => import('./assets-chunks/styles-5XVWDKWT_css.mjs').then(m => m.default)}
  },
};
