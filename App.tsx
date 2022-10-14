import React from "react";
import RootNavigation from "./src/navigation/RootNavigation";
import { ApolloProvider } from "@apollo/client";
import { client } from "services";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootNavigation />
    </ApolloProvider>
  );
};

export default App;
