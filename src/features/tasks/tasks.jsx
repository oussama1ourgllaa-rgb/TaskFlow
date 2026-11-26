import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, modifyTask } from "./tasksSlice";

export const Tasks=()=>{
    const tasks=useSelector(s=>s.tasks.tasks);
    const dispatch=useDispatch();
    const [task, setTask]=useState("");

    const handelAdd=()=>{
        const t={
            id:tasks.length+1,
            title:task,
            status: false
        };
        dispatch(addTask(t));

        setTask("");
    }
    return(
        <div className="container mx-auto m-3 p-1 rounded bg-light w-50">
            <div className="d-flex justify-content my-2 gap-2">
                <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="new task..." className="form-control form-control-sm"/>
                <button onClick={handelAdd} className="btn btn-primary btn-sm">add</button>
            </div>
            <ul className="border rounded p-2 my-2">
            {tasks.map((t) => (
                <li key={t.id} onClick={()=>dispatch(modifyTask(t.id))} className="border rounded p-1 m-1" style={{textDecoration: t.status?'line-through':'none', listStyle: 'none'}}>
                {t.title}
                <button onClick={()=>dispatch(deleteTask(t.id))}  className="btn btn-danger btn-sm">delete</button>
                </li>
                
            ))}
            </ul>
        </div>
    )
}
/*hallo*/