# Structure

45 minutes. Saving 10 minutes for questions.

- 0-5 mins   - Who am I?
- 5-10 mins  - Why do I care about Node.js?
- 10-20 mins - A simple example - fixing a bug in a server.
- 20-25 mins - Another example - get better at testing.
- 25-35 mins - A detailed example - tracking down a memory leak using Chrome developer tools.
- 35-45 mins - Questions (if needed)
- 35-45 mins - If no questions, another example.

# Who am I?
- Dave Kerr
- Software developer based in Singapore, originally English
- Lived in UK, Belgium, India, US and now Singapore.

# Why do I care about Node.js?
- Originally, it seemed like such a terrible idea...
- ...taking the engine from a browser, and running it on a server...
- ...with all of the awful features of the language (no modules, awful type coercion, no threads)
- However, some things it demonstrated it does extremely well:
- ...very simple tooling, flexible, no threads, very fast and efficient runtime, getting better daily
- ECMAScript 6 and 7 improve things in some areas
- However, it is still hard: no standards, classes are coming in, different patterns and practices

# How can we be better Node.js developers?
- Understand the langauge
- Understand the runtime
- Be better at problem solving

# A simple example
- Hapi js server
- Run the server, show the code, show the breaking section
- How could we try and fix this?
- console.log, print statements, etc etc?
- We can get into this code in three steps:
- 1. npm install node-inspector
- 2. + "debug": "node-inspector ./index.js"
- 3. npm run debug
- Demonstrate via stepping through the code, finding the issue.
- There are lots of cool tricks
- . Edit and continue
- . Inline expressions
- . Inspectors

# Demo1
1. Open server.js
2. Walk through all the code
3. Demo working route
4. Demo non-working route
5. Inspect code again
6. Discuss options - logging, console, etc etc
7. Demo the best option - node debug
8. Demo checking the code, stepping through, 
# An example with testing
- The same server, with some unit tests
- Demonstrate the tests are working except for one
- Show the problematic code
- Same steps - install node-inspector, add script, debug.
- Key points - it works for testing, tooling, coverage etc.

# An aside - how does this work?
- The node --debug flag
- Node-inspector
- Chrome Dev tools

# Another example - tracking down a memory leak
- Demo the server
- Demo the load test
- Run a request
- Snapshot, request, snapshot, compare
- Use snapshot comparison to isolate objects which are not garbage collected

# Further reading on this
- dwmkerr.com, angularjs memory leaks, taming the unicorn

# Questions 
