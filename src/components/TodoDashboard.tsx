import React, { useState } from 'react'
import TodoActions from './TodoActions';

const TodoDashboard:React.FC = () => {
    

    const [todoFilter, setTodoFilter] = useState<'All' | 'Active' | 'Completed'>('All');

  return (
    <div className='w-4/5 h-4/5 bg-white rounded-lg shadow-pm flex' >
        <div className='w-1/5 h-full border-r border-r-borderGrey' >
            <nav>
                <ul className='flex items-start justify-center flex-col pl-12 pt-36 gap-6' >
                    <li className={`w-full cursor-pointer ${todoFilter === 'All'?'text-sd1 text-pink':'text-sd2'}`} onClick={()=>setTodoFilter('All')} >All</li>
                    <li className={`w-full cursor-pointer ${todoFilter === 'Active'?'text-sd1 text-pink':'text-sd2'}`} onClick={()=>setTodoFilter('Active')} >Active</li>
                    <li className={`w-full cursor-pointer ${todoFilter === 'Completed'?'text-sd1 text-pink':'text-sd2'}`} onClick={()=>setTodoFilter('Completed')} >Completed</li>
                </ul>
            </nav>
        </div>
        <TodoActions todoFilter={todoFilter} />
    </div>
  )
}

export default TodoDashboard