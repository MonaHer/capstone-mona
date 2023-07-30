import { render, screen } from "@testing-library/react";
import ArtworksList from ".";

const data = {
  items: [
    {
      id: "1170032793_object",
      image_thumbnail:
        "https://iip-thumb.smk.dk/iiif/jp2/xd07gw96b_KMSr145__1_-crop.tif.jp2/full/!1024,/0/default.jpg",
      production: [
        {
          creator_forename: "Amedeo",
          creator_surname: "Modigliani",
          creator_date_of_birth: "1884-07-12",
          creator_date_of_death: "1920-01-24",
        },
      ],
      dimensions: [{ value: "95.4" }, { value: "56.2" }],
      titles: [{ title: "Alice" }],
      current_location_name: "Sal 213",
      labels: [{ text: "Information" }],
      production_dates_notes: ["Værkdatering: 1909"],
    },
  ],
};

test("renders list", () => {
  render(<ArtworksList artworks={data} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});

test("renders image", () => {
  render(<ArtworksList artworks={data} />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});
