import React, {FC, useState, ChangeEvent} from 'react';
import './App.css';
import { ITask } from './Components/Interfaces';
import TodoTask from './Components/TodoTask';

const App: FC = () => {

  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setToDoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === 'task') {
      setTask(event.target.value)
    }
    else {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline}
    setToDoList([...todoList, newTask])
    setTask('')
    setDeadline(0)
  }

  const completeTask = (taskNameToDelete: string): void => {
    setToDoList(todoList.filter((task) => {
      return task.taskName !=taskNameToDelete
    }) )
  }

  return (
    <div className="App">
      <div className='title'>
          Typescript Todo app by Ghani Rehman
      </div>
      <div className='todo'>
        
      <div className='inputs'>
      <input type='text' placeholder='Task...' 
      name='task'
      value={task}
      onChange={handleChange}
      />
      <input type='number' placeholder="Deadline (Days)" 
      name='deadline'
      onChange={handleChange}
      />
      </div>
      
      <div className='btn'>
      <button
      onClick={addTask}
      className="add__btn"
      >
        Add Task
      </button>
      </div>
      </div>

      {
        todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />
        })
      }
    </div>
  );
}

export default App;
