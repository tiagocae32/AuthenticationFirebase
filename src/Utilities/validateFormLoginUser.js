import React from "react";
import Error from "../Components/Error";

//Funcion que validara un formulario
export const validateFormLoginUser = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = <Error mensaje="El campo email es requerido" />;
  }

  if (!values.password) {
    errors.password = <Error mensaje="Campo password requerido" />;
  } else if (values.password.length < 6) {
    errors.password = <Error mensaje="Minimo 6 caracteres" />;
  }

  
  return errors;
};
