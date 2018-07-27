# Review Questions

## What is Node.js?
Node.js is a server-side platform that executes programs written in JavaScript. Node.js uses asynchronous programming to handle requests more efficiently, is single-threaded (only processes one command at a time), which can be beneficial for scalability, and has access to many reusable code bundles called Node Modules.
## What is Express?
Express is a framework that works with Node.js to help us build apps in an easier/faster fashion. Express can help us add middleware, routers, and other extra functions.

## Mention two parts of Express that you learned about this week.
I learned about routing through express by using endpoints to call functions, and I learned how to handle security middleware like "helmet" through express.

## What is Middleware?
Middleware is a middle party that allows us to deal properly with asynchronous functions.

## What is a Resource?
A Resource is whatever data we are using to build our REST API.

## What can the API return to help clients know if a request was successful?
The API can return an error, which would help the client know the request was not successful.

## How can we partition our application into sub-applications?
We can use Routers to partition our application into sub-applications by separating our files by resource, packaging the necessary endpoints for each resource, and then defining the route in our main file.

## What is express.json() and why do we need it?
express.json() is body-parser middleware built in to Express that we need in order to read json content.