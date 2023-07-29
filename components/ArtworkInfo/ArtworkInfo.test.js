import { render, screen } from "@testing-library/react";
import ArtworkInfo from ".";

const data = {
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
  dimensions: [{ value: "95.4" }, { value: "56.2" }],
  titles: [{ title: "Alice" }],
  current_location_name: "Sal 213",
  labels: [{ text: "Information" }],
  production_dates_notes: ["Ca. 1918"],
};

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: {
      id: "123",
    },
  }),
}));

test("renders image", () => {
  render(<ArtworkInfo artwork={data} />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});

test("renders artwork's title", () => {
  render(<ArtworkInfo artwork={data} />);
  const titleText = screen.getByText(/alice/i);
  expect(titleText).toBeInTheDocument();
});

test("renders date of production", () => {
  render(<ArtworkInfo artwork={data} />);
  const production_dates_notes = screen.getByText(/ca. 1918/i);
  expect(production_dates_notes).toBeInTheDocument();
});

test("renders creator's forename", () => {
  render(<ArtworkInfo artwork={data} />);
  const creator_forename = screen.getByText(/amedeo/i);
  expect(creator_forename).toBeInTheDocument();
});

test("renders creator's surname", () => {
  render(<ArtworkInfo artwork={data} />);
  const creator_surname = screen.getByText(/modigliani/i);
  expect(creator_surname).toBeInTheDocument();
});

test("renders creator's birth date", () => {
  render(<ArtworkInfo artwork={data} />);
  const creator_date_of_birth = screen.getByText(/1884/i);
  expect(creator_date_of_birth).toBeInTheDocument();
});

test("renders creator's death date", () => {
  render(<ArtworkInfo artwork={data} />);
  const creator_date_of_death = screen.getByText(/1920/i);
  expect(creator_date_of_death).toBeInTheDocument();
});

test("renders artwork's dimensions", () => {
  render(<ArtworkInfo artwork={data} />);
  const dimensions = screen.getByText(/95.4/i);
  expect(dimensions).toBeInTheDocument();
});

test("renders location in museum", () => {
  render(<ArtworkInfo artwork={data} />);
  const current_location_name = screen.getByText(/Sal 213/i);
  expect(current_location_name).toBeInTheDocument();
});
