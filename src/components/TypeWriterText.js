import React from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    // text-transform: uppercase;
    // font-family: "Akaya Telivigala", cursive;
    color: #f89056;
  }
  // .text-3 {
  //   color: #f89056;
  // }
  // .text-2 {
  //   color: #fbdc84;
  // }
  // .text-1 {
  //   color: #fbdcbb;
  // }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxxl};
    width: 80%;
  }
  @media (max-width: 48em) {
    // align-self: center;
    // text-align: center;
  }
  @media (max-width: 30em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const SubTitleXXXS = styled.h4`
  font-size: ${(props) => props.theme.fontxxxs};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  font-weight: 400;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxxs};
  }

  // @media (max-width: 48em) {
  //   align-self: center;
  //   text-align: center;
  // }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  font-weight: 550;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  // @media (max-width: 48em) {
  //   align-self: center;
  //   text-align: center;
  // }
`;

const SubTitleXXS = styled.h3`
  font-size: ${(props) => props.theme.fontmd};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  font-weight: 400;
  // margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  // @media (max-width: 48em) {
  //   align-self: center;
  //   text-align: center;
  // }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  // background-color: lightpink;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 3rem;

  #col1 {
    width: 20%;
  }

  #col2 {
    width: 20%;
  }

  @media (max-width: 48em) {
    width: 100%;
    // background-color: red;
    flex-wrap: wrap;
    align-items: flex-start;
    row-gap: 30px;

    #col1 {
      width: 40%;
    }

    #col2 {
      width: 50%;
    }
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media (max-width: 48em) {
  }
`;

// const ButtonContainer = styled.div`
//   width: 100%;
//   align-self: flex-end;

//   @media (max-width: 48em) {
//     align-self: center;
//     text-align: center;

//     button {
//       margin: 0 auto;
//     }
//   }
// `;

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;

  @media (max-width: 30em) {
    width: 15%;
  }
`;

const CountdownDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;

  @media (max-width: 30em) {
    width: 100px;
  }
`;

const TypeWriterText = () => {
  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <CountdownDiv>
          <CountdownContainer>
            <SubTitleXXXS>Days</SubTitleXXXS>
            <SubTitleXXS>{days}</SubTitleXXS>
          </CountdownContainer>
          <CountdownContainer>:</CountdownContainer>
          <CountdownContainer>
            <SubTitleXXXS>Hours</SubTitleXXXS>
            <SubTitleXXS>{hours}</SubTitleXXS>
          </CountdownContainer>
          <CountdownContainer>:</CountdownContainer>
          <CountdownContainer>
            <SubTitleXXXS>Minutes</SubTitleXXXS>
            <SubTitleXXS>{minutes}</SubTitleXXS>
          </CountdownContainer>
          <CountdownContainer>:</CountdownContainer>
          <CountdownContainer>
            <SubTitleXXXS>Seconds</SubTitleXXXS>
            <SubTitleXXS>{seconds}</SubTitleXXS>
          </CountdownContainer>
        </CountdownDiv>
      );
    }
  };

  return (
    <>
      <Title>
        Curated space in Singapore for talents to
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text-1">learn, </span>`)
              .pauseFor(500)
              .typeString(`<span class="text-2"> build </span>`)
              .pauseFor(500)
              .typeString(`<span class="text-3">and network</span>`)
              .pauseFor(500)
              .start();
          }}
        />
      </Title>
      <RowContainer>
        <ColumnContainer id="col1">
          <SubTitleXXS>Where</SubTitleXXS>
          <SubTitle style={{ width: "100%" }}>
            WeWork @ 21 Collyer Quay
          </SubTitle>
          <SubTitleXXS>Business Centre & Auditorium</SubTitleXXS>
        </ColumnContainer>
        <ColumnContainer id="col2">
          <SubTitleXXS>When</SubTitleXXS>
          <SubTitle style={{ width: "100%" }}>Sept 27, 2022</SubTitle>
          <Countdown date={"2022-09-27T18:00:00"} renderer={renderer} />
        </ColumnContainer>
        <ColumnContainer>
          <Button text="RSVP" link="https://lu.ma/qb6536tz" />
        </ColumnContainer>
      </RowContainer>
    </>
  );
};

export default TypeWriterText;
