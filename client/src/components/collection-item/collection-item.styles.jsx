import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  border: 1px solid black;
  border-bottom: 0px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  font-size: 18px;
  border: 1px solid black;
  background: black;

`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: white;
`;

export const PriceContainer = styled.span`
  // width: 10%;
  text-align: right;
  font-size: 18px;
  font-weight: bold;
  color: black;
  border-radius: 10px;
  padding: 0px 5px;
  background: white;
`;
