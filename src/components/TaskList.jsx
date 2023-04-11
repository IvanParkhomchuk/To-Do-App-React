import React from 'react';
import TaskItem from "./TaskItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const TaskList = ({tasks, removeTask, doneTask}) => {
    return (
        <div className="mt-4">
            <h2>Task list</h2>

            <TransitionGroup>
                { tasks.map((task, index) =>
                        <CSSTransition
                            key={task.id}
                            timeout={500}
                            classNames="post"
                        >
                            <TaskItem
                                task={task}
                                index={index}
                                removeTask={removeTask}
                                doneTask={doneTask}
                            />
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
        </div>
    );
};

export default TaskList;