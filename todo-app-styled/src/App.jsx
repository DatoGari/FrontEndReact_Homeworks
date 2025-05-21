import React, { useState } from "react";
import styled from "styled-components";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Column = styled.div`
  background: white;
  border-radius: 8px;
  padding: 10px;
  width: 30%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ColumnTitle = styled.h2`
  font-size: 1.2em;
  margin-bottom: 10px;
  border-bottom: 3px solid ${props => props.color || "#ccc"};
  padding-bottom: 5px;
`;

const TaskCard = styled.div`
  background-color: white;
  border-left: 4px solid ${props => props.color || "#ccc"};
  border-radius: 4px;
  padding: 10px;
  margin: 8px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskTitle = styled.span`
  flex: 1;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #1976d2;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #1976d2;
  }
`;

const initialTasks = [
  { id: uuidv4(), title: "Download Android app", status: "Backlog", color: "#2196f3" },
  { id: uuidv4(), title: "Change and update account details in the iOS app", status: "Backlog", color: "#f44336" },
  { id: uuidv4(), title: "Set up recurring utilities payments", status: "In Progress", color: "#f44336" },
  { id: uuidv4(), title: "View transaction history by category", status: "In Progress", color: "#ffeb3b" },
  { id: uuidv4(), title: "Set and monitor progress on financial goals", status: "In Progress", color: "#2196f3" },
  { id: uuidv4(), title: "Download iOS app", status: "Done", color: "#4caf50" },
  { id: uuidv4(), title: "Transfer money between accounts", status: "Done", color: "#2196f3" }
];

const statuses = [
  { label: "Backlog", color: "#e65100" },
  { label: "In Progress", color: "#fdd835" },
  { label: "Done", color: "#43a047" }
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  // const onDragEnd = (result) => {
  //   if (!result.destination) return;
  //   const { source, destination } = result;

  //   const draggedTask = tasks.find(t => t.id === result.draggableId);
  //   if (!draggedTask) return;

  //   const updatedTasks = tasks.map(task =>
  //     task.id === draggedTask.id ? { ...task, status: destination.droppableId } : task
  //   );
  //   setTasks(updatedTasks);
  // };

  const addTask = (status) => {
    if (newTask.trim() === "") return;
    const colorMap = {
      "Backlog": "#2196f3",
      "In Progress": "#f44336",
      "Done": "#4caf50"
    };
    setTasks([
      ...tasks,
      { id: uuidv4(), title: newTask, status, color: colorMap[status] || "#2196f3" }
    ]);
    setNewTask("");
  };

  const moveTask = (id, newStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {statuses.map(status => (
          <Column key={status.label}>
            <ColumnTitle color={status.color}>{status.label} | {tasks.filter(t => t.status === status.label).length}</ColumnTitle>
            <Input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder={`Add task to ${status.label}`}
            />
            <Button onClick={() => addTask(status.label)}>Add Task</Button>
            <Droppable droppableId={status.label}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks.filter(task => task.status === status.label).map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <TaskCard
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          color={task.color}
                        >
                          <TaskTitle>{task.title}</TaskTitle>
                          {status.label === "Backlog" && (
                            <ActionButton onClick={() => moveTask(task.id, "In Progress")}>→ In Progress</ActionButton>
                          )}
                          {status.label === "In Progress" && (
                            <ActionButton onClick={() => moveTask(task.id, "Done")}>✔ Done</ActionButton>
                          )}
                          {status.label === "Done" && (
                            <DeleteButton onClick={() => deleteTask(task.id)}>×</DeleteButton>
                          )}
                        </TaskCard>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Column>
        ))}
      </Container>
    </DragDropContext>
  );
};

export default App;
