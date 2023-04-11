import React from 'react';
import CompletedTaskItem from "./CompletedTaskItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const CompletedTaskList = ({completedTasks, removeTask, undoneTask}) => {
    return (
        <div className="mt-4">
            <hr/>
            <h2>Completed tasks</h2>

            <TransitionGroup>
                { completedTasks.map((task, index) =>
                        <CSSTransition
                            key={task.id}
                            timeout={500}
                            classNames="post"
                        >
                            <CompletedTaskItem
                                task={task}
                                index={index}
                                removeTask={removeTask}
                                undoneTask={undoneTask}
                            />
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
        </div>
    );
};

export default CompletedTaskList;