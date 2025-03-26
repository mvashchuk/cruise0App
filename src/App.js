import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";


const Button = styled.button`
  background-color:#6c93c6; /* Change this to match your brand color */
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  
  &:hover {
    background-color: #6c93c6;; /* Darker shade on hover */
  }
`;

const App = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  return (
    
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!isAuthenticated ? (
        <Button onClick={() => loginWithRedirect()}>Log In</Button>
      ) : (
        <div>
          {user.email_verified ? (
            <>
              <h2>Welcome, {user.name}!</h2>
              <Button onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </Button>
            </>
          ) : (
            <div style={{ color: "red" }}>
              <h2>Email Not Verified</h2>
              <p>Please verify your email before accessing this application.</p>
              <Button onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;