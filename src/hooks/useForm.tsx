import { createStore } from "solid-js/store";
import { AuthForm, Form, GliderInputEvent, RegisterForm, SubmitCallback } from "../types/Form";




const useForm = <T extends Form> (initialForm: T) => {

    const [form, SetForm] =createStore(initialForm);
    const handleInput = (e: GliderInputEvent) => {
        const { name, value } = e.currentTarget
        SetForm(name as any, value as any)
        // me siper i tregojme qe eshte pjese e registerform 
    }

    const submitForm = (submitCallBack:SubmitCallback<T>) =>()=> {
    submitCallBack(form)    }


    return {
        handleInput,
        submitForm
    }
}

export default useForm;