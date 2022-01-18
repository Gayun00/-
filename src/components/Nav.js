import React from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';

function Nav() {
  return (
    <Wrapper>
      <Container>
      <LogoWrapperRes>
        <LogoWrapper>
          <FiMenu />
          <Logo>WANTED</Logo>
        </LogoWrapper>
        <SignUpButtonRes>회원가입하기</SignUpButtonRes>
      </LogoWrapperRes>
      <MenuWrapperRes>
        <MenuWrapper>
          <Menu>채용</Menu>
          <Menu>이벤트</Menu>
          <Menu>직군별 연봉</Menu>
          <Menu>이력서</Menu>
          <Menu>커뮤니티</Menu>
          <Menu>프리랜서</Menu>
          <Menu>AI합격예측</Menu>
        </MenuWrapper>
        <MenuRes>
          <Menu>홈</Menu>
          <Menu>채용</Menu>
          <Menu>이벤트</Menu>
        </MenuRes>
        <SearchButtonWrapperRes>
          <AiOutlineSearch />
          <BsThreeDots />
        </SearchButtonWrapperRes>
      </MenuWrapperRes>
      <SignUpWrapper>
        <AiOutlineSearch />
        <p>회원가입 로그인</p>
      </SignUpWrapper>
      <EnterpriseWrapper>기업 서비스</EnterpriseWrapper>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid lightgray;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60rem;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
`;

const LogoWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > svg {
    margin-right: 0.5rem;
    padding-bottom: 0.3rem;
  }
`;

const Logo = styled.span`
  font-weight: 700;
`;

const MenuWrapper = styled.span`
  font-size: 0.9rem;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Menu = styled.span`
  padding: 0 0.4rem 0 0.4rem;
`;

const SignUpWrapper = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 600;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const EnterpriseWrapper = styled.span`
  padding: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 1rem;
  font-size: 0.9rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const LogoWrapperRes = styled.div`

  @media (max-width: 1000px) {
    display: flex;
  justify-content: space-between;
  width: 100%;;
  }
`;

const SignUpButtonRes = styled.button`
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: transparent;
    border: 1px solid blue;
    border-radius: 1rem;
    color: blue;
  @media (min-width: 1000px) {
    display: none;
  }
`;

const MenuWrapperRes = styled.div`
  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.9rem;
  }
`;

const MenuRes = styled.span`
    @media (min-width: 700px) {
    display: none;
  }
`;

const SearchButtonWrapperRes = styled.span`
  & > svg {
    padding: 0 0.5rem 0 0.2rem;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

export default Nav
