import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Platform } from "react-native";
import { config } from "../config";

const finalAPIURL =
  Platform.OS === "ios" ? config.DEV_API_URL_IOS : config.DEV_API_URL_ANDROID;

//change to specific IP if android emulator
const client = new ApolloClient({
  uri: finalAPIURL,
  cache: new InMemoryCache(),
});

export default client;
