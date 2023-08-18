import React, { lazy, Suspense, } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link, Navigate } from 'react-router-dom';
import smartContractImage from "../../assets/smart-contract.png";
import minaImage from "../../assets/Mina Logo.jpeg";
import web3DesignImage from "../../assets/design-web3.png";
import futureOfWorkImage from "../../assets/future-of-work.png";
import Loading from "../Loading";



// import ConfettiComponent from '../Confetti';
import { useMediaQuery } from "react-responsive";
import Tokenomics from "../../pages/Tokenomics";
const Scene = lazy(() => import("../Scene"));

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
 background-color: ${(props) => props.theme.background};
 // background-color: red;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: #FFF;
  display: flex;
font-size: 3em;
    text-transform: capitalize;
    color:${props => props.color || props.theme.color};;
    display: flex;
    -webkit-box-pack: end;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 75%;
    background-color: rgb(255, 148, 91);
    /* align-self: flex-start; */
    padding: 29px 51px;
    border-radius: 72px;
    height: 160px;
    float: right;
    margin-right: -28px;
    @media (max-width: 117.75em) { 
      font-size:3em;
    }
    @media (max-width: 90.625em) { 
      font-size: 3em; 
     }
     
     @media (max-width: 85em) {
      font-size:3em;
        padding: 50px 30px;
        border-radius: 40px;
        margin-top: -20px;
        margin-right: 0px;
        margin-left: 0px;
     }
     @media (max-width: 64em) {
       font-size:2em;
     }
     @media (max-width:48em) {
       font-size: 2em;
       border-radius: 46.804px;
     }
     @media (max-width: 42.5em) {
      font-size: 2em;
     }
`;
const Title2 = styled.h1`
//font-size: ${(props) => props.theme.fontxxl};
font-size: 3em;
  text-transform: capitalize;
  color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px -28px 0px 0px;
  width: 75%;
  background-color: #5B8AFF;
  padding: 37px 51px;
  border-radius: 72px;
  height: 160px;
  /* float: right; */
  margin: 0 auto;
  @media (max-width: 117.75em) { 
    font-size:3em;
  }
  @media (max-width: 90.625em) { 
    font-size: 3em; 
   }
   
   @media (max-width: 85em) {
    font-size:3em;
      padding: 50px 30px;
      border-radius: 40px;
      margin-top: -20px;
   }
   @media (max-width: 64em) {
     font-size:2em;
   }
   @media (max-width:48em) {
     font-size: 2em;
     border-radius: 46.804px;
   }
   @media (max-width: 42.5em) {
    font-size: 2em;
   }
`;
const Title1 = styled.h1`
  //font-size: ${(props) => props.theme.fontxxl};
  font-size: 3em;
    text-transform: capitalize;
    color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px -28px 0px 0px;
    width: 72%;
    background-color: rgb(231, 85, 255);
    padding: 37px 51px;
    border-radius: 72px;
    height: 160px;
    /* float: right; */
    margin: 0 auto;
    @media (max-width: 117.75em) { 
      font-size:3em;
    }
 
    @media (max-width: 90.625em) { 
      font-size: 3em; 
     }
     
     @media (max-width: 85em) {
      font-size:3em;
        padding: 50px 30px;
        border-radius: 40px;
        margin-top: -20px;
     }
     @media (max-width: 64em) {
       font-size:2em;
     }
     @media (max-width:48em) {
       font-size: 2em;
       border-radius: 46.804px;
     }
     @media (max-width: 42.5em) {
      font-size: 2em;
     }
`;
const Title3 = styled.h1`
font-size: 3em;
text-transform: capitalize;
color: rgb(255, 255, 255);
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
width: fit-content;
margin: 0px 30px;
background-color: rgb(255, 114, 106);
padding: 30px 51px;
border-radius: 85px;
height: 160px;
}
@media (max-width: 90.625em) { 
  font-size: 3em; 
 }
 
 @media (max-width: 85em) {
  font-size:3em;
    padding: 50px 30px;
    border-radius: 40px;
    margin-top: -20px;
 }
 @media (max-width: 64em) {
   font-size:2em;
   height: 120px;
   width: 180px;
   margin-bottom: 10px;
 }
 @media (max-width:48em) {
   font-size: 2em;
   border-radius: 46.804px;
 }
 @media (max-width: 42.5em) {
  font-size: 2em;
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
background-color: ${props => props.backgroundColor || props.theme.background};
  width: 45%;
  min-height:610px;
  padding: 1rem 0 3rem;
  color: ${(props) => props.theme.body};
  margin: 2rem 0rem;
  position: relative;
  z-index: 5;
overflow:hidden;
  backdrop-filter: blur(4px);
  border-radius: 20px;

  &:hover {
    img {
      transform: translateY(-1rem) scale(1.1);
    }
  }

  @media (max-width: 48em) {
    width: 100%;
  }

  @media (max-width: 30em) {
    width:  100%;
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
  // font-size: ${(props) => props.theme.fontlg};
  font-size:  2.6em;
  text-align: left;
  color: #581500;
  margin-top: 1rem;
  font-weight:400;
  margin-bottom: 30px;
  margin-top: 21px;
  padding-left:15px;
`;

const Subtitle = styled.h2`
  // font-size: ${(props) => props.theme.fontmd};
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // text-transform: capitalize;
  // float:left;
 
  // color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  // font-weight: 400;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-transform: initial;
  float: left;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  border-radius: 0px 90px 90px 0px;
  background: rgb(255, 148, 91);
  padding: 30px 0px;
  margin-left: 0px;
  font-size: 2.5rem;
  width: 70%;
  line-height: 46px;
  @media (max-width: 90.625em) { 
    font-size: 2em; 
   }
   
   @media (max-width: 85em) {
     font-size: 2em;
     width: 95%;
     padding-left: 0;
     padding-top: 12px;
     padding-bottom: 12px;
     line-height: 36px;
     padding-right: 12px;
   }
   @media (max-width: 64em) {
    font-size: 1.5em;
    line-height: 27px;
   }
   @media (max-width:48em) {

    font-size: 1.5em;
    line-height: 27px;
    
   }
   @media (max-width: 42.5em) {
     font-size: 1.5em;
     width:100%;
     font-size: 1.5em;
     line-height: 27px;
     padding: 30px 30px;
   }
`;
const Subtitle2 = styled.h2`
  // font-size: ${(props) => props.theme.fontmd};
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // text-transform: capitalize;
  // float:left;
 
  // color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  // font-weight: 400;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-transform: initial;
  float: left;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  border-radius: 0px 90px 90px 0px;
  background: rgb(91, 138, 255);
  padding: 30px 0px;
  margin-left: 0px;
  font-size: 2.5rem;
  width: 80%;
  line-height: 46px;
  padding-left: 40px;
  @media (max-width: 90.625em) { 
    font-size: 2em; 
   }
   
   @media (max-width: 85em) {
     font-size: 2em;
     width: 95%;
     line-height: 46px;
     padding-left: 20px;
     padding-top: 12px;
     padding-bottom: 12px;
   }
   @media (max-width: 64em) {
    font-size: 1.5em;
    line-height: 27px;
}
   }
   @media (max-width:48em) {
     font-size: 2em;
     padding: 49px 30px;
     font-size: 1.5em;
    line-height: 27px;
}
   }
   @media (max-width: 42.5em) {
     font-size: 1.5em;
     width:100%;
     padding: 30px 30px;
   }
`;
const Subtitle1 = styled.h2`
  // font-size: ${(props) => props.theme.fontmd};
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // text-transform: capitalize;
  // float:left;
 
  // color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  // font-weight: 400;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-transform: initial;
  float: right;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  border-radius: 70px 0px 0px 70px;
  background: rgb(231, 85, 255);
  padding: 69px 0px;
  margin-left: 0px;
  font-size: 2.5rem;
  width: 70%;
  line-height: 46px;
  @media (max-width: 90.625em) { 
    font-size: 2em; 
   }
   
   @media (max-width: 85em) {
     font-size: 2em;
     width: 95%;
     line-height: 46px;
     padding-left: 20px;
     padding-top: 12px;
     padding-bottom: 12px;
   }
   @media (max-width: 64em) {
     font-size: 2em;
     font-size: 1.5em;
    line-height: 27px;
}
   }
   @media (max-width:48em) {
     font-size: 2em;
     padding: 49px 30px;
     font-size: 1.5em;
    line-height: 27px;
}
   }
   @media (max-width: 42.5em) {
     font-size: 1.5em;
     width:100%;
     padding: 30px 30px;
   }
`;
const Subtitle3 = styled.h2`
  // font-size: ${(props) => props.theme.fontmd};
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // text-transform: capitalize;
  // float:left;
 
  // color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  // font-weight: 400;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-transform: initial;
  float: inherit;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  border-radius: 70px;
  background: rgb(255 114 106);
  padding: 69px 0px;
  margin-left: 0px;
  font-size: 2.5rem;
  width: fit-content;
  line-height: 46px;
  /* text-align: center; */
  padding-left: 80px;
  @media (max-width: 90.625em) { 
    font-size: 2em; 
   }
   
   @media (max-width: 85em) {
     font-size: 2em;
     width: 95%;
     line-height: 46px;
     padding-left: 20px;
     padding-top: 12px;
     padding-bottom: 12px;
   }
   @media (max-width: 64em) {
    font-size: 1.5em;
    line-height: 27px;
}
   }
   @media (max-width:48em) {
    font-size: 1.5em;
    line-height: 27px;
}
   }
   @media (max-width: 42.5em) {
     font-size: 1.5em;
     width:100%;
     padding: 30px 30px;
   }
`;
const MemberComponent = ({ title = " ", name = " ", subtitle = " ", backgroundColor = "" }) => {

  return (
    <Item backgroundColor={backgroundColor}>
      <Name>{name}</Name>
     {/* <Title as="a" href="/Tokenomics">{title}</Title> */}
    
    

    {/* <a href={Tokenomics}  rel="noreferrer"> */}
    {/* <Link onClick={()=>{<Navigate to ='https://chat.openai.com/' />}}><Title>{title}</Title></Link> */}
    <Link to="/economicdesign"><Title>{title}</Title></Link>
        
    {/* </a> */}
    <Subtitle>{subtitle}</Subtitle>
    </Item>
  );
};

const MemberComponent1 = ({ title1 = " ", name = " ", subtitle1 = " ", backgroundColor = "", color = "" }) => {
  return (
    <Item backgroundColor={backgroundColor}>
      <Name>{name}</Name>
      <Link to="/zeroKnowledge"> <Title1 color={color}>{title1}</Title1></Link>
      <Subtitle1>{subtitle1}</Subtitle1>
    </Item>
  );
};
const MemberComponent2 = ({ title2 = " ", name = " ", subtitle2 = " ", backgroundColor = "", color = "" }) => {
  return (
    <Item backgroundColor={backgroundColor}>
      <Name>{name}</Name>
      <Link to="/Buildingfuture"> <Title2>{title2}</Title2></Link>
      <Subtitle2>{subtitle2}</Subtitle2>
    </Item>
  );
};
const MemberComponent3 = ({ title3 = " ", name = " ", subtitle3 = " ", backgroundColor = "", color = "" }) => {
  return (
    <Item backgroundColor={backgroundColor}>
      <Name>{name}</Name>
      <Link to="/mev"> <Title3>{title3}</Title3></Link>
      <Subtitle3>{subtitle3}</Subtitle3>
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
          <GradientText> Tracks </GradientText>
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
        {/* <MemberComponent
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
        /> */}
      <MemberComponent
      backgroundColor="#FFE4C9"
         name="Track #1"
         title="Tokenomics"
         subtitle="How to design a sustainable token-based economy from early stage to growth"
        />
        <MemberComponent1 
        backgroundColor="#F0DDFF"
         name="Track #2"
         title1="Zero Knowledge"
         subtitle1="Use cases and ZKEVM"
        />
         <MemberComponent2
      backgroundColor="#C1D2F9"
         name="Track #3"
         title2="Building for the Future"
         subtitle2="Unraveling Wallets, Intents, and MEV in next wave adoption"
        />
        <MemberComponent3
        backgroundColor="#FFBFC3"
         name="Track #4"
         title3="MEV"
         subtitle3="A deep dive into blockspace market structure"
        />
      </Container>
    </Section>
  );
};

export default Team;
