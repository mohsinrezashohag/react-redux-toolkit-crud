import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Home from '../pages/Home'
import About from '../pages/About'
import ShowBooks from '../features/ShowBooks/ShowBooks';
import AddBooks from '../features/AddBooks/AddBooks';
import EditBooks from '../features/EditBooks/EditBooks';


const Index = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route path="/about" element={<About></About>}></Route>


                    <Route path="/show-books" element={<ShowBooks></ShowBooks>}></Route>
                    <Route path="/add-books" element={<AddBooks></AddBooks>}></Route>
                    <Route path="/edit-books" element={<EditBooks></EditBooks>}></Route>

                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Index;