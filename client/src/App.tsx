import React from "react";
import Landing from "./pages/Landing";
import Anatomy from "./pages/Anatomy";
import Workout from "./pages/Workout";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="w-screen h-screen flex flex-col items-center justify-start text-white bg-[#212121] overflow-hidden">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/anatomy" element={<Anatomy />} />
                    <Route path="/workout" element={<Workout />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
