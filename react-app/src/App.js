import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Splash from "./components/SplashPage";
import Home from "./components/HomePage";
import Games from './components/Games';
import Profile from "./components/Profile";
import SignUpForm from "./components/auth/SignUpForm";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Splash
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/signup" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <ProtectedRoute path="/home" exact={true} authenticated={authenticated}>
          <Home setAuthenticated={setAuthenticated} />
        </ProtectedRoute>
        <ProtectedRoute
          path="/profile/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <Profile setAuthenticated={setAuthenticated} />
        </ProtectedRoute>
        <ProtectedRoute path="/games" exact={true} authenticated={authenticated}>
          <Games setAuthenticated={setAuthenticated} />
        </ProtectedRoute>
        <ProtectedRoute
          path="/users"
          exact={true}
          authenticated={authenticated}
        >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute
          path="/users/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <User />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
