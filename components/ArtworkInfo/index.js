import Image from "next/image";

export default function ArtworkInfo({ artworks }) {
  return (
    console.log(artworks),
    (
      <>
        <ul>
          {artworks &&
            artworks.items.map(({ id, ...item }) => {
              const productionDatesNotes =
                item.production_dates_notes && item.production_dates_notes[0];
              const prefix = "Værkdatering: ";
              const formattedProductionDatesNotes =
                productionDatesNotes && productionDatesNotes.startsWith(prefix)
                  ? productionDatesNotes.slice(prefix.length)
                  : productionDatesNotes;

              return (
                <li key={id}>
                  <Image
                    src={item.image_thumbnail}
                    alt={item.title}
                    height={300}
                    width={300}
                  />
                  <p>
                    Title: {item.titles[0].title},
                    {formattedProductionDatesNotes}
                  </p>
                  <p>
                    Creator: {item.production[0].creator_forename}{" "}
                    {item.production[0].creator_surname},
                    {item.production[0].creator_date_of_birth
                      ? item.production[0].creator_date_of_birth.slice(0, 4)
                      : ""}
                    -
                    {item.production[0].creator_date_of_death
                      ? item.production[0].creator_date_of_death.slice(0, 4)
                      : ""}
                  </p>
                  <p>
                    📐
                    {item.dimensions && item.dimensions[0]
                      ? item.dimensions[0].value
                      : ""}
                    x
                    {item.dimensions && item.dimensions[1]
                      ? item.dimensions[1].value
                      : ""}
                    cm
                  </p>
                  <p>📍 {item.current_location_name}</p>
                  <p>
                    {item.labels && item.labels[0] ? item.labels[0].text : ""}
                  </p>
                </li>
              );
            })}
        </ul>
      </>
    )
  );
}

/*  {item.production_dates_notes &&
                    item.production_dates_notes[0]}*/
