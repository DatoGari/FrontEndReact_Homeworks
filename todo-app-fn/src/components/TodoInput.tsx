import React from "react"

interface AppProps {
    inputRef: React.RefObject<HTMLInputElement>;
    task: string;
    setTask: (value: string) => void;
    handleAdd: () => void;
    }

    

function TodoInput({ inputRef, task, setTask, handleAdd }: AppProps) {
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
