import { GameManagerProvider } from "../contexts/gameManager";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <GameManagerProvider>
      <Component {...pageProps} />
    </GameManagerProvider>
  );
}

export default MyApp;
