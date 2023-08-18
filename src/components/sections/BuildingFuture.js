import React, { lazy, Suspense, useEffect } from "react";
import styled, { keyframes } from "styled-components";
// import CoverVideo from '../CoverVideo'
// import TypeWriterText from '../TypeWriterText'
import AlexImg from "../../assets/alex.png";
import AndrewImg from "../../assets/andrew.png";
import MarryImg from "../../assets/marry.png";
import Loading from "../Loading";
import Navigation from "../Navigation";
import { useMediaQuery } from "react-responsive";
const CoverVideo = lazy(() => import("../CoverVideo"));

//TODO:
const Section = styled.section`
  min-height: ${(props) => `calc(90vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;

  background: linear-gradient(300deg, #afc6ff, #c1d2f9, #afc6ff);
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

const Containerfluid = styled.div`
  width: 100%;
  min-height: 70vh;
  margin: 0 auto;
  // background-color: lightblue;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 64em) {
    width: 100%;
  }
  @media (max-width: 48em) {
    width: 100%;
  }
`;

const CoverNav = styled.div`
  padding-top: 0px;
  padding-bottom: 40px;
  margin-top: -40px;
`;

const Mainheading = styled.div`
  width: 70%;
  background: #5b8aff;
  padding: 60px 0px;
  color: rgb(88, 21, 0);
  text-align: left;
  font-size: 8em;
  font-style: normal;
  font-weight: 700;
  border-radius: 106.804px;
  padding: 20px 80px;
  @media (max-width: 90.625em) {
    font-size: 5em;
  }

  @media (max-width: 85em) {
    font-size: 5em;
    padding: 50px 30px;
    border-radius: 40px;
    margin-top: -20px;
  }
  @media (max-width: 64em) {
    font-size: 4.5em;
  }
  @media (max-width: 48em) {
    font-size: 3.5em;
    border-radius: 46.804px;
  }
  @media (max-width: 42.5em) {
    font-size: 2em;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 16.804px;
  }
`;
const MainCoverText = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: center;
  width: 100%;
  margin-top: 0;
`;
const Subheading = styled.div`
width: 100%;
font-style: normal;
-webkit-box-pack: end;
justify-content: flex-end;
flex-wrap: wrap;
box-sizing: border-box;
}

`;
const SubheadingText = styled.div`
  float: right;
  -webkit-box-pack: end;
  justify-content: flex-end;
  width: 88%;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
  padding-left: 120px;
  color: rgb(255, 255, 255);
  font-size: 6rem;
  box-sizing: border-box;
  max-width: 100%;
  padding-top: 52px;
  padding-bottom: 52px;
  background: rgb(91, 138, 255);
  border-radius: 300px 0px 0px 300px;
  font-weight: 400;
  @media (max-width: 90.625em) {
    font-size: 4em;
  }

  @media (max-width: 85em) {
    font-size: 3em;
  }
  @media (max-width: 64em) {
    font-size: 3em;
  }
  @media (max-width: 48em) {
    font-size: 2em;
    padding: 49px 30px;
  }
  @media (max-width: 42.5em) {
    font-size: 1.5em;
  }
`;
const Extraheight = styled.div`
  height: 100px;
`;
const ClientInformation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: -25px;
  width: 100%;
  align-items: center;
  @media (max-width: 42.5em) {
    margin-top: 17px;
  }
`;
const MainCoverClient = styled.div`
  display: flex;
  flex-direction: row;
  /* padding: 0px 16px; */
  justify-content: space-between;
  width: 100%;
  @media (max-width: 36.25em) {
    display: block;
  }
`;
const ImageContainer = styled.div`
  background-color: rgb(91, 138, 255);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 50px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  @media (max-width: 42.5em) {
    padding: 20px;
  }
  img {
    width: 100%;
    height: auto;
  }
`;
const ClienName = styled.div`
  color: #581500;
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 11px;
  @media (max-width: 85em) {
    font-size: 2em;
  }
  @media (max-width: 64em) {
    font-size: 1.5em;
  }
  @media (max-width: 42.5em) {
    font-size: 1.5em;
  }
`;
const ClientDesignation = styled.div`
  color: rgb(88, 21, 0);
  font-size: 2.5em;
  font-weight: 400;
  margin-bottom: 11px;
  font-style: italic;
  min-height: 90px;
  align-items: center;
  display: flex;
  @media (max-width: 85em) {
    font-size: 2em;
  }
  @media (max-width: 64em) {
    font-size: 1.5em;
    min-height: 70px;
  }
  @media (max-width: 42.5em) {
    font-size: 1.5em;
    min-height: auto;
  }
`;
const ClientExtraInfo = styled.div`
  color: #581500;
  font-size: 2.5em;
  font-weight: 400;
  @media (max-width: 85em) {
    font-size: 2em;
  }
  @media (max-width: 64em) {
    font-size: 1.5em;
  }
  @media (max-width: 42.5em) {
    font-size: 1.5em;
  }
`;
const BackgroundCanvas = styled.canvas``;

const Economicdesign = () => {
  useEffect(() => {}, []);

  return (
    <Section id="Economicdesign">
      <CoverNav>
        <Navigation />
      </CoverNav>
      <Container>
        <Containerfluid>
          <MainCoverText>
            <Mainheading>Building for the Future</Mainheading>
          </MainCoverText>
          <Subheading>
            <SubheadingText>
              Unraveling Wallets, Intents, and MEV in next wave adoption
            </SubheadingText>
          </Subheading>
          <MainCoverClient>
            <ClientInformation>
              <ImageContainer>
                <img src={AlexImg} alt="Lisa" />
              </ImageContainer>
              <ClienName>Alex Kim</ClienName>
              <ClientDesignation>Business Development</ClientDesignation>
              <ClientExtraInfo>Blockdaemon</ClientExtraInfo>
            </ClientInformation>
            <ClientInformation>
              <ImageContainer>
                <img src={AndrewImg} alt="Lisa" />
              </ImageContainer>
              <ClienName>Andrew Vranjes </ClienName>
              <ClientDesignation>VP of Sales and GM</ClientDesignation>
              <ClientExtraInfo>Blockdaemon</ClientExtraInfo>
            </ClientInformation>
            <ClientInformation>
              <ImageContainer>
                <img src={MarryImg} alt="Lisa" />
              </ImageContainer>
              <ClienName>Mary Shann</ClienName>
              <ClientDesignation>
                Senior Director of Strategic Operations
              </ClientDesignation>
              <ClientExtraInfo>Blockdaemon</ClientExtraInfo>
            </ClientInformation>
          </MainCoverClient>
        </Containerfluid>
        <Extraheight></Extraheight>
      </Container>
    </Section>
  );
};

export default Economicdesign;
