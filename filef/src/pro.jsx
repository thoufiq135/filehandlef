import "./pro.css"
import { useState } from "react"
import { useContext } from "react"
import { Context } from "./context"
function Pro(){
    // const cookie=useContext(Context)
    const [mess,setmess]=useState([])
    const[warning,setwarning]=useState(false)
    const[display,setdisplay]=useState(false)
    const [cookie,setcookie]=useState(null)
    
   async function data(){   
                     try{
                         const response=await fetch("http://localhost:2000/Protected",{
                             method:"GET",
                             credentials: "include",
                             headers: { "Content-Type": "application/json" }
                         })
                         const r = await response.json()
                         console.log(r)
                         if(response.status!==401&&response.status!==500){
                            setmess(r)
                            setwarning(false)
                            setdisplay(true)
                         }else{
                          
                            setwarning(true)
                            setdisplay(false)
                         }
                     }  catch(e){
                         console.log("pro fetch error",e)
                     }      
    }
async function fetchcookie() {
    try{
        const coore=await fetch("http://localhost:2000/Protected/fetchcookie",{
            method:"GET",
            credentials:"include"
        })
        const res=await coore.json()
        console.log("coree=",res.message)
        if(res.message){
            setcookie(res.message)
        }
    }catch(e){
        console.log(e)
    }
   
}
    return(
        <>
        {display?<>
        <div id="data">
            {mess}<br/>{cookie?<><h1>Cookie=</h1><input id="input" value={cookie}></input></>:""}

        </div><br/>{cookie?<h4>Cookie={cookie}</h4>:<button onClick={fetchcookie}>see cookie</button>}

        </>:<>
        {warning?<><div id="err">NOT FOUND</div></>:<><button onClick={data}> DATA
        </button></>}
        </>}
        </>
    )
}
export default Pro;