import { createSwaggerSpec } from "next-swagger-doc";

// Swagger spec


export const getApiDocs = async () => {
    
  const spec = createSwaggerSpec({
    apiFolder: "pages/api", 
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Flutter Glossaries API",
        version: "1.0.0",
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [],
    },
  });
  return spec;
};