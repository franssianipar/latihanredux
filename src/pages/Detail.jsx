import React from "react";
import {useDispatch,useSelector } from 'react-redux';
import{useEffect } from "react";
import { getAllDetail } from "../action/detailAction";


export default function Detail(){
    const dispatch =useDispatch();

    const detail= useSelector((state)=> state)
    useEffect(()=> {
        dispatch (getAllDetail());

    },[dispatch]);

    return (
    <>
    <div className="bg-center h-full" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.poster_path})`, backgroundSize: "100% auto" }}>
        <div className="flex flex-col h-68 w-5/12 mt-64 ">
            <div className="mt-auto">
                <h1 className="text-5xl text-white">
                    {
                        detail.original_title
                    }
                </h1>
            </div>
            <div className="text-white">
                {
                    detail.overview
                }
            </div>   

            <div className="text-white flex mt-5">
                
                <span className="text-2xl ml-2 my-auto">{detail.popularity}</span>
            </div>

            <div className="mb-auto flex mt-10">
                <button className="bg-red-600 rounded-full w-1/3 h-14 flex items-center" >
                    
                    <span className="text-lg ml-5 text-white">Watch Trailer</span>
                </button>
            </div>
        </div>
    </div>
    </>
    )
    
}