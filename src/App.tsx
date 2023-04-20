import{Component}from "solid-js"
import AppRoutes from "./router";

const App :Component = () => {


  return(
    <>
    <div id='popups'></div>
      <AppRoutes></AppRoutes>
    </>
  )

}
export default App;