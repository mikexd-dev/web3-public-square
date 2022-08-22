import React, { lazy, Suspense, useEffect } from "react";
import styled, { keyframes } from "styled-components";
// import CoverVideo from '../CoverVideo'
// import TypeWriterText from '../TypeWriterText'
import RoundTextBlack from "../../assets/Rounded-Text-Black.png";
import Loading from "../Loading";
import Navigation from "../Navigation";

const CoverVideo = lazy(() => import("../CoverVideo"));
const TypeWriterText = lazy(() => import("../TypeWriterText"));

//TODO:
const Section = styled.section`
  min-height: ${(props) => `calc(90vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;

  background: linear-gradient(300deg, #f89056, #fbdc84, #f89056);
  background-size: 240% 240%;
  animation: gradient-animation 20s ease infinite;

  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Container = styled.div`
  width: 80%;
  min-height: 70vh;
  margin: 0 auto;
  // background-color: lightblue;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 80%;
  }
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: lightgreen;
`;

const rotate = keyframes`
100%{
  transform: rotate(1turn);
}
`;
const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 6rem;
  height: 6rem;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }
  @media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  }
  @media (max-width: 48em) {
    right: 1rem;
  }
`;

const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxl};

  @media (max-width: 64em) {
    width: 2rem;
    height: 2rem;
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const BackgroundCanvas = styled.canvas``;

const Home = () => {
  useEffect(() => {}, []);

  return (
    <Section id="home">
      <Navigation />
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <TypeWriterText />
          </Suspense>
        </Box>
        <Box>
          {/* <RowContainer>hello</RowContainer> */}

          {/* <Round>
            <Circle>&#x2193;</Circle>
            <img width={500} height={400} src={RoundTextBlack} alt="NFT" />
          </Round> */}
        </Box>
        {/* <Box>
          <Suspense fallback={<Loading />}>
            <CoverVideo />
          </Suspense>
        </Box> */}
      </Container>
    </Section>
  );
};

export default Home;
