
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/PortfolioNew/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 7657, hash: '4bd9c22ece516e7fb1c5904b6840f06497ed57e0e2a07db149f8582b02408759', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7984, hash: '343826793ee438cac77294cecb3443f8e78a72477ec033545e5f87494b52358f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5XVWDKWT.css': {size: 105, hash: 'RdUNBt6AY6U', text: () => import('./assets-chunks/styles-5XVWDKWT_css.mjs').then(m => m.default)}
  },
};
