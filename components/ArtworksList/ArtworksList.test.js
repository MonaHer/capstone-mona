import { render, screen } from "@testing-library/react";
import ArtworksList from ".";

const data = {
  items: [
    {
      id: "123",
      image_thumbnail: "https://example.com/image.jpg",
      production: [
        {
          creator_forename: "Amedeo",
          creator_surname: "Modigliani",
          creator_date_of_birth: "1884-07-12",
          creator_date_of_death: "1920-01-24",
        },
      ],
      dimensions: [{ value: "100" }, { value: "80" }],
      titles: [{ title: "Alice" }],
      current_location_name: "Museum",
      labels: [{ text: "Label Text" }],
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
