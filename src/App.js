import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./components/layout/Navbar";
import About from "./components/layout/About";
import Employees from "./components/employees/Employees";
import EmployeeDetails from "./components/employees/EmployeeDetails";
import Stocks from "./components/stocks/Stocks";
import StocksDetails from "./components/stocks/StocksDetails";
import Home from "./components/layout/Home";



let App = () => {
  return (
    <React.Fragment>
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/employees" component={Employees}/>
                <Route exact path="/employees/:id" component={EmployeeDetails}/>
                <Route exact path="/stocks" component={Stocks}/>
                <Route exact path="/stocks/:id" component={StocksDetails}/>
            </Switch>
        </Router>


    </React.Fragment>
  );
};

export default App;

