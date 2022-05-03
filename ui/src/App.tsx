import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import CreateEmployee from './components/CreateEmployee';
import ShowEmployeeList from './components/ShowEmployeeList';
import ShowEmployeeDetails from './components/ShowEmployeeDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='wrapper'>
          <Routes>
          <Route path='/' element={<ShowEmployeeList />} />
          <Route path='/create-employee' element={<CreateEmployee />} />
          <Route path='/employee-details' element={<ShowEmployeeDetails />} />
          </Routes>
        </div>
      </Router>
    );
  }
}


export default App;
