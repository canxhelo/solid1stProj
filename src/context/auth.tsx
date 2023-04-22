import {
  Accessor,
  createContext,
  createSignal,
  onCleanup,
  onMount,
  ParentComponent,
  Setter,
  useContext,
} from "solid-js";
import { createStore } from "solid-js/store";
import Loader from "../components/utils/Loader";


type AuthStateContextValues = {
  isAuthenticated: boolean;
  loading: boolean;
};
const initialState = () => ({
  isAuthenticated: false,
  loading: true,
});
const AuthStateContext = createContext<AuthStateContextValues>();

const AuthProvider: ParentComponent = (props) => {
  const [store, setStore] = createStore(initialState());


  onMount(async ()=>{
    try {
      await authenticateUser();
    }catch(error:any){
      console.log("Error")

    }finally{
      setStore("loading",false)

    }

  })





  const authenticateUser = async () => {
    return new Promise((res,rej) => {
      setTimeout(() => {
        setStore("isAuthenticated",true);
        res(true)
      }, 4000);
    });
  };

  return (
    <AuthStateContext.Provider value={store}>
      
      {/* {props.children} */}
      <Loader size={100}></Loader>

    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);

export default AuthProvider;
