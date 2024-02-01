import React from "react";
import LoginButton from "./omponents/Login";
import LogoutButton from "./omponents/Logout";
import Profile from "./omponents/UserInfo";
import Navbar from "./omponents/Navbar";
import UserStatus from "./omponents/NotLogged";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      <Navbar />
      {isAuthenticated ? <Profile /> : <UserStatus />}
    </div>
  );
}

export default App;
