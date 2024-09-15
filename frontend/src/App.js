import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Buy from './pages/Buy';
import Trending from './pages/Trending';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/trending" element={<Trending />} />
            </Routes>
        </Router>
    );
}

export default App;
