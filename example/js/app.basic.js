var app = mojo.create({ baseSrc: 'js/' });

app
  .configure('pluginSrc', 'js/lib/plugins/') 
  .configure('logging', true) 
  .configure('plugins', ['jqmodal', 'jcarousel'])

  .map('#login-example', [{ controller: "ExampleApp.LoginController" }])
  
  .start();



