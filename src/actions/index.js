import firebase from 'firebase';
import {EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USERS_SUCCESS,LOGIN_USERS_FAIL,LOGIN_USER} from './types'
export const emailChanged = (text) => {
    return{
        type:EMAIL_CHANGED,
        payload:text
    };
};

export const passwordChanged = (text)=>{
  return{
      type:PASSWORD_CHANGED,
      payload:text
  }
};

export const loginUser =({email,password})=>{
    return (dispatch)=> {
        dispatch({type:LOGIN_USER});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch,user) ).catch(er=>{
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(user=>loginUserSuccess(dispatch,user))
                    .catch(er=>loginUserFaild(dispatch));
            });
    };
};

const loginUserSuccess = (dispatch,user)=>{
    dispatch({
        type:LOGIN_USERS_SUCCESS,
        payload:user
    });
};
const loginUserFaild = (dispatch)=>{
    dispatch({type:LOGIN_USERS_FAIL});
};