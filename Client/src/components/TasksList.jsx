import { useEffect, useState } from 'react';
import { getAllTasks } from '../api/tasks.api';
import { TaskCard } from './TaskCard';

export function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadAllTasks() {
      try {
        const res = await getAllTasks();
        setTasks(res.data);
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    }
    loadAllTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
       <TaskCard key={task.id}task={task}/>
      ))}
    </div>
  );
}
