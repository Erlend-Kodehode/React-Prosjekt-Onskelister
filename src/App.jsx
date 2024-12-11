import styled, { keyframes } from "styled-components";
import CardInfo from "./Card.jsx";
import { kidsWishlist } from "./wishlist.jsx";
import decoration from "/christmas-decoration-clipart.svg";
import spark from "/Star.png";
//TODO MEDIA QUERIES
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 1rem;
`;

const Title = styled.h1`
  font-family: "Mountains of Christmas", serif;
  color: #fef4e6;
  font-size: 4em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 85%;
`;

const CardBackground = styled.div`
  border-radius: 1rem;
  padding: 0.7rem;
  background-image: url("/Card_Background.png");
  position: relative;
`;

const DecorationImg = styled.img`
  position: absolute;
  top: -1em;
  right: 50%;
  transform: translate(50%);
  height: 18%;
`;

const Footer = styled.footer`
  width: 100vw;
  height: 20%;
  background-color: crimson;
`;

const SparkAnim = keyframes`
  0%{
    transform: scale(0);
  }

  10%{
    transform: scale(1);
  }

  15%{
    transform: scale(0.9);
  }

  35%{
    transform: scale(0);
  }
 
`;

const SparkImg = styled.img`
  transform: scale(0);
  animation: ${(props) => (props.$naughty ? "" : SparkAnim)} 1500ms linear
    infinite;
  height: 15%;
  position: absolute;
  top: -0.35em;
  left: -0.15em;
`;
//TODO subtle background image
const Card = styled.div`
  border: 2px solid ${(props) => (props.$naughty ? "#f1e8d6" : "#f7e268")};
  background-color: #f8f5ee;
  border-radius: 0.5rem;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: "Shantell Sans", cursive;
  h2 {
    font-weight: 400;
  }
  h3 {
    font-weight: 400;
  }
`;

let longestWishlist = 0;
kidsWishlist.forEach((kid) => {
  const listLength = kid.wishlist.length;
  longestWishlist = listLength > longestWishlist ? listLength : longestWishlist;
});

export default function App() {
  return (
    <>
      <Main>
        <Title>Øsnkelister</Title>
        <Grid>
          {kidsWishlist.map((kid, i) => (
            <CardBackground key={i}>
              <DecorationImg src={decoration} />
              <Card $naughty={kid.naughty}>
                <CardInfo
                  data={kid}
                  longestListLength={longestWishlist}
                ></CardInfo>
                <SparkImg src={spark} $naughty={kid.naughty} />
              </Card>
            </CardBackground>
          ))}
        </Grid>
      </Main>
      <Footer>Test</Footer>
    </>
  );
}
