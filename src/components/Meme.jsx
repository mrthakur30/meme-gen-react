
import React from "react";

function Form (props){

     //Use State Hook for Text
     const [text , setText] = React.useState({
      top: "",
      bottom: ""
    });
  
    function changeHandler(event){
        const {name,value} = event.target ;
        setText((prevValue)=>{
            return {
              ...prevValue,
              [name]: value
            }
        })
        props.isChanged(text);
    }
 
   
 
    return ( 
      <div >    
      <form className="input">
          <div class="flex justify-center space-x-16 mx-5" >
            <div class="mb-3 xl:w-96">
              <input
                type="text"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-lg
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        shadow-sm shadow-blue-600
        focus:shadow-md focus:shadow-blue-600 
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:border-2 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      name="top"    value={text.top} onChange={changeHandler}  placeholder="Top Text"
              />
          </div>
            <div class="mb-3 xl:w-96">
             <input
                type="text"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-lg
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        shadow-sm shadow-blue-600
        focus:shadow-md focus:shadow-blue-600
        focus:text-gray-700 focus:bg-white focus:border-2 focus:border-blue-600 focus:outline-none
      "
      name="bottom" value={text.bottom} onChange={changeHandler}  placeholder="Bottom Text" 
              />
            </div>
          </div>
      </form>



      <div class="flex flex-col items-center"  >
        <button onClick={()=>{props.isClicked()}} type="submit"  class=" hover:shadow-lg  hover:shadow-blue-600 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white ">
          <span class="relative px-5 py-2.5 hover:text-white transition-all ease-in duration-75 bg-white text-lg text-gray-800 rounded-md group-hover:bg-opacity-0">
            Get a new image🖼️
           </span>
         </button>
      </div> 
     
     <div className="meme">
          <img className="meme--image"  id="meme" src={props.url}></img>
          <h2 className="meme--text top"     value={text.top}>{text.top}</h2>
          <h2 className="meme--text bottom"  value={text.bottom}>{text.bottom}</h2>
        </div>
    </div>
    );
}

export default Form ;