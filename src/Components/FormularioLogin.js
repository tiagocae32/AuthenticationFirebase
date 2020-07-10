import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogin, startLoginEmailPassword } from "../Actions/auth";
import { Link } from "react-router-dom";
//validaciones
import useForm from "../CustomHooks/useForm";
import { validateFormLoginUser } from "../Utilities/validateFormLoginUser";

const FormularioLogin = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/usuarios");
    }
  }, [isAuthenticated, history]);

  const STATE_INICIAL = {
    email: "",
    password: "",
  };

  //login con email y password
  const loginUser = () => {
    dispatch(startLoginEmailPassword(email, password));
    setValoresForm({
      email: "",
      password: "",
    });
  };

  //login con google
  const loginUserGoogle = () => {
    dispatch(startGoogleLogin());
  };

  //Custom hook useForm
  const {
    valoresForm,
    errorsForm,
    handleChange,
    handleSubmit,
    setValoresForm,
  } = useForm(STATE_INICIAL, validateFormLoginUser, loginUser);

  const { email, password } = valoresForm;

  return (
    <div className="center main_header">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <hr className="my-3"></hr>
                <form
                  className="form-signin"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="form-label-group">
                    {errorsForm.email && <p>{errorsForm.email}</p>}
                    <input
                      type="email"
                      id="inputUser"
                      className="form-control"
                      placeholder="email"
                      autoFocus
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                    <label htmlFor="inputUser">Username</label>
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
                  </div>
                  <hr></hr>
                  <div>
                    <input
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                      value="Log In"
                      disabled={loading}
                    />
                  </div>
                  <hr />
                  <div></div>
                  <div>
                    <Link to="/formularioCreacionUsuario">
                      Ir a creacion de usuario
                    </Link>
                  </div>
                  <div>
                    <Link to="/">Home</Link>
                  </div>
                </form>
                <button disabled={loading} onClick={loginUserGoogle}>
                  Login Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioLogin;
