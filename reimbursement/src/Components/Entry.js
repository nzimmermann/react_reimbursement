import './../Pages/Dashboard/Dashboard.css'
import React, {useState} from 'react';




export default function Entry({req}){

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    if(!open){
        return (
            <>
              <tr onClick={handleClick} >
                  <td>{req.id}</td>
                  <td>{req.amount}</td>
                  <td>{req.submitted}</td>
                  <td>{req.authorUsername}</td>
                  <td>{req.reimbursementStatus}</td>
              </tr>
            </>
        );
    } else {
        return (
            <>
                <tr onClick={handleClick} className="row-selected">
                    <td>{req.id}</td>
                    <td>{req.amount}</td>
                    <td>{req.submitted}</td>
                    <td>{req.authorUsername}</td>
                    <td>{req.reimbursementStatus}</td>
                </tr>
                
                <td colSpan="5" >
                    <div className="container row-container">

                        {req.description}
                    
                    </div>
                </td>
                
            </>
        );
    }
    

}