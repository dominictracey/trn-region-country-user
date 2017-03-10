Package.describe({
  name: "trn:user-country-region",
  version: "1.1.0",
});

Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'nova:core@1.0.0',
  ]);

  api.mainModule("lib/modules.js", ["client", "server"]);
});
