import React from "react";
import { Link } from "react-router-dom";   

export default function Header(){
    return(
        <>
            <div>
                <Link to="/">Home</Link>
                <Link to="/todos">Todos</Link>
                <Link to="/album">Album</Link>
                <Link to="/movie">Movie</Link>
                
            </div>
        </>
    )
}