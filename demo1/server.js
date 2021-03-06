'use strict';

const Hapi = require('hapi');

//  Create the server.
const server = new Hapi.Server();
server.connection({
  host: '0.0.0.0',
  port: 8123
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
server.route([
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply(`
        ****************
        Hello JSChannel!
        ****************
        `);
    }
  },{
    method: 'GET',
    path: '/search',
    handler: (request, reply) => {
      // This is the broken line! We should be using request.query and parseInt...
      getPerson(request.params.id)
      //  ...like this!
      //  getPerson(parseInt(request.query.id))
        .then((person) => reply(person))
        .catch(() => reply("Can't find that Simpson...").code(404));
    }
  }
]);

server.start((err) => {
  if(err) throw err;
  console.log("Server running at: " + server.info.uri);
});
