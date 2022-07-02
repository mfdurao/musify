import React from "react";
import { Text } from "../../components";
import {
  HeaderContainer,
  Logo,
  LogoBox,
  NavItem,
  NavItems,

} from "./style";
const guitar = require("../../assets/img/guitar.png");

const Header = () => {
  return (
      <HeaderContainer>
        <LogoBox to={"/home"}>
          <Logo src={guitar} alt="Musify Logo" />
          <Text
            color="#000"
            size="20px"
            weight="500"
            margin="10px"
            position="start"
            content="musify"
          />
        </LogoBox>
        <NavItems>
          <NavItem to={"/shop"}>
            Shop
          </NavItem>
          <NavItem to={"/profile"}>
            Profile
          </NavItem>
          <NavItem to={"/playlists"}>
            Your playlists
          </NavItem>
          <NavItem to={"#"}>
            Post or edit your song
          </NavItem>
        </NavItems>
      </HeaderContainer>
  );
};

export default Header;
