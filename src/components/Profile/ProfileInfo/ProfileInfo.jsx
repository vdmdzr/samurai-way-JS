import React from "react"
import s from './ProfileInfo.module.css'


export const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.profileMessages}>
                <img className={s.topImage}
                    src="https://c.wallhere.com/images/88/fc/0a6c07bf86e47b928c5d7699f8a4-1760483.jpg!d"
                    alt=""/>
            </div>
            <div className={s.profileMesegges}>
                JS
            </div>
        </div>
    );
};
