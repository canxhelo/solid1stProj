import { Component, For, createSignal, createUniqueId, onMount } from "solid-js";
import { FaRegularImage, } from "solid-icons/fa";
import MainLayout from "../components/layouts/Main";
import GlidePost from "../components/glides/GlidePost";
import { Glide } from "../types/Glide";
import { useAuthState } from "../context/auth";

const HomeScreen: Component = () => {
  const [content, setContent] = createSignal("");// create a signal which observes a variable and changes it everytime we set a new value to second one
  const [glides, setGlides] = createSignal<Glide[]>([]);
  // createEffect(()=>{
  //   if((glides().length>=3)){
  //     alert("3 glides already")
  //   }
  //   console.log(glides().length)// behet call only once  pas mount dhe ben execute kur ka ndryshime ne varesi me ate qe eshte lidhur afersisht si observer 
  //   //cl me siper ndryshon kur shtojme glide
  // })


  const createGlide = () => {
    const glide: Glide = {
      id: createUniqueId(),
      content: content(),
      user: {
        nickName: "User123",
        avatar: "https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png",
      },
      likeCount: 0,
      subglidesCount: 0,
      date: new Date(),

    }// me siper krijuam te dhenat per nje glide te nje useri perkates  
    setGlides([glide, ...glides()])// glide is an array dhe sintaksa push a new element to glides array by calling setGlide
    setContent("")
    // console.log(JSON.stringify(glides()))//??? dont know what exatcly  it does
  }
  return (
    <MainLayout>
      {/* HOME PAGE START */}
      <div class="flex-it py-1 px-4 flex-row">
        <div class="flex-it mr-4">
          <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
            <img
              class="rounded-full"
              src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
            ></img>
          </div>
        </div>
        {/* MESSENGER START */}
        <div class="flex-it flex-grow">
          <div class="flex-it">
            <textarea
              value={content()}
              onInput={(event) => {
                setContent(event.currentTarget.value);
              }}
              name="content"
              rows="1"
              id="glide"
              class="bg-transparent resize-none overflow-hidden block !outline-none !border-none border-transparent focus:border-transparent focus:ring-0 text-gray-100 text-xl w-full p-0"
              placeholder={"What's new?"}
            />
          </div>
          <div class="flex-it mb-1 flex-row xs:justify-between items-center">
            <div class="flex-it mt-3 mr-3 cursor-pointer text-white hover:text-blue-400 transition">
              <div class="upload-btn-wrapper">
                <FaRegularImage class="cursor-pointer" size={18} />
                <input type="file" name="myfile" />
              </div>
            </div>
            <div class="flex-it w-32 mt-3 cursor-pointer">
              <button
                onClick={createGlide}
                //therret funksionin by clicking on element 
                type="button"
                class="
                   disabled:cursor-not-allowed disabled:bg-gray-400
                   bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition duration-200"
              >
                <div class="flex-it flex-row text-sm font-bold text-white items-start justify-center">
                  <span>Glide It</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* MESSENGER END */}

      </div>
      <div class="h-px bg-gray-700 my-1" />
      {/* GLIDE POST START */}
      <For each={glides()}>
        {
          (glide) =>
            <GlidePost glide={glide} />
        }

      </For>      


    </MainLayout>
  );
};

export default HomeScreen;
