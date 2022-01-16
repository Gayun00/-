import React from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';

function Nav() {
  return (
    <Wrapper>
      <LogoWrapper>
        <FiMenu />
        <Logo>WANTED</Logo>
      </LogoWrapper>
      <MenuWrapper>
        <Menu>채용</Menu>
        <Menu>이벤트</Menu>
        <Menu>직군별 연봉</Menu>
        <Menu>이력서</Menu>
        <Menu>커뮤니티</Menu>
        <Menu>프리랜서</Menu>
        <Menu>AI합격예측</Menu>
      </MenuWrapper>
      <SignUpWrapper>
        <AiOutlineSearch />
        <p>회원가입 로그인</p>
      </SignUpWrapper>
      <EnterpriseWrapper>기업 서비스</EnterpriseWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const Logo = styled.span`
//
`;

const MenuWrapper = styled.span`
  font-size: 0.9rem;
`;

const Menu = styled.span`
  padding: 0 0.4rem 0 0.4rem;
`;

const SignUpWrapper = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 600;
`;

const EnterpriseWrapper = styled.span`
  padding: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 1rem;
  font-size: 0.9rem;
`;
export default Nav
