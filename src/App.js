import React, { useEffect, useState } from "react";
import { Redirect, Switch, BrowserRouter as Router } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import { auth } from "./configs/firebase";
import { signOut } from "./utilis";

const App = () => {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  const checkAuthState = () => {
    auth?.onCheckStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        console.log("useeeer", user);
        setToken(uid);
        setCurrentUser({ ...user });
      } else {
        console.log("No Useeer");
        setToken(null);
      }
    });
  };

  useEffect(() => {
    checkAuthState();
  }, []);

  if (true) {
    // if(token) {
    return (
      <div>
        <button onClick={() => signOut()}>Sign Out</button>
        <div className="cotainer mt-5">
          <h2>Expensify app</h2>
          <Router>
            <Switch>
              <Redirect to="/profile" />
              {/* {
            routes.authenticated.map(item => {
              return ( 
                <Route { ...item} component={null} render={route => <item.component { ...route} currentUser={currentUser}/>} />
              )
            })
          } */}
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
  return <div>No token given</div>;
};

export default App;
