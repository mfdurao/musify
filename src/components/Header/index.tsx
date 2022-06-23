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
            size="22px"
            weight="500"
            margin="10px"
            position="start"
            content="Musify"
          />
        </LogoBox>
        <NavItems>
          <NavItem to={"#"}>
            Shop
          </NavItem>
          <NavItem to={"#"}>
            Profile
          </NavItem>
          <NavItem to={"#"}>
            Playlists
          </NavItem>
          <NavItem to={"#"}>
            Post your song
          </NavItem>
        </NavItems>
      </HeaderContainer>
  );
};

export default Header;
