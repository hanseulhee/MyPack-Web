import type { AppProps } from "next/app";
import GlobalStyle from "styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "styles/Theme/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
