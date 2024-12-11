import styled from "styled-components";

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
    font-size: 0.95em;
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
  padding-left: ${(props) => props.offset}em;
  min-height: 1.5em;
`;

const minOffset = 0.3;
const maxOffset = 6;
export default function CardInfo({
  data: { name, age, wishlist },
  longestListLength,
}) {
  const listLength = longestListLength - wishlist.length;
  for (let i = 0; i < listLength; i++) wishlist.push("");
  return (
    <>
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
          {wishlist.map((item, i) => (
            <WishItem
              key={i}
              offset={Math.floor(Math.random() * maxOffset) / 10 + minOffset}
            >
              {item}
            </WishItem>
          ))}
        </ul>
      </WishlistBox>
    </>
  );
}
