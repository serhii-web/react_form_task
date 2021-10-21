import React, { useState, useContext } from "react";
import './FormCreateUser.scss';
import { ContextForms } from '../../App';

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const FormCreateUser = () => {
  const [user, setUser] = useState({
    login: '',
    password: '',
    acceptedPassword: '',
    email: ''
  });

  const [error, setError] = useState([]);
  const { setUsers, setFormSignIn} = useContext(ContextForms);

  const handleChange = (e) => {
    const {name, value} = e.target;

    if(error.includes(name)) {
      setError(prev => prev.filter(el => el !== name))
    }
  
    setUser({...user, [name]: value})
  }

  const addError = (value) => {
    setError(prev => [...prev, value]);
  }

  const handleValidation = (e) => {
    const {name, value} = e.target;

    switch(name){
      case 'login':
      case 'password': 
        if (value.trim().length < 6) {
          addError(name)
        }

        return;
      case 'acceptedPassword':
        if (value !== user.password) {
          addError(name)
        }

        return;
      case 'email':

        if (!(re.test(value))) {
          addError(name)
        }

        return;
      
        default:
          return;
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.values(user).every(el => el);
  
    if (!values) return;
    if (!!error.length) return;

    setUsers(prev => [...prev, user]);
    setUser({
      login: '',
      password: '',
      acceptedPassword: '',
      email: ''
    });

    setFormSignIn(false);
  }

  return (
    <form
      className="user form-field"
      onSubmit={handleSubmit}
    >
      <div className="user__name form-field">
        <span className="user__title">Login</span>
        <input
          name="login"
          type="text"
          className="input-field"
          value={user.login}
          onChange={handleChange}
          onBlur={handleValidation}
          placeholder="Login..."
        />
        {error.includes('login') && <span className="error">Login must be more then six sumbol</span> }
      </div>
      <div className="user__password form-field">
        <span className="user__title">Password</span>
        <input
          name="password"
          type="password"
          className="input-field"
          value={user.password}
          onChange={handleChange}
          onBlur={handleValidation}
          placeholder="Password..."
        />
        {error.includes('password') && <span className="error">Password must contein more then six symbols</span>}
      </div>
      <div className="user__password form-field">
      <span className="user__title">Check password</span>
        <input
          name="acceptedPassword"
          type="password"
          className="input-field"
          value={user.acceptedPassword}
          onChange={handleChange}
          onBlur={handleValidation}
          placeholder="Password..."
        />
        {error.includes('acceptedPassword') && <span className="error">Uncorect password</span>}
      </div>
      <div className="user__email form-field">
        <span className="user__title">Email</span>
        <input
          name="email"
          type="email"
          className="input-field"
          value={user.email}
          onChange={handleChange}
          onBlur={handleValidation}
          placeholder="Email..."
        />
        {error.includes('email') && <span className="error">Not valid input</span>}
      </div>
      <button type="submit" className="button">Create</button>
    </form>
  )
}