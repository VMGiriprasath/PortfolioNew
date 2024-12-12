
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/PortfolioNew/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 7660, hash: 'acc03412f35c058ac7a0f082e65e97beb4c6b4bfea982b604b9477458a73ef17', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7987, hash: 'b28b29274ae7406a0035d88c10b1ff85ebd98bbb794aaab81cef4af524161e68', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5XVWDKWT.css': {size: 105, hash: 'RdUNBt6AY6U', text: () => import('./assets-chunks/styles-5XVWDKWT_css.mjs').then(m => m.default)}
  },
};
