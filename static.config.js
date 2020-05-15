import path from "path"
import hotlines from "./src/data/all.json"
import support from "./src/data/support.json"

// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),

  getRoutes: async ({ dev }) => [
    {
      path: 'en/hotlines',
      template: 'src/pages/en/hotlines',
      getData: async () => ({
        hotlines,
      }),
    },

    {
      path: 'en/support',
      template: 'src/pages/en/support',
      getData: async () => ({
        support,
      }),
    },

    {
      path: 'jp/hotlines',
      template: 'src/pages/jp/hotlines',
      getData: async () => ({
        hotlines,
      }),
    },

    {
      path: 'jp/support',
      template: 'src/pages/jp/support',
      getData: async () => ({
        support,
      }),
    }
  ],

  siteRoot: 'https://covid19-hotlines.jp',

  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-react-router'),
    require.resolve('react-static-plugin-sitemap'),
  ]
}
