import{Component}from "solid-js"
import AppRoutes from "./router";
import { useAuthState } from "./context/auth";

const App :Component = () => {
  

  return(
    <>
    <div id='popups'></div>
      <AppRoutes></AppRoutes>
    </>
  )

}
export default App;