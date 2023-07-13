import { useState } from "react";

export default function SearchBar({ artworks }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleInputChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearch(searchTerm) {
    const filteredTitles = artworks.filter((artwork) =>
      artwork.titles[0].title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredTitles);
  }

  return (
    <>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button type="submit" onHandleSearch={handleSearch}>
        Search
      </button>
    </>
  );
}
