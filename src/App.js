import './App.scss';
import {useRef, useState} from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import CompletedTaskList from "./components/CompletedTaskList";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [tasks, setTasks] = useState([])

    const [completedTasks, setCompletedTasks] = useState([]);

    const [taskName, setTaskName] = useState('');
    const inputRef = useRef();

    function createTask() {
        const newTask = { id: Date.now(), name: taskName };

        setTasks([...tasks, newTask]);

        inputRef.current.value = '';
        setTaskName('');
    }
    function removeTask(task) {
        setTasks(tasks.filter(t => t.id !== task.id));
    }
    function doneTask(task) {
        setTasks(tasks.filter(t => t.id !== task.id));

        setCompletedTasks([...completedTasks, task]);
    }
    function undoneTask(task) {
        setCompletedTasks(completedTasks.filter(t => t.id !== task.id));

        setTasks([...tasks, task]);
    }
    function removeCompletedTask(task) {
        setCompletedTasks(completedTasks.filter(t => t.id !== task.id));
    }

    return (
        <div className="w-25 user-container">
            <TaskForm createTask={createTask} inputRef={inputRef} setTaskName={setTaskName}  />

            <TaskList tasks={tasks} removeTask={removeTask} doneTask={doneTask} />

            <CompletedTaskList completedTasks={completedTasks} undoneTask={undoneTask} removeTask={removeCompletedTask} />
        </div>
    );
}

export default App;
