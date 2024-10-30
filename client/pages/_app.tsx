import GlobalStyled from "@/styles/GlobalStyled";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <GlobalStyled /> 
    <Component {...pageProps} />
  </>)
}