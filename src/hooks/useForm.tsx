import { createStore } from "solid-js/store";
import { AuthForm, Form, GliderInputEvent, RegisterForm, SubmitCallback } from "../types/Form";
import { Accessor, For } from "solid-js";

declare module "solid-js" {
    namespace JSX {
        interface Directives {
            validate: Validator[]
        }
    }
}

type Validator = (element: HTMLInputElement, ...rest: any[]) => string;

export const maxLengthValidator: Validator = (ref: HTMLInputElement, maxLength = 7) => {
    if (ref.value.length === 0 || ref.value.length < maxLength) { return ""; }// input valid
    return `${ref.name} should be less than ${maxLength} characters `

}
const useForm = <T extends Form>(initialForm: T) => {

    const [form, SetForm] = createStore(initialForm);
    const [errors, setError] = createStore<Form>()
    const handleInput = (e: GliderInputEvent) => {
        const { name, value } = e.currentTarget
        SetForm(name as any, value as any)
        // me siper i tregojme qe eshte pjese e registerform 
    }
    const validate = (ref: HTMLInputElement, accessor: Accessor<Validator[]>) => {
        const validators = accessor() || [];
        ref.onblur = checkValidity(ref, validators)//called when unselection input
        
    }


    const checkValidity = (element: HTMLInputElement, validators: Validator[]) => () => {

        for (const validator of validators) {

            const message = validator(element)

            if (!!message) {
                setError(element.name, message)
            }

            else {
                setError(element.name, '')
            }
        }

        console.log(JSON.stringify(errors))
    }

    const submitForm = (submitCallBack: SubmitCallback<T>) => () => {
        submitCallBack(form)
    }


    return {
        handleInput,
        submitForm,
        validate
    }
}

export default useForm;