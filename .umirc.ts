import { defineConfig } from "umi";

export default defineConfig({
  nodeModulesTransform: {
    type: "none",
  },
  routes: [
    {
      path: "/",
      component: "@/pages/index",
    },
  ],
  title: false,
  fastRefresh: {},
  publicPath: "/",
  hash: true,
});
