import axios from 'axios'
import {AUTH_LOGIN,AUTH_LOGIN_SUCCESS,AUTH_LOGIN_FAILURE} from './actionTypes' 


export const authlogin =() =>{
    return {
        type : AUTH_LOGIN,
        loading : true,
    }
}

export const authloginsuccess =() =>{
    return {
        type : AUTH_LOGIN_SUCCESS,
        loading : false,
        studentDashboard : true,
    }
}

export const authloginfailure =() =>{
    return {
        type : AUTH_LOGIN_FAILURE,
        loading : false,
    }
}


export const login =(user) => async dispatch =>{
    dispatch( authlogin() )
    let body ={
        email : user.email,
        password : user.password,
    }
    axios
    .post(
    `http://157.230.174.240:3006/api/v1/user/login`,
    body
    )
    .then(response => {
        console.log('response log in',response);
        dispatch( authloginsuccess() )
        })
        .catch(error => {
          console.log('error',error);
          dispatch( authloginfailure() )
        });
}
