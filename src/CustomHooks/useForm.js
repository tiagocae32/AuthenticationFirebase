import { useState, useEffect } from "react";

const useForm = (stateInicial, validarFormulario, callbackFn) => {

  //user values state
  const [valoresForm, setValoresForm] = useState(stateInicial);

  //new state for errors
  //function that validate these errors
  //pass these errors back to the form
  const [errorsForm, setErrorsForm] = useState({});

  //state to check if the form was submited
  const [submitForm, setSubmitForm] = useState(false);

  //cuando desde el componente de formulario de creacion de usuario se haga click en el boton de crear
  // si no hay ningun error en la validacion, se enviara el formulario con la informacion que tenga.
  useEffect(() => {
    //check to see if there are no errors
    if (submitForm) {
      const noErrores = Object.keys(errorsForm).length === 0;
      if (noErrores) {
        callbackFn();
      }
      setSubmitForm(false);
    }
    //eslint-disable-next-line
  }, [errorsForm]);

  //evento que se ejecutar al hacer submit en el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    //handling errors
    const validarErrores = validarFormulario(valoresForm);
    setErrorsForm(validarErrores);
    setSubmitForm(true);
    
    //eliminando el o los mensajes de error de la interfaz luego de 3 segundos
    setTimeout(() => {
      setErrorsForm({}); 
    }, 3000);
  };


  //evento que "escuchara" los cambios que el usuarios haga en los inputs del formulario
  const handleChange = (e) => {
    setValoresForm({
      ...valoresForm,
      [e.target.name]: e.target.value,
    });
  };

  return {
    valoresForm,
    errorsForm,
    handleChange,
    handleSubmit,
    setValoresForm,
  };
};

export default useForm;
