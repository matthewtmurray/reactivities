import React from "react";
import { Duck } from "./Demo";

interface props{
    duck: Duck;
}

export default function DuckItem({duck} :props){
    return(
        <div style={{color: 'yellow'}}>
            <span>{duck.name}</span>
            <button  onClick={()=>{duck.makeSound(duck.name + ' quack')}}>click me</button>
          </div>
    )
}