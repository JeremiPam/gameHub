import { useState } from "react";
import apiClient from "../services/api-client";
import { Box, Img, Text } from "@chakra-ui/react";

interface game {
  name: string;
  id: number;
  slug: string;
  background_image: string;
}

interface response {
  count: number;
  results: game[];
}

const MainBar = () => {
  const [games, setGames] = useState<game[]>([
    { name: "asd", id: 0, slug: "", background_image: "" },
  ]);
  apiClient
    .get<response>("/games")
    .then((res) => setGames(res.data.results))
    .catch((er) => {
      console.log(er);
    });
  {
  }
  return (
    <>
      {games.forEach((game) => {
        <Box>
          <Text>asdas</Text>
        </Box>;
      })}
    </>
  );
};

export default MainBar;
