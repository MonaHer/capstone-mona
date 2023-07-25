import RandomCover from "@/components/RandomCover";
import ReactLoading from "react-loading";

export default function HomePage({ artworks }) {
  return (
    <>
      <RandomCover artworks={artworks} />
    </>
  );
}
