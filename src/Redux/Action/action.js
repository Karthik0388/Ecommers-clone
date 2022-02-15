import * as types from "./actionTypes";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
export let Signup = (email, password) => {
  return async dispatch => {
    let uploadData = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then(({ user }) => {
      dispatch({
        type: "Upload",
        payload: uploadData,
      });
        sendEmailVerification(user);
        toast.info(`Verication mail has been sent to ${user}`)
    })
  };
};

export let AddBasket = item => ({
  type: types.Addtobasket,
  payload: item,
});
export let removeBasket = id => ({
  type: types.RemoveFromCart,
  payload: id,
});
export let Createuser = (email, password) => {
  return async dispatch => {
    let user = await signInWithEmailAndPassword(auth, email, password)
      .then(userData => {
        if (userData.user.emailVerified === true) {
          if (userData) {
            dispatch({
              type: "createData",
              payload: user,
            });
            toast.success(`sucessfully ${email} has been logged in`);
            window.location.assign("/");
          }
        }
      })
      .catch(alert);
  };
};

export let SetcartEmpty = () => ({
  type:types.Set_cart_empty
})
