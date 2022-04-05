import React from "react";
import { useEffect, useState } from "react";
import { get } from "../../utils/httpClient";
import { HeroSection, ImageHero, ImageText, ImageTittle } from "./HeroStyles";

const Hero = ({ search }) => {
  return (
    <HeroSection>
      <ImageHero />
      <ImageTittle>Bienvenidos a Cinema Distrital</ImageTittle>
      <ImageText>Mira tus pelis favoritas</ImageText>
    </HeroSection>
  );
};

export default Hero;
