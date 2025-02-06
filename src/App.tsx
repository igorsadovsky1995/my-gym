import { useState } from 'react'
import './App.css'
import { useAppDispatch,useAppSelector } from './hooks'
import { Item } from './components/Item';

function App() {
  const todo = useAppSelector(state=>state.gym.todo);
  const [popup,setPopup] = useState(false) 
  const [todoFilter,setTodoFilter] = useState(todo)

  const handlerPopup=(num:number)=>{
    if(num > 0){
      setTodoFilter(todo.filter(el=>el.day === num))
    }
    setPopup(!popup)
  }

  return (
    <div>
      <div className='buttons'> 
        <button onClick={()=>handlerPopup(1)}>
          Вторник
        </button>
        <button onClick={()=>handlerPopup(2)}>
          Четверг
        </button>
        <button onClick={()=>handlerPopup(3)}>
          Суббота
        </button>
      </div>
      
      <div className={`list-exercises ${popup}`}>
        <div>
          <button onClick={()=>handlerPopup(0)}>
            &#60;
          </button>
        </div>
        {
          todoFilter.map(el=><Item key={el.id} {...el} />)
        }
      </div>
      
    </div>
  )
}

export default App
