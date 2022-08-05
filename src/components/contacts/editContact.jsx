
import React, {useContext, useEffect, useState} from 'react';
import {Box,TextField,Button} from "@mui/material";

import {useNavigate} from 'react-router-dom'
import {contactContext} from "../../contactContext";
const EditContact = () => {
    const {contactToEdit,saveContact}=useContext(contactContext)
    const [editContact,setEditContact]=useState(contactToEdit)
    useEffect(()=>{
        setEditContact(contactToEdit)
    },[contactToEdit])
    console.log(editContact)
    const handleInp = (e) => {
        let obj = {
            ...editContact,
            [e.target.name]: e.target.value,
        };
        setEditContact(obj);
    };
    const navigate=useNavigate()
    return (
        <>
            {editContact?(
                <Box sx={{display:'flex',alignItems:'center',m:2,gap:'20px'}}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" name='name'
                               onChange={handleInp} value={editContact.name}
                    />
                    <TextField id="outlined-basic" label="Number" variant="outlined" name='number'
                               onChange={handleInp} value={editContact.number}
                    />
                    <TextField id="outlined-basic" label="Photo" variant="outlined" name='photo'
                               onChange={handleInp} value={editContact.photo}
                    />
                    <Button  variant="contained" color="secondary" size='large'
                             onClick={()=>{saveContact(editContact);navigate('/')}}
                    >SAVE</Button>
                </Box>
            ):(<h3 style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%',fontSize:'3em',letterSpacing:'3px'}}>Loading...</h3>)}

        </>
    );
};

export default EditContact;