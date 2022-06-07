const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const config  = require("config")
module.exports = {
    startSwagger: function(app){
      const swaggerOptions = {
        swaggerDefinition: {
          info: {
            version: "1.0.0",
            title: " Medical Center Api",
            description: "jooka api documentation",
            contact: {
              name: "Jooka technologies",
              email:"jookatech@gmail.com"
            },
             servers:  config.get("swagger.url")
          },
          securityShemes:{
            "BasicAuth":{
              "type": "http",
              "scheme": "basic"
            }
          },
          host: config.get("swagger.url"),
          schemes: [config.get("swagger.method")],
          tags: [
            {name: "Medecin", description: "Everything about medecin"},
            {name: "Admins", description: "Everything about Administration Task (REQUIRE SPECIAL KEY)"}
          ]
        },
        apis: [
          "./core/docs/medecin.js"
        ]
      };

      var options = {
        customCss: '.swagger-ui .topbar { display: none }',
        customSiteTitle: "Medical Center API",
        customfavIcon: "/assets/favicon.ico"
      };


      const swaggerDocs = swaggerJsDoc(swaggerOptions);
      app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs, options));
    }
}