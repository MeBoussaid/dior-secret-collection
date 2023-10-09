import { ApolloClient, InMemoryCache } from "@apollo/client";

// !!! éviter cela en prod !!!!
// use ENV instead
// uri: "http://localhost:3000/api/graphql",
// uri: "https://main.ds8lkanha4tdu.amplifyapp.com/api/graphql",
const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://main.ds8lkanha4tdu.amplifyapp.com/api/graphql"
      : "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
