import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Pages/Main/Main';
import Round from '../Pages/Round/Round';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main/>}></Route>
                <Route exact path="/round" element={<Round/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter