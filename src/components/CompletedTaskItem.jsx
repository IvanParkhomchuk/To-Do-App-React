import React from 'react';

const CompletedTaskItem = ({task, index, removeTask, undoneTask}) => {
    return (
        <div className="mt-4 py-2 user-task user-task" onClick={() => undoneTask(task)}>
            <h4>{index + 1}. <s>{task.name}</s></h4>

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

export default CompletedTaskItem;