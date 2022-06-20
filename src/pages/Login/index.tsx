import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text, Input } from "../../components";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

import {
  LoginContainer,
  LoginForm,
  LoginFormContainer,
  LogoBox,
  LogoImg,
  ParagraphBox,
  TextBox,
  TextContainer,
} from "./style";

const guitar = require("../../assets/img/guitar.png");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({ email: "", password: "" });
  const auth = useAuth();

  useEffect(() => {
    setValues({ email, password });
  }, [email, password]);
    
  const navigate = useNavigate();

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      await auth.authenticate(values.email, values.password);
      navigate("/home");
    } catch (err) {
      message.error("Invalid email or password");
    }
  };

  return (
    <LoginContainer>
      <TextContainer>
        <TextBox>
          <LogoBox>
            <LogoImg src={guitar} alt="Musify Logo" />
            <Text
              color="#000"
              size="37px"
              weight="500"
              margin="10px"
              position="start"
              content="Musify"
            />
          </LogoBox>
          <ParagraphBox>
            <Text
              color="#000"
              size="24px"
              weight="500"
              margin="2px 0"
              position="justify"
              content="let us guide you in the world"
            />
            <Text
              color="#000"
              size="24px"
              weight="500"
              margin="2px 0"
              position="justify"
              content="of music learning."
            />
          </ParagraphBox>
        </TextBox>
      </TextContainer>
      <LoginFormContainer>
        <LoginForm
          onSubmit={(e) => {
            e.preventDefault();
            onFinish(values);
          }}
        >
          <Text
            color="rgba(0, 255, 100, 0.8)"
            size="40px"
            weight="500"
            margin="10px 0px 40px"
            position="center"
            content="Sign in"
          />
          <Text
            color="#c5c5c5"
            size="24px"
            weight="500"
            margin="15px 0px 10px 5px"
            position="start"
            content="email:"
          />
          <Input
            type="email"
            placeholder="Your email here..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Text
            color="#c5c5c5"
            size="24px"
            weight="500"
            margin="15px 0px 10px 5px"
            position="start"
            content="password:"
          />
          <Input
            type="password"
            placeholder="Your password here..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            autocomplete="on"
          />
          <Button type="submit" content="Sign in" />
        </LoginForm>
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default Login;
