import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.nav`
  background-color: #333;
  padding: 10px;
  text-align: right;
`;



const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserCard = styled.div`
  text-align: center;
`;

const UserImage = styled.img`
  max-width: 100%;
  border-radius: 50%;
`;
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();


  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Container>
        <Content>
          <UserCard>
            <UserImage
              src={user.picture}
              alt={user.name}
            />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </UserCard>
        </Content>
      </Container>
    )
  );
};

export default Profile;
