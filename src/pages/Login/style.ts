import styled from "styled-components";

export const LoginContainer = styled.div`
  background: linear-gradient(to top, #121212, #414345);
  height: 100vh;
  display: flex;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  background: linear-gradient(300deg, rgba(0, 255, 100, 0.25), rgba(0, 255, 100));
  backdrop-filter: blur(10px);

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 40%;
  width: 70%;
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction:row ;
  width: 50%;
  padding-left: 10px;

  @media screen and (max-width: 1024px){
    width: 70%;
  }

  @media screen and (max-width: 768px){
    width: 90%;
  }
`;

export const LogoImg = styled.img`
margin-top: 12px;
  height: 45px;
`;

export const ParagraphBox = styled.div`
  display: flex;
  flex-direction:column;
  width: 50%;
  padding-left: 10px;

  @media screen and (max-width: 1440px){
    p{
      font-size: 18px;
    }
    width: 50%;
  }

  @media screen and (max-width: 1024px){
    p{
      font-size: 16px;
    }
    width: 70%;
  }

  @media screen and (max-width: 768px){
    p{
      font-size: 16px;
    }
    width: 90%;
  }
`;

export const LoginFormContainer = styled.div`
  height: 100%;
  width: 50%;
  justify-self: start;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 425px) {
    justify-self: center ;
    width: 100%;
  }
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction:column ;
  align-items: start;
  height: 75%;
  width: 50%;

  button{
    margin-top: 40px;
    align-self: center;
  }

  @media screen and (max-width: 1024px) {
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    width: 75%;
  }
  @media screen and (max-width: 425px) {
    width: 80%;
    height: 100%;
    justify-content: center;
  }
`;
