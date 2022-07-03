import React from 'react'
import Error404 from "./pages/Error404";
import {Routes,Route,Navigate} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Jun from "./pages/Jun";
import JunPlus from "./pages/JunPlus";




export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUN:'/jun',
    JUNPLUS:'/jun-plus'
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Routes >

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUN} element={<Jun/>}/>
                <Route path={PATH.JUNPLUS} element={<JunPlus/>}/>


                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
