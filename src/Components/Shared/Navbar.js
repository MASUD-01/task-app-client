import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className='navbars'>
            <Link to="/">Home</Link>
            <Link to="todo">ToDo</Link>
            <Link to="/completed-task">Completed Task</Link>
            <Link to="/calender">Calender</Link>
        </nav>
    );
};

export default Navbar;