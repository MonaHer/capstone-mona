import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const [offset, setOffset] = useState(0);
  const rowsPerPage = 20;

  const {
    data: artworks,
    error,
    isLoading,
    mutate,
  } = useSWR(
    `https://api.smk.dk/api/v1/art/search/?keys=*&fields=image_thumbnail&fields=titles&fields=id&fields=production&fields=dimensions&fields=current_location_name&fields=production_dates_notes&fields=labels&filters=[image_hq:true],[object_names:painting],[public_domain:true]&offset=${offset}&rows=${rowsPerPage}&lang=en`,
    fetcher
  );

  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  function handleNextPage() {
    setOffset((prevOffset) => prevOffset + rowsPerPage);
    mutate(
      `https://api.smk.dk/api/v1/art/search/?keys=*&fields=image_thumbnail&fields=titles&fields=id&fields=production&fields=dimensions&fields=current_location_name&fields=production_dates_notes&fields=labels&filters=[image_hq:true],[object_names:painting],[public_domain:true]&offset=${
        offset + rowsPerPage
      }&rows=${rowsPerPage}&lang=en`
    );
  }

  function handlePreviousPage() {
    setOffset((prevOffset) => prevOffset - rowsPerPage);
    mutate(
      `https://api.smk.dk/api/v1/art/search/?keys=*&fields=image_thumbnail&fields=titles&fields=id&fields=production&fields=dimensions&fields=current_location_name&fields=production_dates_notes&fields=labels&filters=[image_hq:true],[object_names:painting],[public_domain:true]&offset=${
        offset - rowsPerPage
      }&rows=${rowsPerPage}&lang=en`
    );
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        artworks={artworks}
        onHandlePreviousPage={handlePreviousPage}
        onHandleNextPage={handleNextPage}
        offset={offset}
        rowsPerPage={rowsPerPage}
      />
    </>
  );
}

//
//         `https://api.smk.dk/api/v1/art/search/?keys=*&fields=image_thumbnail&fields=titles&fields=id&fields=production&fields=dimensions&fields=current_location_name&fields=production_dates_notes&fields=labels&filters=[image_hq:true],[object_names:painting],[public_domain:true]&offset=${
//           offset + rowsPerPage
//         }&rows=${rowsPerPage}&lang=en`
