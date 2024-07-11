import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Pages/Main/Main';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter