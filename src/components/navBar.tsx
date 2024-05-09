import React from "react";
import logo from "../assets/logo.webp";
import { HStack, Img, Input } from "@chakra-ui/react";
import ThemeSwitch from "./ThemeSwitch";
const NavBar = () => {
  return (
    <>
      <HStack>
        <Img src={logo} boxSize={"60px"}></Img>
        <Input placeholder="Search games"></Input>
        <ThemeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
