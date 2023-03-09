import { useAppDispatch } from '@/hooks'
import { completeTodo, deleteTodo, todosStucture } from '@/redux/feature/todoSlice'
import React from 'react'
import { BsCheck } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'

type Props = {
    todo : todosStucture
}

const TodoList:React.FC<Props> = ({todo}) => {

    const dispatch = useAppDispatch();

    const handleComplete = ()=>{
        dispatch(completeTodo({id: todo.id, completed: !todo.completed}))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
    }


  return (
    <div className='w-full pt-4 flex relative group'>
    {
        !todo.completed ? <>
            <div
                className='w-7 h-7 rounded-pm border border-solid border-darkGrey'
                onClick={handleComplete}
            ></div>
        </> : <>
            <div
                className='w-7 h-7 rounded-pm border bg-darkGrey border-solid border-darkGrey opacity-50 flex items-center justify-center'
                onClick={handleComplete}
            >
                <BsCheck className='text-pm fill-white' />
            </div>
        </>
    }
    <h2 className={`pl-5 text-th text-darkGrey ${todo.completed ? 'opacity-50 line-through' : ''}`} >{todo.todoText}</h2>

    <div className='w-7 h-7 flex items-center justify-center absolute right-0 cursor-pointer hidden group-hover:block' onClick={handleDelete}>
        <RiDeleteBin6Line className='text-sd1 fill-red ' />
    </div>
</div>
  )
}

export default TodoList