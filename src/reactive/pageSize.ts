import { createRoot, createSignal, onCleanup, onMount } from "solid-js";

const getClientSizes = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
});

const pageSize = () => {
  const [value, setValue] = createSignal({
    height: document.body.clientHeight,
    width: document.body.clientWidth,
  });
  onMount(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleResize = () => {
    setValue(getClientSizes())

    };
  const isXl=()=>value().width>1280;
  const isLg=()=>value().width >1024;// japin true or false

  

  return {isXl,isLg , value};
};

export default createRoot(pageSize);
// eshte krijuar nje root qe nuk cleanup asiher
