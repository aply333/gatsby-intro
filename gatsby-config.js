module.exports = {
  siteMetadata: {
    title: 'FrontEnd Masters Gatsby Workshop',
    description:
      'A Site we build together in the front-end masters workshop course!',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
};
