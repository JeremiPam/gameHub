import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <Grid templateAreas={`'header header' 'nav main' 'nav main'`}>
        <GridItem area={"header"}>
          <NavBar />
        </GridItem>
        <GridItem bg="yellow" area={"nav"}>
          nav
        </GridItem>
        <GridItem bg="greenyellow" area="main">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
