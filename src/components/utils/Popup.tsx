import { Component, Show, createSignal } from "solid-js";



const Popup: Component = () => {
    const [isOpen, setOpen] = createSignal(false)

    return (
        <div class="reative">
            <button onClick={()=>{setOpen(!isOpen())}}>Open Me</button>
            <Show when={isOpen()}>

                <div class=" flex-it w-20 h-20 fixed bg-black bottom-10 popup ">
                    Hello World
                </div>
            </Show>
        </div>
    )
}
export default Popup;