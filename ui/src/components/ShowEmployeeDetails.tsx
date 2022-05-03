import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

export default function ShowEmployeeDetails(props: any) {
  const [average, setAverage] = useState(0);
  useEffect(() => {
    axios
      .get('http://localhost:8082/api/employees/')
      .then(res => {
        const ages = res.data.map((user : any) => parseInt(user.age));
       setAverage(Math.floor(getAverage(ages)))
      })
      .catch(err => {
      })
  });

  const getAverage = (arr : any) => {
    const reducer = (total: any, currentValue: any) => total + currentValue;
    const sum = arr.reduce(reducer)
    return sum / arr.length;
  }
  return (
    <div>
    Average age of employees is: {average}
    </div>
  )
}