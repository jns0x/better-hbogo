import type { AppProps /*, AppContext */ } from "next/app";
import "normalize.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { GlobalStyles } from "../global-styles";
import { ThemeProvider } from "styled-components";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const theme = {
  colors: {
    primary: "#fff",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
