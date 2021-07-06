import { useAuthDispatch, useAuthState } from "../../Services/Auth/context";
import React, { useState, useEffect, useReducer } from "react";
import { getUser, ROOT_URL } from "../../Services/Auth/actions";
import { useNavigate } from "react-router";
import Entry from "../../Components/Entry";

import './Dashboard.css'




export default function Dashboard() {

    const dispatch = useAuthDispatch();
    const userStatus = useAuthState();
    const [employee, setEmployee] = useState(false);
    const [reimbursements, setReimbursements] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if(userStatus.userId != ""){
            getUser(userStatus.userId)
              .then(response => response.json())
              .then(setEmployee)
        } else {
            navigate('/login');
        }
    }, [userStatus] )
    

    const options = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json', 
            'Accept': '*',
            'Authorization': `Bearer ${userStatus.jwt}`
        }
    }

    useEffect(() => {
        fetch(`${ROOT_URL}/reimbursements`, options).then(
            response => response.json()).then(response => response.content).then(
                setReimbursements
            )
    }, [])



    console.log(reimbursements)
    if(employee.active){
        if(reimbursements){
            return (
        <div className="container-flex emp-content">
            <h1 className="table-title">reimbursements</h1>
            <div className="container">
              <table className="table table-hover  table-contents">
                <thead className="table-head">
                  <tr>
                    <th scope="col">ID #</th>
                    <th scope="col-2">Amount</th>
                    <th scope="col-2">Submitted</th>
                    <th scope="col-2">Author</th>
                    <th scope="col-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {reimbursements.map( (req) => 
                    (<Entry req={req} />))
                  }
                </tbody>
              </table>
            </div>
             
        </div>  
      );
        } 
        return (
            <div className="container emp-content">
                <h1>loading...</h1>
            </div>
        );
      
        
    } 

    return (
        <h1>loading...</h1>
    );

    
}