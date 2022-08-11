import React , {FunctionComponent}from "react";
interface FoodItemsProps{
    name: string
    handleCheck: (value:string) => void
}

export const FoodItems:FunctionComponent<FoodItemsProps> = (props) =>{
    const { name, handleCheck} = props;
  
    return (
        <div >
        <input type="checkbox" onClick={()=>handleCheck(name)} />
        <label htmlFor="vehicle1">{name}</label>
        </div>
    )
}