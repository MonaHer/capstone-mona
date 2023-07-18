// export default function MyNotesPage({ artworks, notes }) {
//   return (
//     <>
//       <h1>my notes</h1>
//       <ul>
//         {notes.map(({ id, note }) => {
//           return <li key={id}>{note}</li>;
//         })}
//       </ul>
//     </>
//   );
// }

// import Link from "next/link";

// export default function MyNotesPage({ notes, artworks }) {
//   /*
// wir suchen für jede Notiz das entsprechende Kunstwerk in artworks.items und
// fügen den Titel dieses Kunstwerks als artworkTitle zur Notiz hinzu.
// Das Resultat ist eine neue Liste von Notizen (notesWithArtworkTitle),
// die jetzt alle einen artworkTitle haben.
// */

//   const { titles } = artworks.items;
//   console.log("titles", titles);
//   // const titleText = titles.title;
//   console.log("mynotes", artworks);
//   console.log("mytitle", artworks.items.titles);
//   const notesWithArtworkTitle = notes.map((note) => {
//     note.artworkTitle = artworks.items.find(
//       (artwork) => artwork.id === note.id
//     ).titles[0].title;
//     return note;
//   });

//   return (
//     <>
//       <Link href="/">Back to Home</Link>
//       <ul>
//         {notesWithArtworkTitle.map((note) => {
//           return (
//             <li key={id}>
//               <Link href={`/artwork-info/${id}`}>
//                 <h2>{note.artworkTitle}</h2>
//               </Link>
//               <p>{note.text}</p>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

import Link from "next/link";

// export default function MyNotesPage({ notes, artworks }) {
/*
wir suchen für jede Notiz das entsprechende Kunstwerk in artworks.items und
fügen den Titel dieses Kunstwerks als artworkTitle zur Notiz hinzu.
Das Resultat ist eine neue Liste von Notizen (notesWithArtworkTitle),
die jetzt alle einen artworkTitle haben.
*/

// const notesWithArtworkTitle = notes.map((note) => {
//   note.artworkTitle = artworks.items.find(
//     (artwork) => artwork.id === note.artworkID
//   );
//   const artworkTitle = artwork ? artwork.titles[0].title : "Unknown Title";
//   return { ...note, artworkTitle };
//   //titles[0].title;

//   // return note;
// });

export default function MyNotesPage({ notes, artworks }) {
  const notesWithArtworkTitle = notes.map((note) => {
    const artwork = artworks.items.find(
      (artwork) => artwork.id === note.artworkID
    );
    const artworkTitle = artwork ? artwork.titles[0].title : "";
    return { ...note, artworkTitle };
  });

  return (
    <>
      <Link href="/">Back to Home</Link>
      <ul>
        {notesWithArtworkTitle.map((note) => {
          return (
            <li key={note.artworkID}>
              <Link href={`/artwork-info/${note.artworkID}`}>
                <h2>{note.artworkTitle}</h2>
              </Link>
              <p>{note.text}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
