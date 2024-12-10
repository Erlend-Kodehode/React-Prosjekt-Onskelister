import styled from "styled-components";
import CardInfo from "./Card.jsx";
import { kidsWishlist } from "./wishlist.jsx";

const Title = styled.h1`
  font-family: "Mountains of Christmas", serif;
`;
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
  .good {
    border: 2px solid lime;
  }
  .bad {
    border: 2px solid lightcoral;
  }
`;

const Card = styled.div`
  background-color: #f8f5ee;
  border-radius: 10px;
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
          <Card key={i} className={kid.naughty ? "bad" : "good"}>
            <CardInfo data={kid} longestListLength={longestWishlist}></CardInfo>
          </Card>
        ))}
      </Grid>
    </Main>
  );
}
