import React, { useReducer } from 'react';


let userId = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem("currentUser")).userId : "";
let token = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).jwt : "";


export const initialState = {
    userId: "" || userId, 
    jwt: "" || token,
    loading: false,
    errorMessage: null
};



export const AuthReducer = (initialState, action) => {
    switch(action.type){
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true
            };

        case "LOGIN_SUCCESS":
            console.log('LOGIN SUCCESS')
            return {
                ...initialState,
                userId: action.payload.userId,
                jwt: action.payload.auth_token,
                loading: false
            };

        case "LOGOUT":
            console.log('LOGOUT')
            return {
                ...initialState,
                userId: "",
                jwt: ""
            };

        case "LOGIN_ERROR":
            console.log('LOGIN ERROR')
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error
            };
        
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};


