import { useEffect, useState } from "react";
import CarouselsHome from "../components/CarouselsHome/CarouselsHome"
import CategoriasSelector from "../components/CategoriasSelector/CategoriasSelector"
import CategoriasTareas from "../components/CategoriasTareas/CategoriasTareas"
import { TaskService } from "../Services/TaskService";
import { Task } from "../types/Task";

const LandingPages = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await TaskService.getAllTasks();
      setTasks(tasksData);
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase());
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks);
    }
  }, [selectedCategory, tasks]);

   return (
    <>
      <CarouselsHome/>
      <CategoriasSelector onSelectedCategory={setSelectedCategory}/>
      <CategoriasTareas tasks={filteredTasks.length > 0 ? filteredTasks: tasks} />
    </>
  )
}

export default LandingPages