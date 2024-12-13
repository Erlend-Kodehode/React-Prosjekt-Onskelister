import styled, { keyframes } from "styled-components";
import CardContents from "./Card.jsx";
import { kidsWishlist } from "./wishlist.jsx";
import decoration from "/christmas-decoration-clipart.svg";
import spark from "/Star.png";
import hat from "/santa-hat-icon-original.svg";
import backgroundImg from "/Card_Background.svg";
import ballStamp from "/stamps/christmas-ball-silhouette.svg";
import bellStamp from "/stamps/christmas-bell-silhouette.svg";
import sockStamp from "/stamps/christmas-sock-silhouette.svg";
import treeStamp from "/stamps/christmas-tree-silhouette.svg";
import snowmanStamp from "/stamps/snowman-silhouette.svg";

//array of images to use as background images on the cards
const stamps = [ballStamp, bellStamp, sockStamp, treeStamp, snowmanStamp];

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 1rem;
`;

const Title = styled.h1`
  position: relative;
  font-family: "Mountains of Christmas", serif;
  color: #fef4e6;
  font-size: 4em;
  @media only screen and (max-width: 650px) {
    font-size: 3em;
  }
  @media only screen and (max-width: 500px) {
    font-size: 2em;
  }
  @media only screen and (max-width: 340px) {
    font-size: 1.5em;
  }
`;

const HatImg = styled.img`
  width: 0.5em;
  position: absolute;
  top: 6%;
  left: -2.5%;

  //flips and rotates the image
  transform: scaleX(-1) rotate(45deg);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  gap: 1rem;
  width: 85%;

  @media only screen and (max-width: 1165px) {
    grid-template-columns: repeat(3, 33%);
  }
  @media only screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 50%);
    width: 70%;
  }
  @media only screen and (max-width: 720px) {
    width: 85%;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CardBackground = styled.div`
  border-radius: 1rem;
  padding: 0.7rem;
  background-image: url("${backgroundImg}");
  position: relative;
`;

const DecorationImg = styled.img`
  position: absolute;
  top: -1em;

  //centers the image
  right: 50%;
  transform: translate(50%);

  height: 18%;
`;

const Card = styled.div`
  //gets the background image from a property on the component so it can be randomized uniquely for each card
  background: #f8f5ee url("${(props) => props.$stamp}") no-repeat 86% 91%/15%;

  background-color: #f8f5ee;

  //gives a special border to the good children
  border: 2px solid ${(props) => (props.$naughty ? "#f1e8d6" : "#f7e268")};

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

const SparkImg = styled.img`
  transform: scale(0) rotate(0);

  //only animates if the child is good
  animation: ${(props) => (props.$naughty ? "" : SparkAnim)} 1500ms linear
    infinite;

  height: 15%;
  position: absolute;
  top: -0.35em;
  left: -0.15em;
`;

const SparkAnim = keyframes`
  0%{
    transform: scale(0) rotate(0);
  }

  10%{
    transform: scale(1) rotate(90deg);
  }

  15%{
    transform: scale(0.9) rotate(115deg);
  }

  34%{
    transform: scale(0.1) rotate(180deg);
  }
  35%{
    transform: scale(0) rotate(0);
  }
`;

//figures out the length of the longest wishlist
let longestWishlist = 0;
kidsWishlist.forEach((kid) => {
  const listLength = kid.wishlist.length;
  longestWishlist = listLength > longestWishlist ? listLength : longestWishlist;
});

export default function App() {
  return (
    <Main>
      <Title>
        <HatImg src={hat} />
        Ønskelister for Julenissen
      </Title>
      <Grid>
        {kidsWishlist.map((kid, i) => (
          <CardBackground key={i}>
            <DecorationImg src={decoration} />
            <Card
              $naughty={kid.naughty}
              $stamp={stamps[Math.floor(Math.random() * stamps.length)]}
            >
              <CardContents
                data={kid}
                longestListLength={longestWishlist}
              ></CardContents>
              <SparkImg src={spark} $naughty={kid.naughty} />
            </Card>
          </CardBackground>
        ))}
      </Grid>
    </Main>
  );
}
