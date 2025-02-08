import "./signup.css"
import { Link, useNavigate } from "react-router-dom";
import { Context } from "./context";
import { useContext,  useState } from "react";
import Loader from "./loder.jsx";
function Signup(){
    const nav=useNavigate()
    const {sname,setsname,smail,setsmail,spass,setspass,lmail,setlmail,lpass,setlpass,loader,swarn,stransport}=useContext(Context)
    const[mail,setmail]=useState(false)
    const[name,setname]=useState(false)
    const[pass,setpass]=useState(false)
    const[cmail,setcmail]=useState("")
    const[cname,setcname]=useState("")
    const[cpass,setcpass]=useState("")

    function submithandle(e){
        e.preventDefault()
        let valid=true
        if(!cmail){
            setmail(true)
            valid=false
        }else{
            setmail(false)
            valid=true
        }
        if(!cpass){
            setpass(true)
            valid=false
        }else{
            setpass(false)
            valid=true
        }
        if(!cname){
            setname(true)
            valid=false
        }else{
            setname(false)
            valid=true
        }
                if(valid){
                setsname(cname)
                setsmail(cmail)
                setspass(cpass)
                }
    }
    return(
        <>
        <form class="modern-form" onSubmit={submithandle}>
            {swarn?<p id="warn4">Email Exists!</p>:""}
  <div class="form-title">Sign Up</div>

  <div class="form-body">
    <div class="input-group">
      <div class="input-wrapper">
        <svg fill="none" viewBox="0 0 24 24" class="input-icon">
          <circle
            stroke-width="1.5"
            stroke="currentColor"
            r="4"
            cy="8"
            cx="12"
          ></circle>
          <path
            stroke-linecap="round"
            stroke-width="1.5"
            stroke="currentColor"
            d="M5 20C5 17.2386 8.13401 15 12 15C15.866 15 19 17.2386 19 20"
          ></path>
        </svg>
        <input
        id={name?"warn1":""}
          required=""
          placeholder="Full name"
          class="form-input"
          type="text"
         onChange={(e)=>setcname(e.target.value)}/>
      </div>
    </div>

    <div class="input-group">
      <div class="input-wrapper">
        <svg fill="none" viewBox="0 0 24 24" class="input-icon">
          <path
            stroke-width="1.5"
            stroke="currentColor"
            d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
          ></path>
        </svg>
        <input
         id={mail?"warn2":""}
          required=""
          placeholder="Email"
          class="form-input"
          type="email"
          onChange={(e)=>setcmail(e.target.value)}
        />
      </div>
    </div>

    <div class="input-group">
      <div class="input-wrapper">
        <svg fill="none" viewBox="0 0 24 24" class="input-icon">
          <path
            stroke-width="1.5"
            stroke="currentColor"
            d="M12 10V14M8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8C6 6.89543 6.89543 6 8 6Z"
          ></path>
        </svg>
        <input
         id={pass?"warn3":""}
          required=""
          placeholder="Password"
          class="form-input"
          type="password"
          onChange={(e)=>setcpass(e.target.value)}
        />
             </div>
    </div>
  </div>

  <button class="submit-button" type="submit" onClick={submithandle}>
    <span class="button-text">Create Account</span>
    <div class="button-glow"></div>
  </button>

  <div class="form-footer">
    <Link class="login-link" to="/login">
      Already have an account? <span>Login</span>
    </Link>
  </div>
</form>

{loader?<Loader/>:""}
{stransport?nav("/login"):""}

        </>
    )
}
export default Signup;