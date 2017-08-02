const routes = [
	{
    path: '/about/',
    component: require('./pages/page1.vue')
  },
  {
    path: '/form/',
    component: require('./pages/form.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./pages/page2.vue')
  }
]

export default routes