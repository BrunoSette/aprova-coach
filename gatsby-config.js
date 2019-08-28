module.exports = {
    
  siteMetadata: {
    title: `Aprova Coach`,
    siteUrl: `https://www.aprovacoach.com.br`,
    description: `Sua Coach Para Concursos`
  },
  plugins: [
  {
    resolve: 'gatsby-plugin-mixpanel',
    options: {
      apiToken: 'ed2e51f63610f4376ac1cb3aa056995d',
      pageViews: {
        '/': 'Home Page View', // an event 'Page blog view' will be send to mixpanel on every visit on the /blog page
        '/agendamento': 'Agendamento View',
        '/obrigado': 'Obrigado View',
      },
      mixpanelConfig: null, // you can override default config for mixpanel library https://github.com/mixpanel/mixpanel-js/blob/8b2e1f7b/src/mixpanel-core.js#L87-L110
      /*
      pageViews: 'all' // to track every route changes
      */
    },
  },
];
};