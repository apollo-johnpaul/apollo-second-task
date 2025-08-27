const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/page1', component: () => import('src/pages/PageWallet.vue') },
      { path: '/pageBorrow', component: () => import('src/pages/PageBorrow.vue') },
      { path: '/pageGrow', component: () => import('pages/PageGrow.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
