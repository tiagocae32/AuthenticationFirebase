import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoutes = ({ component: Component, ...props }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Route
      {...props}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/formularioLogin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};


