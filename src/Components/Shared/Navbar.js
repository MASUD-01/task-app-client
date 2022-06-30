import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav>
            <Link to="/">ToDo</Link>
            <Link to="/completed-task">Completed Task</Link>
            <Link to="/calender">Calender</Link>
        </nav>
    );
};

export default Navbar;