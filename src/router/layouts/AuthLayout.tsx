import { Outlet, useNavigate } from "@solidjs/router";
import { Component, onMount } from "solid-js";
import { useAuthState } from "../../context/auth";



const AuthLayout:Component=()=>{
const AuthState=useAuthState()!
 
const navigate=useNavigate()

onMount(()=>{
    if(AuthState.isAuthenticated){
        navigate("/",{replace:true})// fshin historine rruges 
    }

})
    return(

        <>
        <Outlet/>
      </>    
      )
}



export default AuthLayout