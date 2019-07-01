import {AUTH_LOGIN,AUTH_LOGIN_SUCCESS,AUTH_LOGIN_FAILURE} from '../actions/actionTypes'

const initialstate ={
    loading : false,
    studentdashboard : false,
}

const reducer = (state=initialstate , action) =>{
    switch(action.type){
        case AUTH_LOGIN :
            return{
                ...state,
                loading :true,
            }
        case AUTH_LOGIN_SUCCESS :
        console.log('authloginsucceess reducer')    
        return{
                ...state,
                loading :false,
                studentdashboard :true 
            }
        case AUTH_LOGIN_FAILURE :
            return{
                ...state,
                loading :false,
            }
    }
    return state ;
}

export default reducer ;