import React from "react";
import { Search } from "../Search";
import { Bar, Homelink, OptionsCont, PagesLinks } from "./Navbarstyles";

const NavBar = () => {
  return (
    <Bar>
      <Homelink to="/">Cinema Distrital</Homelink>
      <OptionsCont>
        <PagesLinks to="/">Confiteria</PagesLinks>
        <PagesLinks to="login">Registrarme</PagesLinks>
        <Search></Search>
      </OptionsCont>
    </Bar>
  );
};

export default NavBar;
