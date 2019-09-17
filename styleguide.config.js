module.exports = {
    sections: [
      {
        name: 'React Style Guide',
        sections: [
          {
            name: 'Installation',
            description: 'The description for the installation section',
          },
          {
            name: 'Live Demo',
            href: 'http://example.com'
          }
        ]
      },
      {
        name: 'UI Components',
        components: './src/components/*/*.js',
        exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
        usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
      }
    ]
  }