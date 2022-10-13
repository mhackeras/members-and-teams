import { ApolloClient, InMemoryCache } from "@apollo/client";
import { config } from "../config";

//change to specific IP if android emulator
const client = new ApolloClient({
  uri: `http://${config.DEV_API_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
