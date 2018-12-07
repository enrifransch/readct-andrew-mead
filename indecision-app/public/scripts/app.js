'use strict';

var user = {
  location: 'hawai',
  // name: 'john',
  age: 18
};

function getLocation(location) {
  return location ? 'location is ' + location : undefined;
}

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'anonymous'
  ),
  React.createElement(
    'p',
    null,
    getLocation(user.location)
  ),
  React.createElement(
    'p',
    null,
    user.age && user.age >= 18 && React.createElement(
      'p',
      null,
      'Age: ',
      user.age
    )
  ),
  React.createElement('ul', null)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
