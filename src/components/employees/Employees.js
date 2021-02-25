import React ,{useState,useEffect} from "react";
import Axios from 'axios';
import {Link} from 'react-router-dom';


let Employees= ()=> {

    let [employees, setEmployees] = useState([]);
    let [errorMessage,  setErrorMessage] = useState('');

    useEffect(()=>{
        let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/77fd2f17e30dd74e29dc39156420be1a/raw/9f872818c85abd63999200ebc963907f9197f812/customers.21-10-2020.json';
        Axios.get(dataURL).then((response)=>{
            setEmployees(response.data);
        }).catch((error)=> {
            setErrorMessage(error);
        });

    }, []);



    return(
       <React.Fragment>
           <div className="container mt-3">
               <div className="row">
                   <div className="col">
                       <p className="h4 text-primary">Employees List</p>
                       <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis consectetur consequuntur delectus eos eveniet ex, ipsa itaque minus necessitatibus obcaecati odit omnis quam qui quibusdam reprehenderit soluta vero voluptas!</p>
                   </div>
               </div>
               <div className="row mt-3">
                   <div className="col">
                       <table className="table table-hover table-striped  text-center ">
                           <thead className="bg-secondary text-white">
                           <tr>
                               <td>SNO</td>
                               <td>Name</td>
                               <td>Email</td>
                               <td>Phone Number</td>
                               <td>Location</td>
                           </tr>
                           </thead>
                           <tbody>
                           {
                               employees.length > 0 ?
                                   <React.Fragment>
                                       {
                                           employees.map(employee => {
                                               return(
                                                   <tr key={employee.login.uuid}>
                                                       <td>{employee.login.uuid.substr(employee.login.uuid.length -4)}</td>
                                                       <Link to={`/employees/${employee.login.uuid}`} >
                                                       <td className="font-weight-bold text-primary"><u>{employee.name.title}.{employee.name.first} {employee.name.last}</u></td>
                                                            </Link>
                                                       <td>{employee.email}</td>
                                                       <td>{employee.phone}</td>
                                                       <td>{employee.location.country}</td>
                                                   </tr>
                                               )
                                           })
                                       }

                                   </React.Fragment> : null
                           }

                           </tbody>
                       </table>
                   </div>
               </div>
           </div>

       </React.Fragment>
    )
};

export default Employees;