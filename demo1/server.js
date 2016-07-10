'use strict';

const Hapi = require('hapi');

//  Create the server.
const server = new Hapi.Server();
server.connection({
  host: '0.0.0.0',
  port: 8080
});

//  A fake database.
var db = [{
  id: 1,
  name: "Homer"
}, {
  id: 2,
  name: "Marge"
}, {
  id: 3,
  name: "Bart"
}];

//  A fake database access function.
var getPerson = (id) => {
  return new Promise((resolve, reject) => {
    var person = db.find((p) => { return p.id === id });
    return person ? resolve(person) : reject();
  });
};

//  Define routes. Only route is 'search'
server.route[{
  method: 'GET',
  path: '/search',
  handler: (request, reply) => {
    getPerson(request.params.id)
      .then((person) => reply(person))
      .catch(() => reply("Can't find that Simpson...").code(404));
  }
}]);

server.register([], (err) => {
  if (err) throw err;

  server.start((err) => {
    if(err) throw err;
    console.log("Server running at: " + server.info.uri);
  });
});
