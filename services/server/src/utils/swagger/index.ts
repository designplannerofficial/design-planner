import swaggerJsDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Design Planner - API Documentation',
            version: '1.0.0',
            description: 'Design Planner simplifies database design. Effortlessly manage multiple databases with automated code generation. Visualize and secure your data infrastructure. ( An Alternative for Code Planner, DbDesigner, etc... )',
        },
    },
    apis: [
        './src/routers/*.ts',
    ],
};

export const swaggerSpecs = swaggerJsDoc(options);