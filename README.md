# effective-nodejs-debugging

This is the code and ppt which goes with my JSChannel 2016 presentation on effective debugging of Node.js applications.

Large parts of the later demos use my example nodejs-microservice stack for Docker, this is extensively written up at [Learn Docker by building a Microservice](http://www.dwmkerr.com/learn-docker-by-building-a-microservice/).

## demo 1

In Demo 1 we have a bug in the code - we should be able to run:

```
npm install && npm start &          # start the server
http :8123/search?id=1              # find homer simpson
```

## demo 2

In Demo 2, we have a container we want to debug. In this case, we run node-inspector in the container, and expose port 8080 so that we can hit it with Chrome. Be aware, make sure that you use the `web-host` flag to expose the host.

```
node-debug --web-host 0.0.0.0 index.js
```

