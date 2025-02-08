import {Children, createContext, useEffect } from "react";
import { useState } from "react";

export const Context=createContext()

export const ContextProvider=({children})=>{
    const [sname,setsname]=useState("")
const [smail,setsmail]=useState("")
const [spass,setspass]=useState("")
const [lmail,setlmail]=useState("")
const [lpass,setlpass]=useState("")
const [loader,setloader]=useState(false)
const [swarn,setswarn]=useState(false)
const [stransport,setstransport]=useState(false)
const [lwarn,setlwarn]=useState(false)
const [ltransport,setltransport]=useState(false)
const [check,setcheck]=useState(false)


    // ------------------------------------------------------------------------signup-----------------------------------------------------
   useEffect(()=>{
    async function signuphandle(){
        if(smail&&spass&&sname){
            setloader(true)
            try{
                console.log("data came=",smail,spass,sname)
                const response=await fetch("https://filehandleb4.vercel.app/Signup",{
                   
                method:"POST",
                body:JSON.stringify({
                    Name:sname,
                    Email:smail,
                    Password:spass
                }),
                headers:{
                    "Content-Type": "application/json"
                }
                
            })
            const r= await response.json()
            console.log(r)
            if(response.status===401){
                setswarn(true)
                setstransport(false)
            }else{
                setswarn(false)
                setstransport(true)
            }
            await setloader(false)
            }catch(e){
            console.log("fetch error in signup=",e)
            }finally {
                setloader(false);  
            }
        }

    }   
    signuphandle()

   },[smail,spass,sname])
//    -----------------------------------------------------------------------------------login-----------------------------------------------------------
useEffect(()=>{
    async function loginhandle(){
        if(lmail&&lpass){
            setloader(true)
            try{
                console.log("data came=",lmail,lpass)
                const response=await fetch("https://filehandleb4.vercel.app/Login",{
                   
                method:"POST",
                body:JSON.stringify({
                    Email:lmail,
                    Password:lpass
                }),
                headers:{
                    "Content-Type": "application/json"
                }
                
            })
            const r= await response.json()
            if(response.status===401){
                setlwarn(true)
                setltransport(false)
            }else{
                localStorage.setItem("token",r)
                setlwarn(false)
                setltransport(true)
            }
            await setloader(false)
            }catch(e){
            console.log("fetch error in signup=",e)
            }finally {
                setloader(false);  
            }
        }

    }   
    loginhandle()

   },[lmail,lpass])
  
    return(
        <Context.Provider value={{sname,setsname,smail,setsmail,spass,setspass,lmail,setlmail,lpass,setlpass,loader,swarn,stransport,lwarn,ltransport,check,setcheck}}>
            {children}
        </Context.Provider>
    )
}
