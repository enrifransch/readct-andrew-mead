
const user = {
  location: 'hawai',
  // name: 'john',
  age: 18
}

function getLocation(location) {
  return location ? 'location is ' + location : undefined;
}

const template = (
  <div>
    <h1>{user.name ? user.name : 'anonymous'}</h1>
    <p>{getLocation(user.location)}</p>
    <p>{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}</p>
    <ul>
    </ul>
  </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);