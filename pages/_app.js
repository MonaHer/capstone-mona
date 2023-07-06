import GlobalStyle from "../styles";
import useSWR from "swr";
import ArtworksPreview from "@/components/ArtworksPreview";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
