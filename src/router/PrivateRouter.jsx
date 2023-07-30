import  Home  from "../pages/home/Home"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PrivateRouter = () => {
    const { loginInformation } = useSelector((state) => state.loginInfos)
  return (
    <>
    {loginInformation ? <Home /> : <Navigate to="/"/> }
    </>
  )
}

export default PrivateRouter