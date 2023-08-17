import React, { lazy, Suspense } from "react";
import styled from "styled-components";

import img1 from "../../assets/Nfts/bighead.svg";
import img2 from "../../assets/Nfts/bighead-1.svg";
import img3 from "../../assets/Nfts/bighead-2.svg";
import img4 from "../../assets/Nfts/bighead-3.svg";
import img5 from "../../assets/Nfts/bighead-4.svg";
import img6 from "../../assets/Nfts/bighead-5.svg";
import img7 from "../../assets/Nfts/bighead-6.svg";
import img8 from "../../assets/Nfts/bighead-7.svg";
import img9 from "../../assets/Nfts/bighead-8.svg";
import Loading from "../Loading";
// import ConfettiComponent from '../Confetti';
import Scene from "../Scene";

const ConfettiComponent = lazy(() => import("../Confetti"));

const Section = styled.section`
  min-height: 60vh;
  width: 100vw;
  background-color: ${(props) => props.theme.background};
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 100px;
  left: 200px;
  width: 500px;
  height: 500px;
  background: linear-gradient(
    180deg,
    rgba(249, 228, 204, 0.3) 10%,
    rgba(255, 97, 0, 0.3) 100%
  );
  filter: blur(339.25px);
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 80%;
  margin: 3rem auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;

const AgendaContainer = styled.div`
  width: 50%;
  padding: 5rem 3rem;
  color: ${(props) => props.theme.body};
  margin: 2rem 0;
  position: relative;
  z-index: 5;

  backdrop-filter: blur(4px);

  background: rgba(255, 249, 235, 0.1);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media (max-width: 70em) {
    width: 100%;
  }

  @media (max-width: 48em) {
    width: 80%;
  }

  @media (max-width: 30em) {
    width: 70%;
  }
`;

const GradientText = styled.div`
  width: 30%;
  // padding: 1rem 0;
  background: linear-gradient(-45deg, #f89056, #fbdc84, #fbdcbb);
  background-size: 300%;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animated_text 10s ease-in-out infinite;
  -moz-animation: animated_text 10s ease-in-out infinite;
  -webkit-animation: animated_text 10s ease-in-out infinite;
  margin: 2rem 0rem;
  position: relative;
  z-index: 5;
  text-align: left;

  backdrop-filter: blur(4px);

  @keyframes animated_text {
    0% {
      background-position: 0px 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0px 50%;
    }
  }

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 70em) {
    width: 90%;
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    width: 90%;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  color: #ffecd5;
  font-weight: 500;
  width:89%;
  padding-left:20px;
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const Text = styled.h6`
font-size: ${(props) => props.theme.fontlg};
color: #fff;
font-weight: 500;
width:89%;
padding-left:20px;
@media (max-width: 48em) {
  font-size: ${(props) => props.theme.fontmd};
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const Time = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  width:81px;
  color: ${(props) => props.theme.text};
  font-weight: 400;
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Team = () => {
  return (
    <Section id="team">
      {/* <Scene /> */}
      <BackgroundImage />
      <Container>
        <GradientText> Agenda </GradientText>
        <AgendaContainer>
          <Item>
            {/* <Time>6:00 - 6:30 pm</Time>
            <Name>Check-in</Name> */}
            <Time>6:30 pm</Time>
            <Name>Check-in at Level 2 Wework Reception for Drinks/Food</Name>
          </Item>
          <Item>
            {/* <Time>6:30 - 7:00 pm</Time>
            <Name>Welcome & keynote</Name> */}
           <Time>7:00pm</Time>
            <Name>Opening</Name>

          </Item>
          <Item>
            <Time>7:15pm</Time>
            <Name>Session 1</Name>
          </Item>
          <Item>
            <Time></Time>
            <Text>Track 1 Tokenomics: How to design a sustainable token-based economy from early stage to growth</Text>
          </Item>
          <Item>
            <Time></Time>
            <Text>Track 2 Zero Knowledge: Use cases and ZKEVM</Text>
          </Item>

          <Item>
            <Time>8:00pm</Time>
            <Name>Break</Name>
          </Item>
          <Item>
            <Time>8:15pm</Time>
            <Name>Session 2</Name>
          </Item>
          <Item>
            <Time></Time>
            <Text>Track 3 Building for the Future: Unraveling Wallets, Intents, and MEV in next wave adoption</Text>
          </Item>
          <Item>
            <Time></Time>
            <Text>Track 4 MEV: A deep dive into blockspace market structure</Text>
          </Item>
         
          <Item>
            <Time>9:00pm</Time>
            <Name>Drinks/Food/Mingle</Name>
          </Item>
        </AgendaContainer>
      </Container>
    </Section>
  );
};

export default Team;
