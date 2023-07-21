import RandomCover from "@/components/RandomCover";

export default function HomePage({ artworks }) {
  return (
    <>
      <h1>SMK Notes</h1>
      <RandomCover artworks={artworks} />
    </>
  );
}
