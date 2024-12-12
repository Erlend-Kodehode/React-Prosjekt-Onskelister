import styled from "styled-components";

const NameAgeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const InfoBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const WishlistName = styled.h2`
  border-bottom: 1px solid black;
  font-family: "Schoolbell", cursive;
  padding-left: 0.7em;
  width: 5em;
`;

//uses same styling as WishlistName except for width
const WishlistAge = styled(WishlistName)`
  width: 7em;
`;

const WishlistBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  //removes list styling and slighlty lowers the font size to make the text fit better
  ul {
    list-style-type: none;
    font-size: 0.95em;
  }
`;

const WishItem = styled.li`
  border-bottom: 1px solid black;
  font-family: "Schoolbell", cursive;
  //gets padding from a property on the component so it can be randomized uniquely for each list item
  //the padding is randomized to mimic a childs messy writing
  padding-left: ${(props) => props.offset}em;
  min-height: 1.5em;
`;

//minimum and maximum that the randomizer uses
const minOffset = 3;
const maxOffset = 6;

export default function CardContents({
  data: { name, age, wishlist },
  longestListLength,
}) {
  //make all wishlist equally long by giving shorter wishlist empty arrayItems
  //this is done to sell the illusion that this was a list that the children filled out
  const listLength = longestListLength - wishlist.length;
  for (let i = 0; i < listLength; i++) wishlist.push("");

  return (
    <>
      <NameAgeBox>
        <InfoBox>
          <h2>Navn:</h2>
          <WishlistName>{name}</WishlistName>
        </InfoBox>
        <InfoBox>
          <h3>Alder:</h3>
          <WishlistAge as="h3">{age} år gammel</WishlistAge>
        </InfoBox>
      </NameAgeBox>
      <WishlistBox>
        <h3>Ønskeliste:</h3>
        <ul>
          {wishlist.map((item, i) => (
            <WishItem
              key={i}
              offset={Math.floor(Math.random() * maxOffset + minOffset) / 10}
            >
              {item}
            </WishItem>
          ))}
        </ul>
      </WishlistBox>
    </>
  );
}
