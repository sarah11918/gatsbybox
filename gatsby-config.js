module.exports = {
  siteMetadata: {
    title: `sGatsby`,
    description: `sarah11918 doin' Gatsby`,
    author: `@sarah11918`
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    }, 
// {
//   resolve:`gatsby-plugin-mdx`,
//   options: {
//       extensions: [`.md`,`.mdx`],
 
//   },
// },

// {
//   resolve: `gatsby-source-filesystem`,
//   options: {
//     name: `posts`,
//     path: `${__dirname}/src/posts/`,
//   },
// },
// {
//   resolve: "gatsby-plugin-page-creator",
//   options: {
//     path: `${__dirname}/src/posts`,
//   },
// },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,

  
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`
    //   }
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/src/pages`
    //   }
    // },
  
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-mdx-basic`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-gatsby-cloud`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
