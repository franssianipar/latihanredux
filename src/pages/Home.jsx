import React from "react";
import {useDispatch,useSelector } from 'react-redux';
import{useEffect } from "react";
import {getAllUser} from '../action/userAction'


export default function Home(){
    const dispatch =useDispatch();

    const users = useSelector((state)=> state.user)

    useEffect(()=> {
        dispatch (getAllUser());

    },[dispatch]);
    return(
        <>
        <div className="App">
            <header className="App-header">
                {JSON.stringify(users)}
            </header>
        </div> 
        </>
    )
}