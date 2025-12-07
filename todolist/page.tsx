'use client'
import { useRouter } from "next/navigation";
import TodoList from "./Components/TodoList";
import './todolist.css';
import '../homepage.css'

function App() {
  const router = useRouter();
  
  return (

    
   <div className="App">
    <div className='homeTitle'>
        <button 
          type='button' 
          onClick={() => router.push("/")} 
        >
          Home Page
        </button>
      </div>
    <TodoList />
   </div>
  );
}

export default App;