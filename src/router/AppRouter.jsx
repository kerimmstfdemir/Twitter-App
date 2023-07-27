import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/login/Login"
import Home from "../pages/home/Home"
import Register from "../pages/register/Register"

const AppRouter = () => {
  return (
    <>
        <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </>
  )
}

export default AppRouter