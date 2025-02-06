import { useState, useEffect } from "react";

type props = {
    arr:number[],
    title:string,
    handlerShow:()=>void
}

const Step:React.FC<props>=({arr,title,handlerShow})=>{
    const [count,setCount] = useState(119);
    const [isCount,setIsCount] = useState(false);
    const [step,setStep] = useState(0)

    useEffect(()=>{
        let timer:ReturnType<typeof setInterval>; 
        
        if(isCount){
            timer= setInterval(()=>{
                setCount((prevCount)=>{
                    if(prevCount <= 1){
                        clearInterval(timer);
                        setIsCount(false)
                        return 119;
                    }
                    return prevCount -1
                })
                
            },1000)
        }

        return()=>{
            clearInterval(timer);
        }
    },[isCount])

    const handlerTimer=()=>{
        if(arr.length-1 > step){
            setIsCount(true);
            setStep(prevStep=>prevStep+1)
        }
    }

    return(
        <div>
            <h2>
                {title}
            </h2>
            <button onClick={handlerShow}>
                &#60;
            </button>
            {isCount ? '':(<button onClick={handlerTimer}>Сделал</button>)}
            <ul className="step">
                {
                    arr.map((el,index)=>(
                    <li 
                        key={index} 
                        className={index === step ? "action":""}
                    ><span>{el}</span></li>))
                }
            </ul>
            

            <div className="timer">
               {
                count >= 119 ?  `Занятие штангой. Подход : ${step+1}`:`Перерыв ${Math.floor(count/60)} : ${count % 60}`
               }
            </div>
        </div>
    )
}

export {Step};