import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogOut } from "../Actions/auth";

const Usuarios = () => {
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.auth);

  const logOut = () => {
    dispatch(startLogOut());
  };

  return (
    <div>
      <h1>Usuarios</h1>

      <p>Hola {name}</p>

      <button onClick={logOut}>Log out</button>
    </div>
  );
};

export default Usuarios;
