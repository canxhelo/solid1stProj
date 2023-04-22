import{Component}from "solid-js"
import AppRoutes from "./router";
import { useAuthState } from "./context/auth";

const App :Component = () => {
  const authState= useAuthState()!

  return(
    <>
    <div class="text-white">
      <div>
        Is Authenticated:{`${authState.isAuthenticated}`}
      </div>
      <div>
        Is Loading {`${authState.loading}`}
      </div>
    </div>
    <div id='popups'></div>
      <AppRoutes></AppRoutes>
    </>
  )

}
export default App;