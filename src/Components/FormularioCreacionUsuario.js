import React, {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"

//Validacion Formulario
import useForm from "../CustomHooks/useForm";
import { validateFormCreateUser } from "../Utilities/validateFormCreateUser";
import { Link } from "react-router-dom";
import { startRegisterEmailPassword } from "../Actions/auth";


const FormularioCreacionUsuario = ({history}) => {
  const STATE_INICIAL = {
    username: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch()

  const {isAuthenticated } = useSelector((state) => state.auth);


  useEffect(() => {
    if (isAuthenticated) {
      history.push("/usuarios");
    }
  }, [isAuthenticated, history]);


  //Funcion  que se ejecuta al hacer submit en el formulario
  const createUser = () => {
    dispatch(startRegisterEmailPassword(email,password,username))
    
    setValoresForm({
      email:"",
      username: "",
      password: "",
    });

  };

  //Custom hook useForm
  const {
    valoresForm,
    errorsForm,
    handleChange,
    handleSubmit,
    setValoresForm,
  } = useForm(STATE_INICIAL, validateFormCreateUser, createUser);

  const { username, email, password } = valoresForm;


  return (
    <div className="center main_header">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Create User</h5>
                <form
                  className="form-signin"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <hr className="my-3"></hr>
                  </div>
                  <div className="form-label-group">
                    {errorsForm.username && <p>{errorsForm.username}</p>}
                    <input
                      type="text"
                      id="inputUser"
                      className="form-control"
                      placeholder="Username"
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                    <label htmlFor="inputUser">Username</label>
                  </div>

                  <div className="form-label-group">
                  {errorsForm.email && <p>{errorsForm.email}</p>}
                    <input
                      type="text"
                      id="inputUserEmail"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                    <label htmlFor="inputUserEmail">Email</label>
                  </div>

                  <div className="form-label-group">
                  {errorsForm.password && <p>{errorsForm.password}</p>}
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                    <label htmlFor="inputPassword">Password</label>
                    <hr />
                    <p className="alert alert-danger">
                      Password must contain a capital letter, two numbers and a
                      special character
                    </p>
                  </div>
                  <hr className="my-3"></hr>
                  <div>
                    <input
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                      value="Create user"
                    />
                  </div>
                  <div>
                      <Link to="/formularioLogin">
                        Ir a Login
                      </Link>
                  </div>
                  <div>
                    <Link to="/">Home</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioCreacionUsuario;
