import React, { lazy, Suspense, useEffect } from "react";
import styled, { keyframes } from "styled-components";
// import CoverVideo from '../CoverVideo'
// import TypeWriterText from '../TypeWriterText'
import LisaImg from "../../assets/mev.png";
import Loading from "../Loading";
import Navigation from "../Navigation";
import { useMediaQuery } from "react-responsive";
const CoverVideo = lazy(() => import("../CoverVideo"));

//TODO:
const Section = styled.section`
  min-height: ${(props) => `calc(90vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;

  background: linear-gradient(300deg, #ffbfc3, #ffbfc3, #ffbfc3);
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

const ImageContainer = styled.div`
  background-color: rgb(255, 114, 106);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 50px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 650px;
  height: 650px;
  @media (max-width: 64em) {
    width: 460px;
    height: 460px;
  }
  @media (max-width: 48em) {
    width: 350px;
    height: 350px;
  }
  @media (max-width: 42.5em) {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin-bottom: 11px;
  }
  img {
    width: 100%;
    height: auto;
  }
`;
const TextContent = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 130px;
padding-left: 22px;
@media (max-width: 42.5em) {
  padding-bottom: 60px;
    padding-left: 0;
}
}
`;
const Title = styled.div`
  color: rgb(88, 21, 0);
  font-size: 3rem;
  font-weight: 400;
  text-align: right;
  margin-right: 66px;
  @media (max-width: 1580px) {
    font-size: 2em;
    margin-right: 5px;
  }
  @media (max-width: 42.5em) {
    font-size: 1.5em;
  }
`;

const MainCover = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: 100%;
  flex-direction: row-reverse;
  margin-left: -68px;
  @media (max-width: 42.5em) {
    margin-left: 0px;
    justify-content: center;
  }
`;
const Mainheading = styled.div`
  width: 30%;
  background: rgb(255, 114, 106);
  color: rgb(88, 21, 0);
  text-align: center;
  font-size: 8em;
  font-style: normal;
  font-weight: 700;
  border-radius: 116.804px;
  margin-top: -80px;
  margin-left: 0px;
  padding: 101px 20px;
  margin-left: 92px;
  @media (max-width: 90.625em) {
    font-size: 5em;
  }

  @media (max-width: 85em) {
    font-size: 5em;
  }
  @media (max-width: 64em) {
    font-size: 4.5em;
    padding-top: 40px;
    padding-bottom: 40px;
    margin-top: -44px;
    border-radius: 49px;
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
    width: 100%;
    margin-left: 0px;
    margin-top: 0px;
  }
`;
const MainCoverText = styled.div`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: 100%;
  margin-left: 5%;
  @media (max-width: 42.5em) {
    margin-left: 0%;
  }
`;
const Subheading = styled.div`
width: 100%;
font-style: normal;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
overflow: hidden;
}

`;
const SubheadingText = styled.div`
  float: initial;
  -webkit-box-pack: end;
  justify-content: flex-end;
  width: 92%;
  flex-wrap: wrap;
  text-align: left;
  color: rgb(255, 255, 255);
  font-size: 6.7rem;
  box-sizing: border-box;
  max-width: 100%;
  background: rgb(255, 114, 106);
  font-weight: 500;
  border-radius: 450px;
  padding: 80px 140px;
  margin: 0px auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  @media (max-width: 90.625em) {
    font-size: 4em;
  }

  @media (max-width: 85em) {
    font-size: 3em;
  }
  @media (max-width: 64em) {
    font-size: 3em;
    padding: 40px 40px;
  }
  @media (max-width: 48em) {
    font-size: 2em;
    padding: 40px 40px;
  }
  @media (max-width: 42.5em) {
    font-size: 1.5em;
    width: 100%;
    margin-top: 11px;
  }
`;
const Extraheight = styled.div`
  height: 100px;
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

const BackgroundCanvas = styled.canvas``;

const ZeroKnowledge = () => {
  useEffect(() => {}, []);

  return (
    <Section id="ZeroKnowledge">
      <CoverNav>
        <Navigation />
      </CoverNav>
      <Container>
        <Containerfluid>
          <MainCover>
            <ImageContainer>
              <img src={LisaImg} alt="Lisa" />
            </ImageContainer>
            <TextContent>
              <Title>
                TBA
                <br /> Superscrypt
              </Title>
            </TextContent>
          </MainCover>
          <MainCoverText>
            <Mainheading>MEV</Mainheading>
          </MainCoverText>
          <Subheading>
            <SubheadingText>
              A deep dive into blockspace market structure
            </SubheadingText>
          </Subheading>
        </Containerfluid>
        <Extraheight></Extraheight>
      </Container>
    </Section>
  );
};

export default ZeroKnowledge;
