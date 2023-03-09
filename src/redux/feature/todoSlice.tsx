import { createSlice } from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'




//Define interface for initial state for all aslices 
//Methode 1) Using interface inheritance
export interface todosStucture { 
    id : number, 
    todoText : string, 
    completed : boolean
}
export interface Todos extends Array<todosStucture>{}
const initialState : Todos = []



export const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
        addTodo : (state, action:PayloadAction<todosStucture> )=>{
            state.push(action.payload)
        },
        deleteTodo : (state, action:PayloadAction<number>)=>{
            return state.filter((todo)=>todo.id !== action.payload)
        },
        completeTodo : (state, action:PayloadAction<any>)=>{
            const todoIndex = state.findIndex((todo)=>todo.id === action.payload.id)

            if(todoIndex !== -1){
                state[todoIndex].completed = action.payload.completed
            }
        }
    }
})


export const {addTodo, deleteTodo, completeTodo} = todoSlice.actions
export default todoSlice.reducer
