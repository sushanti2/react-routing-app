import React,{useState,useEffect} from "react";
import {useParams,Link} from "react-router-dom";
import Axios from "axios";

let EmployeeDetails= ()=> {
    let employeeId = useParams().id;
    let [selectedEmployee, setSelectedEmployee] = useState({});
    let [errorMessage, setErrorMessage] = useState('');

    useEffect(()=> {
        let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/77fd2f17e30dd74e29dc39156420be1a/raw/9f872818c85abd63999200ebc963907f9197f812/customers.21-10-2020.json';
        Axios.get(dataURL).then((response)=> {
            let anEmployee = response.data.find(employee => employee.login.uuid === employeeId);
            setSelectedEmployee(anEmployee);

        }).catch((error)=>{
            setErrorMessage(error);
        });

    } ,[]);

    return(
       <React.Fragment>
           <div className="container mt-3">
               <div className="row">
                   <div className="col">
                       <p className="h4 text-primary">Employees Details</p>
                       <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid architecto cupiditate debitis dicta, dolore doloremque, eligendi eum facere, hic inventore iusto laboriosam laudantium molestias obcaecati quam repellat temporibus vel!</p>
                   </div>
               </div>
               <div className="row mt-5">
                   <div className="col">
                       {
                           Object.keys(selectedEmployee).length > 0 ?
                               <React.Fragment>
                                   <div className="card">
                                       <div className="card-header bg-secondary text-white">
                                           <p className="h4">{selectedEmployee.name.title}. {selectedEmployee.name.first} {selectedEmployee.name.last}</p>

                                       </div>
                                       <div className="card-body bg-warning">
                                           <div className="row">
                                               <div className="col-md-3 d-flex justify-content-center align-items-center ">
                                                   <img src={selectedEmployee.picture.large} alt="/" width={500}  className="img-fluid img-thumbnail" />
                                                   
                                               </div>
                                               <div className="col-md-9 ">
                                                   <ul className="list-group">
                                                       <li className="list-group-item font-weight-bold">
                                                           Age : {selectedEmployee.dob.age}.Yrs
                                                       </li>
                                                       <li className="list-group-item font-weight-bold">
                                                           Email : {selectedEmployee.email}
                                                       </li>
                                                       <li className="list-group-item font-weight-bold">
                                                           Timezone : {selectedEmployee.location.timezone.description}
                                                       </li>
                                                       <li className="list-group-item font-weight-bold">
                                                           Postcode : {selectedEmployee.location.postcode}
                                                       </li>
                                                       <li className="list-group-item font-weight-bold">
                                                           City : {selectedEmployee.location.city}
                                                       </li>
                                                   </ul>
                                               </div>
                                           </div>
                                           <Link to='/employees' className="btn btn-deep-purple btn-sm mt-3 font-weight-bold">Back</Link>

                                       </div>
                                   </div>
                               </React.Fragment> : null
                       }

                   </div>
               </div>
           </div>

       </React.Fragment>
    )
};

export default EmployeeDetails;

