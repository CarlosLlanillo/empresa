module.exports = {
  dir: './src/api/generated',
  apis: [
    {
      name: 'My Factory',
      input: {
        url: 'https://emi.soincon.es/snc-mf-api/v3/api-docs',
      },
      output: {
        dir: 'mf',
      },
      swaggerUrl:
        'https://emi.soincon.es/snc-mf-api/swagger-ui/index.html?configUrl=/snc-mf-api/v3/api-docs/swagger-config#/',
      apiUrl: {
        configPath: 'mf.api',
      },
    },
  ],
};
