import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./Layout"
import Settings from "./pages/Settings"
import History from "./pages/History"

import "./style/style.scss"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/history" element={<History/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
