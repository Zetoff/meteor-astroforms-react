Package.describe({
  name: 'zetoff:astroforms-react',
  version: '1.0.0',
  summary: 'Astroforms React implementation',
  git: 'https://github.com/jagi/meteor-astronomy-validators.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');

  api.use([
    'ecmascript',
    'es5-shim',
    'accounts-base',
    'jagi:astronomy@2.0.0-rc.8',
    'zetoff:astroforms',
    // 'underscore',
    'check',
  ], ['client', 'server']);

  api.imply('jagi:astronomy');
  api.imply('zetoff:astroforms');

  //TODO npm dependencies
  // - lodash

  api.addFiles('client/main.js', 'client');

  api.export('Astroforms', 'client');

  api.mainModule('lib/main.js', ['client', 'server']);
});
