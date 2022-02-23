import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/login/index' },
    { path: '/error', component: '@/pages/error/index' },
    { path: '/index', component: '@/pages/index/index' },
  ],
  fastRefresh: {},
});
