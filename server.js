const fastify = require("fastify")({
  logger: false,
});

const path = require("path");


  /*********************/
  /*       Setup       */
  /*********************/


fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
  prefix: "/",
});

fastify.register(require("@fastify/formbody"));

fastify.register(require("@fastify/multipart"));

fastify.register(require("@fastify/view"), {
  engine: {
    handlebars: require("handlebars"),
  },
});

  /***********************/
  /*        Pages        */
  /***********************/

fastify.get("/", (request, reply) => {
  return reply.view("/src/pages/index.hbs");
});

fastify.post("/contacts", (request, reply) => {  
  return reply.view("/src/pages/contacts.html");
});


fastify.get("/projects", (request, reply) => {
  return reply.view("/src/pages/login.html");
});

// Run the server and report out to the logs
fastify.listen(
  { port: process.env.PORT, host: "0.0.0.0" },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
  }
);