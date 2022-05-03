import axios from 'axios';
import '../App.css';

const EmployeeCard = (props: any) => {
    const  employee  = props.employee;

    function onDeleteClick () {
        axios
          .delete('http://localhost:8082/api/employees/'+props.employee.id)
          .then(res => {
            window.location.reload();
          })
          .catch(err => {
          })
      };
    return(
        <div className="card-container">
             <img height="100" width="auto" src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png" alt="" />
            <div className="desc">
                <h2>
                    {employee.firstname} { employee.surname }
                </h2>
                <p>{employee.gender}</p>
                <p>{employee.birthday}</p>
                <p>{employee.address}</p>
                <p>{employee.quote}</p>
                </div>

                <button className="delete" onClick={onDeleteClick}>Delete</button>
        </div>
    )
};

export default EmployeeCard;