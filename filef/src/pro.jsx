import "./pro.css"
import { useState } from "react"
function Pro(){
    const [mess,setmess]=useState([])
    const[warning,setwarning]=useState(false)
    const[display,setdisplay]=useState(false)
    
   async function data(){
       
                 const tok=localStorage.getItem("token")
                 console.log("got token=",tok)
                 if(tok){
                     try{
                         const response=await fetch("https://filehandleb.vercel.app/Protected",{
                             method:"GET",
                             headers:{
                                 "Authorization": `Bearer ${tok}`, 
                                 "Content-Type": "application/json"                         
                             }
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
             
        

    }

    return(
        <>
        {display?<>
        <div id="data">
            {mess}
        </div>
        </>:<>
        {warning?<><div id="err">NOT FOUND</div></>:<><button onClick={data}> DATA
        </button></>}
        </>}
        </>
    )
}
export default Pro;