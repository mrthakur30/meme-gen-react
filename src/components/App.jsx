import React from "react";
import Header from "./Header" ;
import Meme from "./Meme";


function App(){
   
   const [allMemes , setAllMemes] = React.useState([]);

   const [url,setUrl] = React.useState();

   function changeMeme(){
      const randomNumber = Math.floor(Math.random() * allMemes.length);
      const uri = allMemes[randomNumber].url;
      setUrl(uri);
   }
     
  
   
   React.useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
          .then(res => res.json())
          .then(data=> setAllMemes(data.data.memes))
   },[])

    return(
    <div className="main">
       <Header />
       <Meme 
       isClicked = {changeMeme}
       url = {url}
       />
      
    </div>  
      );
}

export default App ;