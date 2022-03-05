import React from 'react'
import { ITask } from './Interfaces'
import '../App.css'

interface Props {
    task : ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask}: Props) => {
  return (
    <div className='display__task'>
        <h4 className='task'>
        {task.taskName}
        </h4> 
        <h4 className='days'>
        {task.deadline} Days
        </h4>
        <button onClick={() => {
            completeTask(task.taskName)
        }}>
            Delete
        </button>
    </div>
  )
}

export default TodoTask