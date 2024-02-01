import React from "react";
import styled from "styled-components";
import LoginButton from "./Login";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";

const NavbarContainer = styled.nav`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1``;

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <NavbarContainer>
      <Logo>Login.</Logo>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </NavbarContainer>
  );
};

export default Navbar;
