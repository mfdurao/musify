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
  width: 40%;
  background: linear-gradient(
    300deg,
    rgba(0, 255, 100, 0.25),
    rgba(0, 255, 100)
  );
  backdrop-filter: blur(10px);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 50%;
  width: fit-content;
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  padding-left: 10px;
`;

export const LogoImg = styled.img`
  margin-top: 12px;
  height: 45px;
`;

export const ParagraphBox = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding-left: 10px;
`;

export const LoginFormContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 425px) {
    justify-self: center;
    width: 100%;
  }
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 75%;
  width: 30%;

  button {
    margin-top: 40px;
  }

  @media screen and (max-width: 1800px) {
    width: 50%;
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
  }
`;
