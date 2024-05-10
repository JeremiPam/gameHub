import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import MainBar from "./components/MainBar";
function App() {
  return (
    <>
      <Grid templateAreas={`'header header' 'nav main' 'nav main'`}>
        <GridItem area={"header"}>
          <NavBar />
        </GridItem>
        <GridItem area={"nav"}>
          <GenreList />
        </GridItem>
        <GridItem area="main">
          <MainBar />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
