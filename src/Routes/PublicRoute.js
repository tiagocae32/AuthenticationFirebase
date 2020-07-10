import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoutes = ({ component: Component, ...props }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Route
      {...props}
      render={(props) =>
        isAuthenticated ? (
          <Redirect
          to={{
            pathname: "/usuarios",
            state: { from: props.location },
          }}
        />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
