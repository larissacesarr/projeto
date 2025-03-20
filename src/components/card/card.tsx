import "./card.css"
import { BiTrash, BiEdit } from "react-icons/bi";

interface CardProps {
    title: string,
    description: string,
    completed: boolean,
    onClickDelete?: () => void,
    onClickEdit?: () => void; 
}


export function Card( {title, description, completed, onClickDelete, onClickEdit} : CardProps) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <p className={completed ? "completed" : "pending"}>
                {completed ? "Tarefa Concluída" : "Tarefa Pendende"}
            </p>
            <button type="button" className="btn-cancel" onClick={onClickDelete}>
                <BiTrash />
            </button>
            <button className="btn-success" onClick={onClickEdit}>
                <BiEdit />
            </button>
        </div>
    )
    
};

