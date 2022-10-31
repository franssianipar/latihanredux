import React from "react";
import {useDispatch,useSelector } from 'react-redux';
import{useEffect } from "react";
import { getAllTodos } from "../action/todosAction";

export default function Todos(){
    const dispatch =useDispatch();

    const todos = useSelector((state)=> state.todos)

    useEffect(()=> {
        dispatch (getAllTodos());

    },[dispatch]);
    return(
        <>
        <div className="App">
            <header className="App-header">
                {JSON.stringify(todos)}
            </header>
        </div> 
        </>
    )
}