import React from "react"

function TodoInput({ inputRef, task, setTask, handleAdd }) {
    return (
        <div>
            <input 
                ref={inputRef}
                type="text" 
                value={task} 
                onChange={(e)=> setTask(e.target.value)} 
                placeholder='Enter a task'
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    )

}

export default TodoInput
