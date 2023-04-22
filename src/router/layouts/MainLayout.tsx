import { Outlet, useNavigate } from "@solidjs/router";
import { Component, onMount } from "solid-js";
import { useAuthState } from "../../context/auth";

const MainLayout: Component = () => {
    const authState=useAuthState()!
    const navigate=useNavigate();
    onMount(()=>{
        if(!authState.isAuthenticated){
            navigate("/auth/login",{replace:true})// fshin historine rruges 
        }})
    

        if(!authState.isAuthenticated){
            return null;// sigurojme qe te mos ket shanc te kthehet ne homescreen 
            
        }
 
    return (
    <>
      
      <Outlet/>
    </>
  );
};

export default MainLayout;
