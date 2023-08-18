import React, { lazy, Suspense, useEffect } from "react";
import styled, { keyframes } from "styled-components";
// import CoverVideo from '../CoverVideo'
// import TypeWriterText from '../TypeWriterText'
import LisaImg from "../../assets/jorod.png";
import Loading from "../Loading";
import Navigation from "../Navigation";
import { useMediaQuery } from "react-responsive";
const CoverVideo = lazy(() => import("../CoverVideo"));

//TODO:
const Section = styled.section`
  min-height: ${(props) => `calc(90vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;

  background: linear-gradient(300deg, #F0DDFF, #F2A4FF, #F0DDFF);
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
background-color: #E755FF;
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
width: auto;
height: auto;
padding: 50px;
border-top-right-radius: 40px;
border-bottom-right-radius: 40px;
width:650px;
height:650px;
@media (max-width: 85em) {
  padding: 30px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 420px;
  height: 420px;
}
@media (max-width: 64em) {
  padding: 30px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 320px;
  height: 320px;
}
@media (max-width: 42.5em) {
  padding: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 240px;
  height: 240px;
}
@media (max-width: 42.5em) {
  padding: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  height: 100%;
  margin-bottom: 12px;
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
  padding-bottom: 0px;
}
`;
const Title = styled.div`
color: #581500;
font-size: 3rem;
font-weight: 600;
@media (max-width: 85em) {
  font-size:2em;
}
@media (max-width: 64em) {
  font-size:2em;
}
@media (max-width: 42.5em) {
  font-size: 2em;
}
`;
const Designation = styled.div`
color: rgb(88, 21, 0);
    font-size: 3em;
    font-style: italic;
    @media (max-width: 85em) {
      font-size:2em;
    }
    @media (max-width: 64em) {
      font-size:2em;
    }
    @media (max-width: 42.5em) {
      font-size: 2em;
    }
`;
const Work = styled.div`
color: rgb(88, 21, 0);
    font-size: 3rem;
    @media (max-width: 85em) {
      font-size:2em;
    }
    @media (max-width: 64em) {
      font-size:2em;
    }
    @media (max-width: 42.5em) {
      font-size: 2em;
    }
`;
const MainCover = styled.div`
display: flex;
align-items: flex-end;
@media (max-width: 42.5em) {
  display: block;
}
`;
const Mainheading = styled.div`
width: 50%;
background: rgb(231, 85, 255);
padding: 60px 0px;
color: rgb(88, 21, 0);
text-align: left;
font-size: 8em;
font-style: normal;
font-weight: 700;
border-radius: 116.804px;
padding-left: 60px;
margin-top: -40px;
margin-left: 52px;
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
   font-size:4.1em;
 }
 @media (max-width:48em) {
   font-size: 3.5em;
   border-radius: 46.804px;
 }
 @media (max-width: 42.5em) {
  font-size: 2em;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 16.804px;
  width: 100%;
  margin-top: 10px;
  text-align: center;
  margin-left: 0;
 }
 
`;
const MainCoverText = styled.div`
display: flex;
justify-content: flex-start;
width: 100%;
//margin-top: -110px;

`;
const Subheading = styled.div`
width: 100%;
    font-style: normal;
    justify-content: flex-end;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
}

`;
const SubheadingText = styled.div`
float: right;
-webkit-box-pack: end;
justify-content: flex-end;
width: 70%;
-webkit-box-align: center;
align-items: center;
flex-wrap: wrap;
text-align: center;
padding-left: 150px;
color: rgb(255, 255, 255);
font-size: 6rem;
box-sizing: border-box;
max-width: 100%;
padding-top: 52px;
padding-bottom: 52px;
background: #e755ff;
font-weight: 500;
border-radius: 100px;
padding: 60px 60px;
@media (max-width: 90.625em) { 
  font-size: 4em; 
 }
 
 @media (max-width: 85em) {
   font-size: 3em;
 }
 @media (max-width: 64em) {
   font-size: 3em;
 }
 @media (max-width:48em) {
   font-size: 2em;
   padding: 49px 30px;
 }
 @media (max-width: 42.5em) {
   font-size: 1.5em;
   width:100%;
   padding-top:22px;
padding-bottom: 22px;
margin-top: 9px;
 }
`;
const Extraheight = styled.div`
height:100px;

`;


const BackgroundCanvas = styled.canvas``;

const ZeroKnowledge = () => {
  useEffect(() => {}, []);

  return (
    <Section id="ZeroKnowledge">
      <CoverNav><Navigation />
      </CoverNav>
      <Containerfluid>
        <MainCover>
      <ImageContainer>
          <img src={LisaImg} alt="Lisa" />
        </ImageContainer>
        <TextContent>
<Title>Jarrod Watts</Title>
<Designation> Developer relations engineer </Designation>
<Work>Polygon Labs</Work>
        </TextContent>
        </MainCover>
        <MainCoverText>
        <Mainheading>Zero Knowledge</Mainheading>
        </MainCoverText>
        <Subheading>
          <SubheadingText>
          Use cases and ZKEVM
          </SubheadingText>
        </Subheading>
      </Containerfluid>
      <Extraheight></Extraheight>
    </Section>
  );
};

export default ZeroKnowledge;
