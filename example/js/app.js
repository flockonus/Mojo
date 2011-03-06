ServiceLocator.addService(new Service('UpdateProfile', 'data/success.json'));



var testService = new Service("GetUser", "/api/user/{id}", { template: true });

var parsedUrl = testService.parseTemplate("/api/user/{id}/{name}", { id: '1', name: 'jbueza'});
console.log(parsedUrl);


var app = MOJO.create({ mojoSrc: '../src', baseSrc: 'js/' });

app
  .configure('appName', 'ExampleApp')
  .configure('locale', 'en_US')
  .configure('environment', 'prod')
  .configure('pluginSrc', 'js/lib/plugins/')  
  .configure('plugins', ['jqmodal', 'jcarousel', 'pubsub'])
  .configure('selector', jQuery.sub()) //or dojo.query, or MooTools, or Ext

  .map('#registration-example', function() {
    return [
      { controller: "ExampleApp.RegistrationController", params: { user: 123, firstName: "Johnson" }}
    ];
  })

  .map('#login-example', function() {
    return [
      { controller: "ExampleApp.LoginController" }
    ];
  })

  .map('#profile-example', function() {
    return [
      { controller: "ExampleApp.member.ProfileController", params: { 'currentCity': 'Vancouver', 'hometown': 'Winnipeg' }}
    ];
  })

  .map('#gallery-example', function() {
    return [
      { controller: "ExampleApp.GalleryController" }
    ];
  })

  .start();



