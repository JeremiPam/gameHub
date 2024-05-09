import { Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode}>
        {" "}
      </Switch>
    </>
  );
};

export default ThemeSwitch;
