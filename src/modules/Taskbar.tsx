import { TaskCreated } from './TaskCreated'
import { useState } from 'react'
import { Task } from './Task'
import styles from './Taskbar.module.css'
import { TaskFinished } from './TaskFinished'



export function Taskbar() {

    function handleDeleteTask(taks:string) {
        setTasks(tasks.filter(task => task.content !== taks))
    }
    
    const [tasks, setTasks] = useState([
        {
            id: 1,
            content: 'Fazer esta tela né',
        },
    ])
    function countTasks() {
        return tasks.length
    }
  
    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const newTaskContent = event.currentTarget.taskbar.value
    
       setTasks([...tasks, {id: tasks.length + 1, content: newTaskContent}])

       event.currentTarget.reset()
    }
    return (
        <div>
            <TaskCreated  tasks={countTasks()}/>
            <TaskFinished number1={0} number2={tasks.length} />

            <form  onSubmit={handleCreateNewTask}>
            <textarea placeholder='Enter your tasks' className={styles.taskbar} name='taskbar' required />
            <button className={styles.taskbarButton}>
                Create
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
                </button>
            </form>

            <div className={styles.tasks}>
                 {tasks.map(taks => {
                    return(<Task content={taks.content} deleteTask={handleDeleteTask} />)
                 })}
            </div>
        </div>

        
    )
}