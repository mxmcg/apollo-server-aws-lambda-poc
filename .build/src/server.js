"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlHandler = void 0;
var server_1 = require("@apollo/server");
var aws_lambda_1 = require("@as-integrations/aws-lambda"); //highlight-line
var typeDefs = "#graphql\n  type Query {\n    hello: String\n  }\n";
var resolvers = {
    Query: {
        hello: function () { return "world"; },
    },
};
var server = new server_1.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
});
// This final export is important!
exports.graphqlHandler = (0, aws_lambda_1.startServerAndCreateLambdaHandler)(server); //highlight-line
//# sourceMappingURL=server.js.map