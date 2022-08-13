export default {
  head: {
    title: process.env.WP_WEBSITE_NAME || "",

    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
      { name: "robots", content: "index, follow" },
    ],

    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: "../css/jquery.fancybox.min.css" },
      { rel: "stylesheet", href: "../css/style.css" },
      { rel: "stylesheet", href: "../css/slider.css" },
    ],

    script: [
      { src: "js/jquery.min.js", type: "text/javascript", body: true },
      { src: "js/main.menu.js", type: "text/javascript", body: true },
      {
        src: "js/jquery.fancybox.min.js",
        type: "text/javascript",
        body: true,
      },
    ],
  },

  render: {
    csp: true,
  },

  plugins: ["~/plugins/lazyload", "~/plugins/globalComponents"],

  buildModules: ["@nuxtjs/dotenv", "@nuxtjs/style-resources"],

  modules: ["@nuxtjs/axios", "@nuxtjs/pwa", "@nuxtjs/sitemap"],

  // styleResources: {
  //   scss: ["~/assets/scss/main.scss"],
  // },

  // css: ["~/assets/scss/main.scss"],

  loading: {
    color: "#db5b9d",
    height: "3px",
  },

  pageTransition: {
    name: "slide-fade",
  },

  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },

    extend(config) {
      const rule = config.module.rules.find(
        (r) => r.test.toString() === "/\\.(png|jpe?g|gif|svg|webp)$/i"
      );
      config.module.rules.splice(config.module.rules.indexOf(rule), 1);

      config.module.rules.push(
        {
          test: /\.(jpe?g|png)$/i,
          loader: "responsive-loader",
          options: {
            placeholder: true,
          },
        },
        {
          test: /\.(gif|svg)$/,
          loader: "url-loader",
          query: {
            limit: 1000,
            name: "img/[name].[hash:7].[ext]",
          },
        }
      );
    },
  },
};
