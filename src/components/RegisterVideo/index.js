import React from "react";
import { StyledRegisterVideo } from "./styles";




export default function RegisterVideo(){
  const [formVisivel,setFormVisivel]=React.useState(false);

  

  return(
    <StyledRegisterVideo>
      <button className="add-video" onClick={()=> setFormVisivel(true)}>
        +
      </button>
      {formVisivel 
        ?(
          <form >
          <div>
            <button className="close-modal" onClick={()=> setFormVisivel(false)}>
              X
            </button>
            <input type="text" placeholder="Título do vídeo"/>
            <input type="text" placeholder="URL"/>
            <button type="submit">
              Cadastrar
            </button>
          </div>
        </form>
        )
        : false}
    
    </StyledRegisterVideo>
  )
};