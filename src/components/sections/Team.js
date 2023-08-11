import React, { lazy, Suspense } from "react";
import styled from "styled-components";

import kishoreImg from "../../assets/Superscrypt logo.jpeg";
import ethImg from "../../assets/eth-foundation.png";
import monkeDAOImg from "../../assets/MonkeDAO.jpeg";
import menyalaImg from "../../assets/menyala.png";
import gitcoinImg from "../../assets/gitcoin-round.png";
import minaImg from "../../assets/mina-round.png";
import polygonImg from "../../assets/polygon.png";
import affinidiImg from "../../assets/affinidi.png";
import blackImg from "../../assets/blackdog.png";
import ecoImg from "../../assets/eco.png";
import singporeImg from "../../assets/singpore.png";
import Loading from "../Loading";

const ConfettiComponent = lazy(() => import("../Confetti"));

const Section = styled.section`
  min-height: 120vh;
  width: 100vw;
  background-color: ${(props) => props.theme.background};
  // background-color: black;
  position: relative;
  overflow: hidden;
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
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;

  backdrop-filter: blur(4px);

  // border: 2px solid ${(props) => props.theme.text};
  // border-radius: 20px;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 30em) {
    width: 70vw;
  }
`;

const GradientText = styled.div`
  width: 80%;
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

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  // background-color: ${(props) => props.theme.carouselColor};
  // border: 1px solid ${(props) => props.theme.text};
  padding: 1rem;

  border-radius: 40%;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  text-align: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  font-weight: 400;
`;

const ImageDiv = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 50%;
`;

const MemberComponent = ({ img, name = " ", position = " ", link = "" }) => {
  return (
    <Item>
    <ImageContainer>
      <ImageDiv src={img} alt={name} />
    </ImageContainer>
    <Name>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      ) : (
        name
      )}
    </Name>
    <Position>{position}</Position>
  </Item>
  );
};

const Team = () => {
  return (
    <Section id="team">
      <Suspense fallback={<Loading />}>
        <ConfettiComponent />{" "}
      </Suspense>
      <Container>
        <GradientText> Friends of Public Square </GradientText>
      </Container>

      <Container>
      <MemberComponent
  img={minaImg}
  name="Mina Foundation"
  position=""
  link="https://minaprotocol.com/" // Replace with the actual link
/>
<MemberComponent
  img={kishoreImg}
  name="Superscrypt"
  position=""
  link="https://www.superscrypt.xyz/" // Replace with the actual link
/>
        <MemberComponent img={affinidiImg} name="Affinidi" position="" 
        link="https://www.affinidi.com/"
         />
        <MemberComponent img={gitcoinImg} name="Gitcoin" position="" link="https://www.gitcoin.co/" />
        <MemberComponent img={menyalaImg} name="Menyala" position="" link="https://www.menyala.com/" />
        <MemberComponent img={monkeDAOImg} name="MonkeDAO" position="" link="https://monkedao.io/" />
        <MemberComponent img={polygonImg} name="Polygon" position="" link="https://polygon.technology/" />
        <MemberComponent img={menyalaImg} name="Economics Design" position="" link="https://economicsdesign.com/" />
        <MemberComponent img={blackImg} name="Blockdaemon" position="" link="https://www.blockdaemon.com/" />
        <MemberComponent img={ecoImg} name="ETH Singapore" position="" link="https://www.ethereumsingapore.com/" />
        {/* <MemberComponent img={ethImg} name="Ethereum Foundation" position="" /> */}
      </Container>
    </Section>
  );
};

export default Team;
