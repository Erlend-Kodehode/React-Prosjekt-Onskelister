import styled from "styled-components";

const Card = styled.div`
  h2 {
    font-weight: 400;
  }

  h3 {
    font-weight: 400;
  }
  background-color: #f8f5ee;
  border-radius: 10px;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: "Shantell Sans", cursive;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
const WishlistBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ul {
    list-style-type: none;
  }
`;

const NameBox = styled.div`
  display: flex;
`;

const WishlistName = styled.h2`
  border-bottom: 1px solid black;
  font-family: "Schoolbell", cursive;
  padding-left: 0.7em;
  width: 5em;
`;

const WishlistAge = styled.h3`
  border-bottom: 1px solid black;
  font-family: "Schoolbell", cursive;
  padding-left: 0.7em;
  width: 7em;
`;

const AgeBox = styled.div`
  display: flex;
`;

const WishItem = styled.li`
  border-bottom: 1px solid black;
  font-family: "Schoolbell", cursive;
  padding-left: 0.5em;
  min-height: 1.5em;
`;

export default function CardInfo({
  data: { id, name, age, wishlist, naughty },
  longestListLength,
}) {
  const listLength = longestListLength - wishlist.length;
  for (let i = 0; i < listLength; i++) wishlist.push("");
  return (
    <Card>
      <InfoBox>
        <NameBox>
          <h2>Navn:</h2>
          <WishlistName>{name}</WishlistName>
        </NameBox>
        <AgeBox>
          <h3>Alder:</h3>
          <WishlistAge>{age} år gammel</WishlistAge>
        </AgeBox>
      </InfoBox>
      <WishlistBox>
        <h3>Ønskeliste:</h3>
        <ul>
          {wishlist.map((item) => (
            <WishItem>{item}</WishItem>
          ))}
        </ul>
      </WishlistBox>
    </Card>
  );
}
