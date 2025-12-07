'use client'
import { useRouter } from "next/navigation";
import './homepage.css'
export default function home() {

  const router = useRouter();

  return (
    <div>
        <h1 className="homeTitle">Home Page</h1>

      <div className="homeBtn">
      <button className="hBtn" type="button" onClick={()=>router.push("/todolist")}>TodoList</button>
      <button className="hBtn" type="button" onClick={()=>router.push("/table")}>Table</button>
      </div>
    </div>

  );
}