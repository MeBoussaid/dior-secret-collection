import { ApolloClient, InMemoryCache } from "@apollo/client";

// !!! éviter cela en prod !!!!

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
