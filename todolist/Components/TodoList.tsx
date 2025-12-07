import { useState } from "react";
import CreateTodo from "./CreateTodo";
import TodoItem from "./TodoItem";
import { todo } from "node:test";

interface TList {
    id : number;
    text: string;
    completed: boolean;
}

export default function todoList(){
    const [inputText,setInputText] = useState("");
    const [todoList, setTodoList] = useState<TList[]>([]);
//입력값 변경 내용 확인
    const textTypingHandler=(e:React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
};
//입력 확인
const textInputHandler = (e:React.FormEvent<HTMLFormElement>): void=> {
    e.preventDefault();
    const newTodo: TList = {
        id: Date.now(),
        text: inputText,
        completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setInputText("");
};
//값 삭제하기 
const textDeleteHandler = (id: number) => {
    setTodoList(todoList.filter((todoItem)=>todoItem.id !==id));
};

return (
    <div className="todoListContainer">
        <h1 className="todoTitle" >TodoList</h1>
        {todoList.map((item) => (
            <TodoItem
                key= {item.id} 
                id= {item.id}
                text={item.text} 
                completed= {item.completed}
                onClickDelete={textDeleteHandler}
            />
                ))}
        <CreateTodo
            onChange={textTypingHandler}
            onSubmit={textInputHandler}
            inputText={inputText}
        />
    </div>
);
}