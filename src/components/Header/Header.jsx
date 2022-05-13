import React from "react"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";


export const Header = (props) => {
    return (

      <header className={s.header}>
          <img
            src="https://stonerussia.ru/images/upload/202101041536080.png"/>
          <div className={s.loginBlock}>
              {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
          </div>
      </header>
    )
}