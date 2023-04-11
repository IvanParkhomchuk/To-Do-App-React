import React from 'react';

const TaskForm = ({createTask, inputRef, setTaskName}) => {
    return (
        <div className="form-group my-4 pb-3">
            <input type="text" className="form-control" placeholder="Add task..." ref={inputRef} onChange={e => setTaskName(e.target.value)}/>

            <button className="form-control mt-2 btn btn-primary" onClick={createTask}>Add task!</button>
        </div>
    );
};

export default TaskForm;