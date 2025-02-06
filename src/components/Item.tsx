import { useState } from "react";
import type { todo } from "../type/interface";
import { Step } from './Step';

const Item:React.FC<todo>=({title,arr})=>{
    const [show,setShow]=useState(false);
    const handlerShow=()=>{
        setShow(!show);
    }
    return(
        <div>
            <button onClick={handlerShow}>
                {title}
            </button>
            <div className={`popup-step ${String(show)}`}>
            {
                <Step arr={arr} title={title} handlerShow={handlerShow}/>
            }
            </div>    
        </div>
    )
} 

export {Item}