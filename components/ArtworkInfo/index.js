import Image from "next/image";

export default function ArtworkInfo({ artworks }) {
  return (
    console.log(artworks),
    (
      <>
        <ul>
          {artworks.items.map(
            ({
              id,
              image_thumbnail,
              production,
              dimensions,
              titles,
              current_location_name,
              labels,
              production_dates_notes,
            }) => {
              const {
                creator_forename,
                creator_surname,
                creator_date_of_birth,
                creator_date_of_death,
              } = production[0];

              const creatorLifeDates = `${
                creator_date_of_birth ? creator_date_of_birth.slice(0, 4) : ""
              }-${
                creator_date_of_death ? creator_date_of_death.slice(0, 4) : ""
              }`;

              const dimension1 =
                dimensions && dimensions[0] && dimensions[0].value
                  ? dimensions[0].value
                  : "";
              const dimension2 =
                dimensions && dimensions[1] && dimensions[1].value
                  ? dimensions[1].value
                  : "";

              const titleText =
                titles && titles[0] && titles[0].title ? titles[0].title : "";
              const labelText =
                labels && labels[0] && labels[0].text ? labels[0].text : "";

              const productionDatesNotes =
                production_dates_notes && production_dates_notes[0];
              const prefix = "Værkdatering: ";
              const formattedProductionDatesNotes =
                productionDatesNotes && productionDatesNotes.startsWith(prefix)
                  ? productionDatesNotes.slice(prefix.length)
                  : productionDatesNotes;

              return (
                <li key={id}>
                  <Image
                    src={image_thumbnail}
                    alt={titleText}
                    height={300}
                    width={300}
                  />
                  <p>
                    Title: {titleText},{formattedProductionDatesNotes}
                  </p>
                  <p>
                    Creator: {creator_forename} {creator_surname},
                    {creatorLifeDates}
                  </p>
                  <p>
                    📐
                    {dimension1}x{dimension2}
                    cm
                  </p>
                  <p>📍 {current_location_name}</p>
                  <p>{labelText}</p>
                </li>
              );
            }
          )}
        </ul>
      </>
    )
  );
}
