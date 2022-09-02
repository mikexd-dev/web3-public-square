import React, { lazy, Suspense } from "react";
import styled from "styled-components";

import kishoreImg from "../../assets/kishore-round.png";
import chuckImg from "../../assets/chuck-round.png";
import minaImg from "../../assets/mina-round.png";
import guangImg from "../../assets/guangyi-round.png";
import futureImg from "../../assets/future-round.png";
import saisonImg from "../../assets/Saison Capital.png";
import monkeDAOImg from "../../assets/MonkeDAO.jpeg";
import gitcoinImg from "../../assets/gitcoin-round.png";
import Loading from "../Loading";
// import ConfettiComponent from '../Confetti';
import Scene from "../Scene";

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

const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <ImageDiv src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
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
        <GradientText> Speakers & Friends </GradientText>
      </Container>

      <Container>
        <MemberComponent
          img={kishoreImg}
          name="Kishore Bhatia"
          position="Core Technology Contributor, Superscrypt"
        />
        <MemberComponent
          img={chuckImg}
          name="Chuck Lam"
          position="Blockchaintel"
        />
        <MemberComponent img={minaImg} name="Mina Foundation" position="" />
        <MemberComponent
          img={guangImg}
          name="Guang-yi"
          position="Ethereum Foundation"
        />
        <MemberComponent
          img={futureImg}
          name="Jeremy"
          position="MonkeDAO & Gitcoin"
        />
        {/* <MemberComponent img={saisonImg} name="Saison Capital" position="" /> */}
        <MemberComponent img={monkeDAOImg} name="MonkeDAO" position="" />
        <MemberComponent img={gitcoinImg} name="Gitcoin" position="" />
        {/* <MemberComponent img={img5} name="DEATHSTROKE" position="artist" />
        <MemberComponent
          img={img6}
          name="LAZY KONG"
          position="social media manager"
        />
        <MemberComponent
          img={img7}
          name="CYBER PUNK"
          position="Blockchain Specialist"
        />
        <MemberComponent img={img8} name="MONK" position="Web3 Developer" />
        <MemberComponent img={img9} name="BANANA" position="Graphic Designer" /> */}
      </Container>
    </Section>
  );
};

export default Team;
