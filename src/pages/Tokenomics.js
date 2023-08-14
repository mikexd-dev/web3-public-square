import React, { lazy, Suspense, useEffect, } from "react";
import styled from "styled-components";


//import Loading from "../components/Loading";
// import ConfettiComponent from '../Confetti';
import { useMediaQuery } from "react-responsive";
import Navigation from "../components/Navigation";
import Economicdesign from "../components/sections/Economicdesign";
import ZeroKnowledge from "../components/sections/ZeroKnowledge";
import Mev from "../components/sections/Mev";
import BuildingFuture from "../components/sections/BuildingFuture";
//const Scene = lazy(() => import("../components/Scene"));

// const BlackNavBar = styled(NavBar)`
//   background-color: black;
// `;




const Tokenomics = () => {
 

  return (
    <>

 
    <Economicdesign />
    </>
  );
};

export default Tokenomics;
