import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Mtb']);
    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        //console.log(newCategory);
        //= categories.push('Valorant') = Evitar usar no permite mutaciones en react 
        setCategories([newCategory,...categories]);
    }

  return (
    <>
        <h1>*Gifs Team Colineros</h1>

        <AddCategory 
            //setListCategories={setCategories}
            onNewCategory={(event)=>onAddCategory(event)}
        />
        
        {
            categories.map((category) =>(
                <GifGrid 
                    key={category} 
                    category={category}/>
            ))
        }
    </>
  )
}
