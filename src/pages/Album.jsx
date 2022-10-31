import React from "react";
import {useDispatch,useSelector } from 'react-redux';
import{useEffect } from "react";
import {getAllAlbum} from '../action/albumAction'


export default function Album(){
    const dispatch =useDispatch();

    const album = useSelector((state)=> state.album)

    useEffect(()=> {
        dispatch (getAllAlbum());

    },[dispatch]);
    return(
        <>
        <div className="App">
            <header className="App-header">
                {JSON.stringify(album)}
            </header>
        </div> 
        </>
    )
}