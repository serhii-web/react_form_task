import React, { useState, createContext } from 'react';
import { Form } from './components/Form';
import './App.scss';
import { Header } from './components/Header';
import { FormCreateUser } from './components/FormCreateUser/FormCreateUser';

export const ContextForms = createContext()

function App() {
  const [formLogIn, setFormLogIn] = useState(false);
  const [formSignIn, setFormSignIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const context = {setFormLogIn, setFormSignIn, setUsers, setShowMessage, users};

  return (
    <ContextForms.Provider value={context}>
      <div className="App">
        <Header />
        {formLogIn && <Form />}
        {formSignIn && <div className="container"><FormCreateUser /></div>}
        {showMessage && <h1 className="message">Welcome!!</h1>}
      </div>
    </ContextForms.Provider>
  );
}

export default App;
