import { createSlice } from "@reduxjs/toolkit";

const initialState={tasks:[]};
const taskSlice=createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask:(state, action)=>{
            state.tasks.push(action.payload);
        },
        deleteTask:(state, action)=>{
            state.tasks=state.tasks.filter((t)=>t.id!==action.payload);
        },
        modifyTask:(state, action)=>{
            /*const task=state.tasks.find((t)=>t.id===action.payload.id);
            if (task){
                task.status=!task.status;
            }*/
           state.tasks=state.tasks.map((t)=>t.id===action.payload?{...t, status:!t.status}:t);
        },

    }
})

export const {addTask, deleteTask, modifyTask}=taskSlice.actions;
export default taskSlice.reducer;