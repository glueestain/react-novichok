import React from 'react';
import './styles/App.css';
import {BrowserRouter, Link, Route, Routes,Navigate} from "react-router-dom";

import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./components/UI/AppRouter";


function App() {
    return (
            <BrowserRouter>
                <Navbar/>
            <AppRouter/>
            </BrowserRouter>
  )
}

export default App;
