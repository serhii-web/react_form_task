import React, { useContext, useState } from "react";
import { ContextForms } from '../../App';
import './Form.scss';

export const Form = () => {
  const [inputValue, setInputValue] = useState({
    login: '',
    password: ''
  });

  const { users, setFormLogIn, setShowMessage } = useContext(ContextForms)

  const handleChange = (e) => {
    const {name, value} = e.target;

    setInputValue(state => ({...state, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(user => user.login === inputValue.login && user.password === inputValue.password)

    if (!user) return

    setTimeout(() => {
      setShowMessage(false);
      setFormLogIn(false);
    }, 3000);

    setShowMessage(true);
    setInputValue({
      login: '',
      password: ''
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
    >
      <div className="form__name form-field">
      <span className="form__title">Login</span>
        <input
          name="login"
          type="text"
          value={inputValue.login}
          onChange={handleChange}
          placeholder="Login..."
        />
      </div>
      <div className="form__paswword form-field">
        <span className="form__title">Password</span>
        <input
          name="password"
          type="password"
          value={inputValue.password}
          onChange={handleChange}
          placeholder="Password..."
        />
      </div>
      <div className="form__button">
        <button
          type="submit"
          className="button"
        >LogIn</button>
      </div>
    </form>
  )
}