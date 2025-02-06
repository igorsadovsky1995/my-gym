import { createSlice } from "@reduxjs/toolkit";
import type {todo} from "../type/interface"

type list = {
    todo:todo[]
}

const initialState:list={
    todo:[{
        id:'1',
        title:'Становая тяга',
        day:1,
        arr:[10,10,10,10,10]
    },{
        id:"2",
        title:'Тяга штанги в наклоне',
        day:1,
        arr:[10,10,10,10,10]
    },{
        id:"3",
        title:'Выпады с штангой на плечах',
        day:1,
        arr:[10,10,10,10,10]
    },{
        id:"4",
        title:'Жим стоя',
        day:2,
        arr:[10,10,10,10,10]
    },{
        id:"5",
        title:'Подъёмы на носки со штангой',
        day:2,
        arr:[20,20,20,20,20]
    },{
        id:"6",
        title:'Подъёмы штанги на бицепс',
        day:2,
        arr:[8,8,8,8,8]
    },{
        id:"7",
        title:'Приседания со штангой на спине',
        day:3,
        arr:[10,10,10,10,10]
    },{
        id:"8",
        title:'Румынская тяга',
        day:3,
        arr:[10,10,10,10,10]
    },{
        id:"9",
        title:'Подъёмы на носки со штангой',
        day:3,
        arr:[20,20,20,20,20]
    }]
}



const gymSlice = createSlice({
    name:"gym",
    initialState
    ,
    reducers:{
    }
})

export default gymSlice.reducer