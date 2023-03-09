import { useAppDispatch, useAppSelector } from '@/hooks'
import React, { useEffect, useState, FormEvent, ChangeEvent } from 'react'
import { addTodo, Todos, todosStucture } from '@/redux/feature/todoSlice'
import TodoList from './TodoList'

type Props = {
  todoFilter: string
}


const TodoActions: React.FC<Props> = ({ todoFilter }) => {

  type SubmitEvent = FormEvent<HTMLFormElement>
  type InputEvent = ChangeEvent<HTMLInputElement>


  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos);

  const [todoText, setTodoText] = useState<string>('')
  const [displayTodos, setDisplayTodos] = useState<Todos>([])


  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    if(todoText === ''){
      alert('Todo cant be empty');
      return
    }

    let todoObj : todosStucture = {
      id : Date.now(),
      todoText : todoText,
      completed : false
    }

    dispatch(addTodo(todoObj))
    setTodoText('')
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodoText(e.currentTarget.value)
  }

  useEffect(() => {
    if (todoFilter === 'Completed') {
      setDisplayTodos(() => {
        return todos.filter((todo) => {
          return todo.completed === true
        })
      })
      return
    }
    if (todoFilter === 'Active') {
      setDisplayTodos(() => {
        return todos.filter((todo) => {
          return todo.completed === false;
        })
      })
      return
    }
    if (todoFilter === 'All') {
      setDisplayTodos(todos);
    }
  }, [todoFilter, todos])


  return (
    <div className='w-4/5 h-full py-8 pr-8 pl-14' >
      <div className='h-1/4 w-full' >
        <h1 className='text-pm mb-4' >{`${todoFilter} Tasks`}</h1>
        <form className='w-full mb-4' onSubmit={handleSubmit} >
          <input
            placeholder='Add a new task inside ‘All’ category'
            className='w-full h-12 pl-7 bg-lightPink rounded-pm'
            value={todoText || ''}
            onChange={handleChange}
            disabled={todoFilter === 'Completed' ? true : false}
          />
        </form>
      </div>
      <div className='w-full h-3/4 overflow-y-auto' >
        {
          displayTodos?.map((todo, i) => (
            <TodoList todo={todo} key={todo.id} />
          ))
        }
      </div>
    </div>
  )
}

export default TodoActions