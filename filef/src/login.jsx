import "./login.css"
import { Link,useNavigate } from "react-router-dom";
import { useContext ,useState} from "react";
import { Context } from "./context";
import Loader from "./loder";
function Login(){
     const {setlmail,setlpass,loader,lwarn,ltransport}=useContext(Context)
     const nav=useNavigate()
         const[mail,setmail]=useState(false)
         const[pass,setpass]=useState(false)
         const[cmail,setcmail]=useState("")
         const[cpass,setcpass]=useState("")
         function submit(e){
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
                 if(valid){
                  
                    setlmail(cmail)
                    setlpass(cpass)
                    }

         }
    return(
        <>
        {loader?<Loader/>:""}
       
<form class="form" onSubmit={submit}>
    <div class="header">Sign In</div>
    <div class="inputs">
        <input id={mail?"warn5":""} placeholder="Email" class="input" type="text" onChange={(e)=>{setcmail(e.target.value)}}/>
        <input id={pass?"warn5":""} placeholder="Password" class="input" type="password" onChange={(e)=>{setcpass(e.target.value)}}/>
    <div class="checkbox-container">
                
    </div>
    <button class="sigin-btn"  onSubmit={submit}>Submit</button>
        <p class="signup-link">Don't have an account? <Link to="/Signup">Sign up</Link></p>
    </div>
    {lwarn?<p id="warn7">Invalid E-mail or Password</p>:""}
</form>
{ltransport?nav("/protected"):""}
        </>
    )
}
export default Login;