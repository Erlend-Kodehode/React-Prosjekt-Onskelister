import styled, { keyframes } from "styled-components";
import CardInfo from "./Card.jsx";
import { kidsWishlist } from "./wishlist.jsx";
import decoration from "/christmas-decoration-clipart.svg";
import spark from "/Star.png";

const Title = styled.h1`
  font-family: "Mountains of Christmas", serif;
`;

//TODO more styling outside the cards

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 1rem;
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
  //TODO better good effect
  border: 2px solid ${(props) => (props.$naughty ? "lightcoral" : "gold")};
  position: relative;
`;

const DecorationImg = styled.img`
  position: absolute;
  top: -1em;
  right: 50%;
  transform: translate(50%);
  height: 18%;
`;

const SparkAnim = keyframes`
  0%{
    transform: scale(0)
  }

  50%{
    transform: scale(1)
  }

  100%{
    transform: scale(0)
  }
`;

const SparkImg = styled.img`
  transform: scale(0);
  animation: ${SparkAnim} 600ms cubic-bezier(0.65, 0.16, 0.28, 0.79) 1s infinite;
  width: 15%;
  position: absolute;
`;

const Card = styled.div`
  border: 2px #f1e8d6 solid;
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
    <Main>
      <Title>Øsnkelister</Title>
      <Grid>
        {kidsWishlist.map((kid, i) => (
          <CardBackground key={i} $naughty={kid.naughty}>
            <DecorationImg src={decoration}></DecorationImg>
            <Card>
              <CardInfo
                data={kid}
                longestListLength={longestWishlist}
              ></CardInfo>
              <SparkImg src={spark}></SparkImg>
            </Card>
          </CardBackground>
        ))}
      </Grid>
    </Main>
  );
}
