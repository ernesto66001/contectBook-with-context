import React from 'react';
import {Route, Routes} from "react-router-dom";
import Homw from "./components/homw";
import EditContact from "./components/contacts/editContact";


const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homw/>}/>
            <Route path='/edit' element={<EditContact/>}/>
        </Routes>
    );
};

export default MainRoutes;