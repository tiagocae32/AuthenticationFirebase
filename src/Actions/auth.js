import { types } from "../Types/types";
import { firebase, googleAuthProvider } from "../Firebase/firebase-config";
import Swal from "sweetalert2";


export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        Swal.fire("Correcto", "Login exitoso", "success");
        dispatch(finishLoading());
      })
      .catch((error) => {
        console.log(error);
        dispatch(finishLoading());
        Swal.fire("Error", error.message, "Error");
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const startRegisterEmailPassword = (email, password, name) => {
  return (dispatch) => {
    dispatch(startLoading());

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });

        //despacho a la accion del login porque automaticamente cuando un usuario se registra, firebase lo loguea en el sistema
        dispatch(login(user.uid, user.displayName));
        Swal.fire("Correcto", "Creacion de usuario exitoso", "success");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        dispatch(finishLoading());
        Swal.fire("Error", error.message, "Error");
      });
  };
};

export const startLogOut = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logOut());
  };
};

export const login = (uid, displayName) => ({
  type: types.LOGINEXITOSO,
  payload: {
    uid,
    displayName,
  },
});


export const logOut = () => ({
  type: types.LOGOUT,
});

export const startLoading = () => ({
  type: types.STARTLOADING,
});

export const finishLoading = () => ({
  type: types.FINISHLOADING,
});
