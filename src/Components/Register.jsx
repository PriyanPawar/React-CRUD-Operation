import axios from "axios";
import style from "./user.module.css"
import { useState } from "react";
function Register(){
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit=(event)=>{
        const user={name,phone,password,email};
        axios.post("http://localhost:8080/users",user).then(()=>{
            console.log("Data Has Been Updated");
        })
        event.preventDefault();
    }
    return(
      <form id={style.nav}>
        <label>Enter Your Name:
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </label><br/>
        <label>Enter Your Phone:
            <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </label><br/>
        <label>Enter Your Email:
            <input type="tel" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </label><br/>
        <label>Enter Your Password:
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </label><br/>
        <input type="submit" onClick={handleSubmit}/>
      </form> 
    )
}
export default Register;