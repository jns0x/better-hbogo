import type { AppProps /*, AppContext */ } from "next/app";
import "normalize.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { GlobalStyles } from "../global-styles";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
