import FavoritesFunction from "../../components/FavoritesFunction";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";

export default function FavoritesPage({ favorites, artworks }) {
  return (
    <>
      <Header />
      <FavoritesFunction favorites={favorites} artworks={artworks} />
      <Navigation />
    </>
  );
}
