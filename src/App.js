import React, { useEffect, useState } from "react";
import { firebase } from "./Firebase/firebase-config";
import Home from "./Components/Home";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormularioCreacionUsuario from "./Components/FormularioCreacionUsuario";
import FormularioLogin from "./Components/FormularioLogin";
import {login} from "./Actions/auth";
import Usuarios from "./Components/Usuarios";
import { PrivateRoutes } from "./Routes/PrivateRoutes";
import {PublicRoutes} from "./Routes/PublicRoute"

const App = () => {
  const dispatch = useDispatch();

  const [checking,setChecking] = useState(true)
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }

      setChecking(false)
    });
  }, [dispatch,setChecking,setIsLoggedIn]);


  if(checking){
    return(
      <h1>Espere.....</h1>
    )
  }

  return (
    <Router>
      <Switch>
        <PublicRoutes
          exact
          path="/"
          isAuthenticated={isLoggedIn}
          component={Home}
        />
        <Route
          exact
          path="/formularioCreacionUsuario"
          component={FormularioCreacionUsuario}
        />
        <Route exact path="/formularioLogin" component={FormularioLogin} />
        <PrivateRoutes
          exact
          path="/usuarios"
          component={Usuarios}
        />
      </Switch>
    </Router>
  );
};

export default App;
