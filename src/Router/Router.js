import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Pages/Main/Main';
import Edge from '../Pages/Edge/Edge';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main/>}></Route>
                <Route exact path="/edge" element={<Edge/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter