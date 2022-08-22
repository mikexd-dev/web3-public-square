import React, { useRef } from "react";
import styled from "styled-components";
import VideoLooper from "react-video-looper";
import mbsDrone from "../../assets/mbs-drone.mp4";
import nightview from "../../assets/nightview.png";

const Section = styled.section`
  width: 100vw;
  height: 25rem;
  position: relative;
  // border-top: 2px solid ${(props) => props.theme.text};
  // border-bottom: 2px solid ${(props) => props.theme.text};

  // background-image: ${(props) => `url(${props.backgroundImage})`};
  // background-repeat: no-repeat;
  // background-size: auto;
  // background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  @media (max-width: 48em) {
    height: 10rem;
    flex-direction: column;
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  img {
    width: 100%;
    height: auto;
  }

  // @media (max-width: 48em) {
  //   img {
  //     width: 10rem;
  //   }
  // }
`;
const Title = styled.h4`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  font-weight: 500;
  padding: 1rem 2rem;
  z-index: 50;
  width: 80%;
  line-height: 2.5rem;
  // background-color: lightyellow;

  text-shadow: 1px 1px 2px ${(props) => props.theme.body};

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontlg};
  }

  @media (max-width: 48em) {
    width: 80%;
    padding: 2rem 0;
    line-height: 1.5rem;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    // width: 80%;
    // padding: 2rem 0;
    // line-height: 1.5rem;
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const BtnContainer = styled.div`
  width: 35%;
  z-index: 50;

  display: flex;
  justify-content: flex-end;

  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`;
const JoinNow = styled.button`
  padding: 1.5rem 3rem;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 600;
  border: 1px solid ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  text-transform: capitalize;
  border-radius: 50px;
  align-self: center;

  @media (max-width: 48em) {
    padding: 1rem 2rem;
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 0.5rem 2rem;
  }

  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover:after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
  &:hover {
    /* background-color: ${(props) => `rgba(${props.theme.textRgba},0.7)`}; */
    transform: scale(0.9);
  }
`;

const VideoBg = styled.video`
  height: 100%;
  width: 100%;
`;

const BannerSG = () => {
  const ref = useRef(null);

  return (
    <Section ref={ref} id="about">
      <ImgContainer>
        <VideoBg autoPlay loop muted>
          <source src={mbsDrone} type="video/mp4" />
        </VideoBg>
        {/* <VideoLooper
          source={mbsDrone}
          isDebugMode={false}
          autoPlay={true}
          loopCount={100}
        /> */}
        {/* <img src={nightview} alt="The Weirdos" /> */}
      </ImgContainer>
      <Title>
        Beginning with our base in Singapore, Public Square seeks to cultivate,
        establish and create the most active and vibrant web3 Buidl community in
        South East Asia.
      </Title>
      {/* <BtnContainer>
        <JoinNow>Join Now</JoinNow>
      </BtnContainer> */}
    </Section>
  );
};

export default BannerSG;
