import { useState } from "react"


//export default function AddCategory({onNewCategory}) {
export const AddCategory = ({onNewCategory}) =>{

    const [inputValue, setInputValue] = useState('');
    //Por defecto al poner event como parametro y no pasar este valor desde donde se llamae, recupera la informacion de todas maneras.
    const onInputChange = (event) =>{
        setInputValue(event.target.value);
    }

    const onSubmit= (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        //setListCategories(categories => [inputValue,...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={(event)=>onSubmit(event)}>
        <input 
        type='text' 
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={onInputChange} /* === onChange={(event)=>onInputChange(event)}*/
        />
    </form>
  )
}
