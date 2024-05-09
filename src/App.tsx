import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import navBar from "./components/navBar";
function App() {
  return (
    <>
      <Grid templateAreas={`'header header' 'nav main' 'nav main'`}>
        <GridItem bg="orange" area={"header"}></GridItem>
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
