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
  fastRefresh: {},
  favicon: "/favicon.png",
  publicPath: "/",
  analytics: {
    ga: "",
    baidu: "",
  },
});
