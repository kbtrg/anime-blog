import { AppProps } from "next/app";

import "styles/reset.css";
import "styles/globals.scss";
import "styles/microcms.scss";

const App = ({ Component, pageProps }: AppProps): JSX.Element  => {
  return (
    <Component {...pageProps} />
  );
}

export default App;