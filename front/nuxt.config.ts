import { fileURLToPath } from "node:url";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  typescript: {
    shim: false,
  },
  nitro: {},
  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
  },
  app: {
    head: {
      title: "Auguste MANOU",
      htmlAttrs: {
        lang: "fr",
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
        {
          "http-equiv": "X-UA-Compatible",
          content: "IE=edge",
        },
        {
          name: "keywords",
          content:
            "Vue Nuxtjs C# React Developer Freelance FullStack Backend Javascript",
        },
        {
          name: "description",
          content: "Auguste MANOU - Développeur Web Full Stack C#/JS",
        },
        {
          name: "author",
          content: "Auguste",
        },
      ],
      link: [
        { rel: "shortcut icon", href: "/assets/imgs/favicon.ico" },
        // Google Fonts
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
        },
        // Bootstrap Icons
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css",
        },
        // CSS
        { rel: "stylesheet", href: "/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" },
      ],
      script: [
        { src: "/assets/js/bootstrap.bundle.min.js" },
        { src: "/assets/js/plugins.js" },
        { src: "/assets/js/wow.min.js" },
        { src: "/assets/js/three.min.js" },
        { src: "/assets/js/gsap.min.js" },
        { src: "/assets/js/ScrollTrigger.min.js" },
        { src: "/assets/js/scripts.js", defer: true },
      ],
    },
  },
  css: ["swiper/css/bundle", "@/styles/globals.css"],
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true,
      },
    },
  },
});
