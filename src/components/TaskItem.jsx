import React from 'react';

const TaskItem = ({index, task, removeTask, doneTask}) => {
    return (
        <div className="mt-4 py-2 user-task" onClick={() => doneTask(task)}>
            <h4>{index + 1}. {task.name}</h4>

            <div className="d-flex">
                <button className="btn-close btn-close-white" onClick={
                        (event) => {
                            event.stopPropagation();
                            removeTask(task);
                        }
                }></button>
            </div>
        </div>
    );
};

export default TaskItem;