import { ApolloClient, InMemoryCache } from "@apollo/client";

// !!! éviter cela en prod !!!!
// use ENV instead

const client = new ApolloClient({
  uri: "https://main.ds8lkanha4tdu.amplifyapp.com/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
