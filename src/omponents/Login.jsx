import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
const LoginBtn = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <LoginBtn onClick={() => loginWithRedirect()}>Log In</LoginBtn>;
};

export default LoginButton;
