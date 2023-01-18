/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Header(){
    return(
       
        <div  class="w-full h-14  flex flex-col justify-center bg-gradient-to-br from-purple-600 to-blue-500 my-auto">
         
          <h1 class=" mx-5 text-2xl font-extrabold dark:text-white"> 💀Meme Generator<span class="bg-blue-100 text-blue-800 text-xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">Editor</span></h1>

          <img  className="react" src={"react.png"} />
          
        </div>
       
    );
}

export default Header ;