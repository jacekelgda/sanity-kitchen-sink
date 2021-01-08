export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff8615068eca9e18424783d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ga6bjtko',
                  apiId: '57a64292-cc7a-44b8-bb68-0e3ee33fbd96'
                },
                {
                  buildHookId: '5ff86150b03b4610fcf4dee5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-b2kyqvbh',
                  apiId: '8bd2c9f2-c384-4e54-af53-cea99a159cdd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jacekelgda/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-b2kyqvbh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
