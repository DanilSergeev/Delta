import GlobalStyled from "@/assets/GlobalStyled";
import ThemeStyled from "@/assets/ThemeStyled";
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ThemeStyled}>
      <GlobalStyled />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}