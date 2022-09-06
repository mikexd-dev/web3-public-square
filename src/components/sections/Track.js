import React, { lazy, Suspense } from "react";
import styled from "styled-components";

import smartContractImage from "../../assets/smart-contract.png";
import minaImage from "../../assets/Mina Logo.jpeg";
import web3DesignImage from "../../assets/design-web3.png";
import futureOfWorkImage from "../../assets/future-of-work.png";
import Loading from "../Loading";
// import ConfettiComponent from '../Confetti';
import { useMediaQuery } from "react-responsive";
const Scene = lazy(() => import("../Scene"));

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.background};
  // background-color: black;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin: 0rem auto 2rem auto;

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
    column-gap: 50px;
  }
`;

const Item = styled.div`
  width: 45%;
  padding: 1rem 0 3rem;
  color: ${(props) => props.theme.body};
  margin: 2rem 0rem;
  position: relative;
  z-index: 5;

  backdrop-filter: blur(4px);

  border: 2px solid #fbdcbb;
  border-radius: 20px;

  &:hover {
    img {
      transform: translateY(-1rem) scale(1.1);
    }
  }

  @media (max-width: 48em) {
    width: 40%;
  }

  @media (max-width: 30em) {
    width: 70vw;
  }
`;

const GradientText = styled.div`
  width: 30%;
  margin: 4rem 0 0 0;
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
  // margin: 2rem 0rem;
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
  width: 90%;
  margin: 0 auto;
  background-color: transparent;
  // border: 1px solid ${(props) => props.theme.text};
  padding: 1rem;

  cursor: pointer;

  img {
    width: 100%;
    height: 300px;
    transition: all 0.3s ease;
    border-radius: 20px;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  text-align: center;
  color: #fbdcbb;
  margin-top: 1rem;
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  font-weight: 400;
`;

const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const generateTop = () => {
    if (isDesktopOrLaptop) {
      return -10;
    }
    if (!isMobile && isTabletOrMobile & !isPortrait) {
      return -5;
    }

    if (!isMobile && isTabletOrMobile & isPortrait) {
      return -10;
    }

    if (isMobile) {
      return -10;
    }
  };

  const generateLeft = () => {
    if (isDesktopOrLaptop) {
      return 190;
    }

    if (!isMobile && isTabletOrMobile & !isPortrait) {
      return 150;
    }

    if (!isMobile && isTabletOrMobile & isPortrait) {
      return 90;
    }

    if (isMobile) {
      return 50;
    }
  };

  return (
    <Section id="tracks">
      <Suspense fallback={<Loading />}>
        <Container>
          <GradientText> Tracks</GradientText>
          {/* <Scene top={generateTop()} left={generateLeft()} /> */}
        </Container>
      </Suspense>

      {/* <div style={{ color: "white" }}>
        <h1>Device Test!</h1>
        {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
        {isBigScreen && <p>You have a huge screen</p>}
        {isTabletOrMobile && <p>You are a tablet</p>}
        {isMobile && <p>You are a mobile phone</p>}
        <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
        {isRetina && <p>You are retina</p>}
      </div> */}

      <Container>
        <MemberComponent
          img={smartContractImage}
          name="Smart Contract: From Hackathons to Production"
        />
        <MemberComponent
          img={minaImage}
          name="Introduction to Mina Protocol & ZK Programming"
        />
        <MemberComponent
          img={web3DesignImage}
          name="Rethinking Relationships between Regulator and Regulated"
        />
        <MemberComponent
          img={futureOfWorkImage}
          name="DAOs: The Future of Work"
        />
      </Container>
    </Section>
  );
};

export default Team;
