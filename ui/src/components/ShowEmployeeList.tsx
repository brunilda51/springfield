import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EmployeeCard from './EmployeeCard';

class ShowEmployeeList extends React.Component<any, any>  {
  constructor(props : any) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/employees/')
      .then(res => {
        this.setState({
          employees: res.data
        })
      })
      .catch(err =>{

      })
  };


  render() {
    const employees = this.state.employees;
    let employeeList;

    if(!employees) {
      employeeList = "there is no employee record!";
    } else {
      employeeList = employees.map((employee: any, k: any) =>
        <EmployeeCard employee={employee} key={k} />
      );
    }

    return (
      <div className="">
            <h2 className="text-center">Employees List</h2>
          <Link to="/create-employee" className="link">
               Add New Employee
              </Link>
              <br />
              <Link to="/employee-details" className="link">
               Employee Stats
              </Link>
          <div className="row">
                {employeeList}
          </div>
          </div>
    );
  }
}

export default ShowEmployeeList;