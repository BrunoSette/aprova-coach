module.exports = {
  siteMetadata: {
    title: `Aprova Coach`,
    siteUrl: `https://www.aprovacoach.com.br`,
    description: `Sua Coach Para Concursos`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-mixpanel",
      options: {
        apiToken: "ed2e51f63610f4376ac1cb3aa056995d",
        pageViews: "all",
        mixpanelConfig: null
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-144564616-1",
        head: true
      }
    }
  ]
};
