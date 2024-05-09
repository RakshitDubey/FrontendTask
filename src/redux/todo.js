import { createSlice } from "@reduxjs/toolkit";

const initialState=localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[
    {
        id:1,
        title:"Do some coding",
        completed:false
    },
    {
        id:2,
        title:"Complete Assignment",
        completed:false
    }
]

export const todoSlice=createSlice({
    name:'todos',
    initialState:initialState,
    reducers:{
        addtodo:(state,action)=>{
            const newtodo={
                id:new Date().getTime(),
                title:action.payload.title,
                completed:false
            }
            state.push(newtodo)
            localStorage.setItem('todos',JSON.stringify(state))
        },
        removetodo:(state,action)=>{
            const newstate=state.filter((item)=>item.id!==action.payload.id)
            localStorage.setItem('todos',JSON.stringify(newstate))
            return newstate
        },
        toggleComplete:(state,action)=>{
            const todoupdate=state.find((todo)=>todo.id===action.payload.id)
            if(todoupdate){
                todoupdate.completed=!todoupdate.completed
                localStorage.setItem('todos',JSON.stringify(state))
            }
        }

    }
    
})

export const{addtodo,removetodo,toggleComplete}=todoSlice.actions
export default todoSlice.reducer