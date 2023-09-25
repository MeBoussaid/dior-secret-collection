import { ApolloServer, gql } from "apollo-server-micro";
import Cors from "micro-cors";

const cors = Cors();

const typeDefs = gql`
  type User {
    password: String
    email: String!
  }

  type Product {
    id: ID!
    name: String!
    price: String!
    description: String!
    descriptionOnHover: String!
    imageSrc: String!
  }

  type Query {
    user(email: String!): User
    products: [Product!]!
  }
`;

const users = [
  { email: "maeva.ghennam@mail.com", password: "23dd56TY" },
  { email: "lalla.smith@mail.com", password: "09Zs76YU" },
  { email: "ba.johnson@mail.com", password: "23Z30ssd" },
];

const products = [
  {
    id: "1",
    name: "MEN SHIRT",
    price: "19 000 €",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionOnHover:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "./img1.png",
  },
  {
    id: "2",
    name: "LADY BAG",
    price: "3 000 €",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionOnHover:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "./img2.png",
  },
  {
    id: "3",
    name: "DIOR JEWELERY",
    price: "100 000 €",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionOnHover:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "./img3.png",
  },
];

const resolvers = {
  Query: {
    // ugly any to solve
    user: (parent: any, args: { email: string }) => {
      const user = users.find((user) => user.email === args.email);
      if (!user) {
        throw new Error("error");
      }
      return { email: user.email };
    },
    products: () => {
      return products;
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
});
