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

  const BANNERS_COUNT = banners.length / 3;
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
    function setInitialPos() {
      slideRef.current.style.transform = `translateX(-${
        SLIDE_WIDTH * (START - 1)
      }px)`;
      setSlide({
        number: START,
        withMotion: false,
      })
    }
    setInitialPos();
  }, [banners])

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
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  overflow: hidden;
`;

const List = styled.div`
  display: flex;
  margin-left: 1.5rem;
  @media (max-width: 1000px) {
    width: 100vw;
  }
`;

const Item = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1000px) {
    width: 1000px;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;

  & > img {
    border-radius: 0.3rem;
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
  /* padding: 0 1.5rem 0 1.5rem; */
  width: 98%;
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
