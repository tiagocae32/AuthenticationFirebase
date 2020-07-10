import React from "react";
import validator from "validator"
import Error from "../Components/Error";


//Funcion que validara un formulario 
export const validateFormCreateUser = (values)  => {
  let errors = {};

  if (!values.username) {
    errors.username = <Error mensaje="El campo username es requerido" />;
  }

  //expresion regular para validar un email
  
  //const regExp =
    //"^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$";

  if (!values.email) {
    errors.email = <Error mensaje="El campo email es requerido" />;
  } /*else if (!values.email.match(regExp)) {
    errors.email = <Error mensaje="Formato de mail invalido" />;
  }*/
  
  if(!validator.isEmail(values.email)){
    errors.email = <Error mensaje="Email invalido" />;
  }

  if (!values.password) {
    errors.password = <Error mensaje="Campo password requerido" />;
  } else if (values.password.length < 6) {
    errors.password = <Error mensaje="Minimo 6 caracteres" />;
  }

  return errors;
}
