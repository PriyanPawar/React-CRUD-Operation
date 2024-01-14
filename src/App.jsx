import React from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import HomeCrud from "./Components/HomeCrud"
import Createusers from "./Components/Createusers"
import Users from "./Components/Users"
import EditUser from "./Components/EditUser"
// import Register from "./Components/Register"

const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <HomeCrud/>
            <Routes>
                <Route element={<Createusers/>} path='/'/>
                <Route element={<Users/>} path='/users'/>
                <Route element={<EditUser/>} path='/edit/:index'></Route>
            </Routes>
            </BrowserRouter>
        </div>
        // <Register/>
    )
}
export default App
// npx json-server Backend/db.json --watch port 5000