import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

function Carousel() {
  const [banners, setBanners] = useState([]);
  async function fetchBannersData() {
    const response = await fetch('/data/banners.json');
    const data = await response.json();
    const updated = [...data, ...data, ...data];
    setBanners(updated);
  }

  useEffect(() => {
    fetchBannersData();
  }, []);

  const SLIDE_WIDTH = 1000;
  const slideRef = useRef();

  const BANNERS_COUNT = banners.length;
  const TOTAL_BANNERS_COUNT = BANNERS_COUNT * 3;
  const START = (TOTAL_BANNERS_COUNT * 1) / 3 + 1;
  const END = (TOTAL_BANNERS_COUNT * 2) / 3;
  const PREV_END = (TOTAL_BANNERS_COUNT * 1) / 3;
  const NEXT_START = (TOTAL_BANNERS_COUNT * 2) / 3 + 1;

  const [slide, setSlide] = useState({
    number: START,
    withMotion: true,
  });

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${
      SLIDE_WIDTH * (slide.number - 1)
    }px)`;
    slideRef.current.style.transition = slide.withMotion
      ? 'all 0.5s ease-in'
      : '';
  }, [slide, SLIDE_WIDTH]);

  function slideAfterMoveToTheEnd() {
    setSlide({
      number: END - 1,
      withMotion: true,
    });
  }

  function slideAfterMoveToTheStart() {
    setSlide({
      number: START + 1,
      withMotion: true,
    });
  }

  const passTheFirstSlide = slide.number === PREV_END;
  const passTheLastSlide = slide.number === NEXT_START;

  function onClickPrev() {
    if (passTheFirstSlide) {
      setSlide({
        number: END,
        withMotion: false,
      });
      setTimeout(() => {
        slideAfterMoveToTheEnd();
      }, 50);
    } else {
      setSlide({
        number: slide.number - 1,
        withMotion: true,
      });
    }
  }

  function onClickNext() {
    if (passTheLastSlide) {
      setSlide({
        number: START,
        withMotion: false,
      });
      setTimeout(() => {
        slideAfterMoveToTheStart();
      }, 50);
    } else {
      setSlide({
        number: slide.number + 1,
        withMotion: true,
      });
    }
  }
  return (
    <Wrapper>
      <Container>
        <List ref={slideRef}>
         {banners.map((carousel, idx) => (
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
            <IoIosArrowBack onClick={onClickPrev}/>
          </PrevButton>
          <NextButton>
            <IoIosArrowForward onClick={onClickNext}/>
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
  align-items: center;
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
  @media (min-width: 1000px) {
    width: 1000px;
  }
  /* margin: 0 2rem 0 2rem; */
  /* padding: 0 1rem 0 1rem; */
  /* width: 70vw; */
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  /* width: 100%; */
  & > img {
    /* width: 100%; */
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1000px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transform: translate(-22rem,5rem);
    padding: 1rem;
    background-color: white;
    border-radius: 1rem;
  }
`;

const ItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  background-color: transparent;
  border: none;
  color: blue;
  @media (min-width: 1000px) {
    justify-content: flex-start;
    border-top: 1px solid lightgray;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 95%;
  opacity: 0.7;
  transform: translateY(120%);
  @media (max-width: 1000px) {
    visibility: hidden;
  }
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
