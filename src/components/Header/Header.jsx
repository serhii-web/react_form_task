import React, { useContext } from "react";
import './Header.scss';
import { ContextForms } from '../../App'

export const Header = () => {
  const { setFormLogIn, setFormSignIn } = useContext(ContextForms)

  return(
    <div className="header">
      <div className="header__buttons">
      <button 
        type="button"
        className="header__button button"
        onClick={() => {
          setFormLogIn(false)
          setFormSignIn(true)
        }}
      >
        SignIn
      </button>
      <button
        type="button"
        className="header__button button"
        onClick={() => {
          setFormLogIn(true)
          setFormSignIn(false)
        }}
      >
        LogIn
      </button>
      </div>
    </div>
  )
}
