import RandomCover from "@/components/RandomCover";

export default function HomePage({ artworks }) {
  return (
    <>
      <RandomCover artworks={artworks} />
    </>
  );
}
