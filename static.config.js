import path from 'path'

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),

  siteRoot: 'https://covid19-hotlines.jp',

  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
