
import styled from "styled-components";

const StatusContainer = styled.div`
  color: #721c24;
  padding: 10px;
  text-align: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserStatus = () => {
  return <StatusContainer>User is not logged in</StatusContainer>;
};

export default UserStatus;
