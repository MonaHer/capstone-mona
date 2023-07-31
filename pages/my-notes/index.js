import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import MyNotesFunction from "@/components/NotesFunction";

export default function MyNotesPage({ notes, artworks }) {
  return (
    <>
      <Header />
      <MyNotesFunction artworks={artworks} notes={notes} />
      <Navigation />
    </>
  );
}
