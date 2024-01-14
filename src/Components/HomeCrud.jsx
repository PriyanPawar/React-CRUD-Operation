import React from "react";
import style from "./home.module.css"
import { Link } from "react-router-dom";
const HomeCrud=()=>{
return(
    <section id={style.nav}>
        <Link to="/">CREATE-USERS</Link>
        <Link to="/users">USERS</Link>
    </section>
)
}
export default HomeCrud