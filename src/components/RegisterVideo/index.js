
import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(propsDoForm){
  const [values,setValues] = React.useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: (evento)=>{

      const value = evento.target.value;
      const name = evento.target.name;

      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm(){
      setValues({});
    }
  };
  
}


export default function RegisterVideo(){
  const formCadastro = useForm({
    initialValues:{titulo:"Aula 4 - Imersão React",url:"https://www.youtube..."}
  });
  const [formVisivel,setFormVisivel] = React.useState(false);
  
  return(
    <StyledRegisterVideo>
      <button className="add-video" onClick={()=> setFormVisivel(true)}>
        +
      </button>
      {formVisivel 
        ?(
          <form onSubmit={(evento)=>{
            evento.preventDefault();
            setFormVisivel(false);  
            formCadastro.clearForm();
          }}>
          <div>
            <button type="button" className="close-modal" onClick={()=> setFormVisivel(false)}>
              X
            </button>

            <input 
              type="text"
              name="titulo" 
              placeholder="Título do vídeo" 
              value={formCadastro.values.titulo} 
              onChange={formCadastro.handleChange}
            />

            <input 
              type="text" 
              name="url"
              placeholder="URL" 
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />

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