import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages"
import s from "./HW5.module.css"

function Header() {
    return (
        <div className={s.nav}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.normal}>PreJUN</NavLink>
            <NavLink to={PATH.JUN} className={s.normal}>JUN</NavLink>
            <NavLink to={PATH.JUNPLUS} className={s.normal}>JUNPLUS</NavLink>
            <div className={s.active}>
                <span className={s.span1}>{}</span>
                <span className={s.span2}>{}</span>
                <span className={s.span3}>{}</span>
            </div>

        </div>
    )
}

export default Header
