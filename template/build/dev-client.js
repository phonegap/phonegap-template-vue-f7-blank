/* eslint-disable import/no-extraneous-dependencies, no-var, vars-on-top */

require('eventsource-polyfill');
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');

hotClient.subscribe((event) => {
  if (event.action === 'reload') {
    window.location.reload();
  }
});
