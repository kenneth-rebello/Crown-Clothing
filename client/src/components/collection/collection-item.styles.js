import styled from 'styled-components';
import Button from '../utils/button/Button';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;
  &:hover {
    .bg-image {
      opacity: 0.8;
      border: solid 1px black;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 44vw;   

    &:hover{
      .bg-image {
        opacity: unset;
      }
      button:{
        display:unset;
      }
    }
  }
`;

export const AddButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  @media screen and (max-width: 800px){
    display: block;
    opacity: 0.9;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 75%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 25%;
  text-align: right;
`;