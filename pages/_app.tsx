import NextNProgress from "nextjs-progressbar";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#f8f9fa"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}
