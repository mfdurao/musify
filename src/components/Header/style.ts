import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  min-width: 250px;
  height: 100vh;
  background: #131314;

  box-shadow: inset 0px -80px 60px -90px rgba(0, 255, 100, 0.2);
`;

export const Logo = styled.img`
  transition: all 0.4s;
  margin-top: -10px;
  top: 47px;
  transform: rotate(-45deg);
  height: 45px;
  position: fixed;
`;

export const LogoBox = styled(Link)`
  margin: 20px 0 50px;
  background: linear-gradient(
    200deg,
    rgba(0, 255, 100, 0.25),
    rgba(0, 255, 100)
  );
  display: flex;
  position: relative;
  width: 80px;
  border-radius: 50%;
  height: 80px;
  justify-content: center;
  align-items: center;
  padding: 30px 0 20px;
  animation-iteration-count: 1;
  animation-duration: 0.4s;

  transition: all 0.4s;
  p {
    opacity: 0;
  }

  &:hover {
    p {
      opacity: 1;
      margin-top: -25px;
    }
    ${Logo} {
      transform: rotate(45deg);
      top: 65px;
    }
  }
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
`;

export const NavItem = styled(Link)`
  color: #fff;
  display: flex;
  position: relative;
  width: 60%;
  justify-content: center;
  padding: 30px 0 20px;

  ::before {
    content: " ";
    width: 0%;
    height: 2px;
    bottom: 0;
    position: absolute;
    background-color: rgba(0, 255, 100, 0.7);

    transition: all 0.2s ease-out;
  }

  :hover::before {
    width: 100%;
    color: rgba(0, 255, 100, 0.7);
  }

  :hover {
    color: rgba(0, 255, 100, 0.7);
  }
`;
