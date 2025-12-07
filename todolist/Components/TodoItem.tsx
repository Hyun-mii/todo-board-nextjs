interface TodoItemProps {
    id: number;
    text: string;
    completed: boolean;
    onClickDelete(id: number): void;
}
export default function TodoItem({
    id,
    text,
    completed,
    onClickDelete,
    }: TodoItemProps) {
    return (
        <ul className="todoContainer">
          <input type="checkbox"/>
            <p>{text}</p>
            <div className="buttonContainer">
                <button className="todoBtn" type="button" onClick={()=> onClickDelete(id)}>삭제</button>
            </div>
        </ul>
    );
} 