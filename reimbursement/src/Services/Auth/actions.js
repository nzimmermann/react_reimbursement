import React, {useState} from "react";


export const ROOT_URL = 'http://employeerevabursementsystem-env.eba-s9jgpymb.us-east-2.elasticbeanstalk.com';


export async function loginUser(dispatch, loginPayload) {


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginPayload)
    }
    
    try {
        dispatch({ type: 'REQUEST_LOGIN' })
        let response = await fetch(`${ROOT_URL}/users/authenticate`, requestOptions)
        let data = await response.json();

        if(data.jwt){
            dispatch({ type: 'LOGIN_SUCCESS', payload: data })
            console.log(data)
            localStorage.setItem('currentUser', JSON.stringify(data))
            return data;
        }

        dispatch({ type: 'LOGIN_ERROR', error: data.error })
        return;
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error })
    }

}

export async function getUser(id){
    return await fetch(`${ROOT_URL}/users/${id}`)
}


export async function registerUser(){
    return null;
}

export async function logout(dispatch) {
    
    dispatch({ type: 'LOGOUT' })
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
}