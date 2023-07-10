import ArtworksList from "@/components/ArtworksList/index.js";
import Image from "next/image";
import Link from "next/link";

export default function HomePage({ artworks }) {
  console.log("hallo", artworks);
  return (
    <>
      <h1>SKM Notes</h1>
      <ArtworksList artworks={artworks} />
    </>
  );
}
