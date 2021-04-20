'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/weeklyforecasts']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/api/v1/weeklyforecasts?date=2021-04-20');
  }

  if (swaggerExpress.runner.swagger.paths['/places']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/api/v1/places?date=2021-04-20');
  }

  if (swaggerExpress.runner.swagger.paths['/mapweatherforecasts']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/api/v1/mapweatherforecasts?date=2021-04-20');
  }
});
