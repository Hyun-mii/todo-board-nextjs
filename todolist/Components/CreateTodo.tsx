interface InputTextProps {
    onChange(e:React.ChangeEvent<HTMLInputElement>): void;
    onSubmit(e: React.FormEvent<HTMLFormElement>): void;
    inputText: string;
}
export default function CreateTodo({
    onChange,
    onSubmit,
    inputText,
}: InputTextProps ){
    return(
        <div className="todoCreateContainer">
            <form onSubmit={(e)=>onSubmit(e)}>
                <input 
                    onChange = {(e)=> onChange(e)}
                    type="text" 
                    placeholder="할 일을 입력하세요"
                    value={inputText}
                    />
                <button className="todoBtn" type="submit">입력</button>
            </form>
        </div>
    );
}