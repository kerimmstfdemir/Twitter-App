/* eslint-disable jsx-a11y/img-redundant-alt */
import "./login.css"
import googleicon from "../../assets/google-icon.png"
import twittericon from "../../assets/twitter-icon.png"
import ForgotPassword from "./ForgotPassword"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../authentication/firebase"
import { loginInfos, loginSuccess } from "../../redux/features/loginInfoSlice"

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();

    const loginInforms = useSelector((state) => state.loginInfos)
    const { email, password } = loginInforms

    const googleProvider = new GoogleAuthProvider();

    const handleLogin = async () => {
        //? Regex for email format
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
        //? email format check
        if (email.match(reg)) {
            setEmailError(false)
        } else {
            setEmailError(true)
            alert("Invalid email format!")
        }
    
        //? password length check
        if (password.toString().length < 6) {
            setPasswordError(true)
            alert("Please enter a password at least 6 character!")
        } else {
            setPasswordError(false)
        }
    
        if (!emailError && !passwordError) {
            try {
            const { user } = await signInWithEmailAndPassword(auth, email, password)
            const { email: emailAddress, displayName, uid, metadata: { creationTime, lastSignInTime } } = user;
            dispatch(loginSuccess({ ...loginInforms, userInfo: { displayName, uid, metadata: { creationTime, lastSignInTime } }, email: emailAddress }))
    
            navigate("/home")
            alert("Logged in successfully!")
          } catch (error) {
            console.log(error.message)
            alert("Login failed!")
          }
        }
      }

      const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const { email: emailAddress, displayName, metadata: { creationTime, lastSignInTime }, uid, photoURL } = result.user
    
            dispatch(loginSuccess({ ...loginInforms, userInfo: { displayName, metadata: { creationTime, lastSignInTime }, uid, photoURL }, email: emailAddress }))
    
            navigate("/home")
            alert("Successfully logged in with Google!")
          })
      }

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid container-height">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={twittericon} className="img-fluid" alt="Twitter image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-center">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <img src={googleicon} alt="google-icon" style={{ width: "1.5rem", cursor: "pointer" }} onClick={signInWithGoogle} />
                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4 d-flex flex-column align-items-start align-items-lg-start">
                  <label className="form-label" htmlFor="emailinput" style={{ fontSize: "1.1rem", fontWeight: "600" }}>Email address : </label>
                  <input type="email" id="emailinput" className="form-control form-control-lg" style={{ fontSize: "1.1rem" }} placeholder="Enter a valid email address" onChange={(e) => dispatch(loginInfos({ ...loginInforms, email: e.target.value }))}/>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3 d-flex flex-column align-items-start align-items-lg-start">
                  <label className="form-label" htmlFor="password" style={{ fontSize: "1.1rem", fontWeight: "600" }}>Password :</label>
                  <input type="password" id="password" className="form-control form-control-lg" style={{ fontSize: "1.1rem" }} placeholder="Enter password" onChange={(e) => dispatch(loginInfos({ ...loginInforms, password: e.target.value }))}/>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" defaultValue id="remember-me" />
                    <label className="form-check-label" htmlFor="remember-me">
                      Remember me
                    </label>
                  </div>
                  <span className="text-primary" style={{ cursor: "pointer", textDecoration: "underline" }} data-bs-toggle="modal" data-bs-target="#forgotPassword">Forgot password?</span>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2 d-flex flex-column">
                  <button type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }} onClick={handleLogin} >Login</button>
                  <p className="medium fw-bold mt-2 pt-1 mb-0">Don't have an account? <span className="link-danger" style={{ cursor: "pointer" }} onClick={()=> navigate("/register")} >Register</span></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ForgotPassword />
    </>
  )
}

export default Login