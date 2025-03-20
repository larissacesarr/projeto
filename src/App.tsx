import { useState } from 'react';
import { useApi } from "./hooks/useApi"
import './App.css'
import { Card } from './components/card/card'
import { useTodoData } from './hooks/useTodoData';
import { CreateModal } from './components/create-modal/create-modal';
import { EditModal } from './components/create-modal/edit-modal';

function App() {

  const { data, refetch } = useTodoData();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<{ id: string; title: string; description: string; completed: boolean } | null>(null);
  
  const {request:  deleteTask, error: deleteError} = useApi({
    method: "DELETE",
    url: "http://localhost:8080/tasks",
  })
  const {request: editTask, error: editError} = useApi({
    method: "PUT",
    url: "http://localhost:8080/tasks"
  })

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenEditModal = (task: { id: string; title: string; description: string; completed: boolean }) => {
    setEditingTask(task);
  };

  const handleCloseEditModal = () => {
    setEditingTask(null); 
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTask(id); 
    if (!deleteError) {
      console.log("Tarefa deletada com sucesso!");
      refetch(); 
    } else {
      console.error("Erro ao deletar tarefa:", deleteError);
    }
  };

  const  handleEditTask = async (id: string, updatedData: {title?: string; description?: string; completed?: boolean;}) =>{
    await editTask(id, updatedData);
    if(!editError){
      console.log("Tarefa editada com sucesso!")
      refetch();
    } else {
      console.error("Error ao editar tarefa: ", editError);
    }
  }

  return (
    <div className="container">
      <h1>Todo-List</h1>
      <div className='card-grid'>
        {data?.map(todoData => (
          <Card
            key={todoData.id}
            title={todoData.title}
            description={todoData.description}
            completed={todoData.completed}
            onClickDelete={() => handleDeleteTask(todoData.id.toString())} 
            onClickEdit={() =>handleOpenEditModal(todoData)}
          />
        ))}
      </div>
      {isModalOpen && <CreateModal onClose={handleCloseModal} />}
      {editingTask && ( 
        <EditModal
          task={editingTask}
          onClose={handleCloseEditModal}
          onEdit={handleEditTask} 
        />
      )}
      <button className="success" onClick={handleOpenModal}>New</button>
      {deleteError && <p style={{ color: "red" }}>{deleteError}</p>}
      {editError && <p style={{ color: "red" }}>{editError}</p>}
    </div>
  );
}
export default App