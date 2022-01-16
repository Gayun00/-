import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

function Carousel() {
  const [carouselList, setCarouselList] = useState([]);

  function loadCarouselData() {
    fetch('/data/carousel.json')
      .then(res => res.json())
      .then(res => setCarouselList(res));
  }

  useEffect(() => {
    loadCarouselData();
  }, []);
  return (
    <Wrapper>
      <Container>
        <List>
         {carouselList.map((carousel, idx) => (
           <Item key={idx}>
           <ImgContainer>
             <img src={carousel.img} alt={carousel.title} />
           </ImgContainer>
           <TextWrapper>
            <p>{carousel.title}</p>
            <p>{carousel.subTitle}</p>
            <ItemButton>
              <p>바로가기</p>
              <IoIosArrowForward />
            </ItemButton>
           </TextWrapper>
       </Item>
         )) }
        </List>
        <ButtonWrapper>
          <PrevButton>
            <IoIosArrowBack />
          </PrevButton>
          <NextButton>
            <IoIosArrowForward />
          </NextButton>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  /* background-color: pink; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* width: 100vw; */
  /* height: 10vw; */

  /* background-color: skyblue; */
`;

const List = styled.div`
  display: flex;
  /* height: 10vw; */
  /* background-color: oldlace; */
`;

const Item = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 0 2rem 0 2rem; */
  /* padding: 0 1rem 0 1rem; */
  /* width: 70vw; */
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  & > img {
    width: 95%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1000px) {
    position: absolute;
    transform: translate(-19rem,6rem);
    padding: 1rem;
    background-color: white;
  }
`;

const ItemButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  transform: translateY(60%);
`;

const PrevButton = styled.button`
  width: 2rem;
  height: 5rem;
  background-color: lightgray;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;

const NextButton = styled.button`
  width: 2rem;
  height: 5rem;
  background-color: lightgray;
  border: none;
  border-radius:1rem;
  cursor: pointer;
`;



export default Carousel
