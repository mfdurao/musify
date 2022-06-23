import React from "react";
import Lyrics from "../../components/Lyrics";
import { CommonLayout } from "../../layouts";
import { HomeContainer } from "./style";

const Home = () => {
  return (
    <CommonLayout>
      <HomeContainer>
        <Lyrics/>
      </HomeContainer>
    </CommonLayout>
  );
};

export default Home;
