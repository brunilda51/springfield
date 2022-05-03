import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateEmployee extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      gender: '',
      birthday: '',
      firstname: '',
      surname: '',
      address: '',
      age: '',
      quote: ''
    };
  }

  onChange = (e : any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e : any) => {
    e.preventDefault();

    const data : any = {
      username: this.state.username,
      gender: this.state.gender,
      birthday: this.state.birthday,
      firstname: this.state.firstname,
      surname: this.state.surname,
      address: this.state.address,
      age: this.state.age,
      quote: this.state.quote
    };

    axios
      .post('http://localhost:8082/api/employees',  data )
      .then(res => {
        this.setState({
          username: '',
          gender: '',
          birthday: '',
          firstname: '',
          surname: '',
          age: '',
          address: '',
          quote: ''
        })
        this.props.history.push('/');
      })
      .catch(err => {

      })
  };

  render() {
    return (
      <div className="CreateEmployee">
        <div className="container">
              <Link to="/" className="link">
                Show Employee List
              </Link>
              <h3 className="display-4 text-center">Add Employee</h3>
              <form noValidate onSubmit={this.onSubmit}>
              <div className='row'>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Username'
                    name='username'
                    className='form-control'
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Firstname'
                    name='firstname'
                    className='form-control'
                    value={this.state.firstname}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Surname'
                    name='surname'
                    className='form-control'
                    value={this.state.surname}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='birthday'
                    name='birthday'
                    className='form-control'
                    value={this.state.birthday}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <select name="gender" id="gender" value={this.state.gender } onChange={this.onChange}>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="diverse">Diverse</option>
                  </select>

                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Address of the Employee'
                    name='address'
                    className='form-control'
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='Age of the Employee'
                    name='age'
                    className='form-control'
                    value={this.state.age}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Quote of the Employee'
                    name='quote'
                    className='form-control'
                    value={this.state.quote}
                    onChange={this.onChange}
                  />
                </div>

                </div>  <input
                  type="submit"
                  className="submit"
                />

              </form>
            </div>
          </div>
    );
  }
}
export default CreateEmployee;