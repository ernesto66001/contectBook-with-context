import React, {useContext, useState} from 'react';
import {Box,TextField,Button} from "@mui/material";
import {contactContext} from "../../contactContext";


const AddContact = () => {
    const {addContact}=useContext(contactContext)
    const [person,setPerson]=useState({
        name:'',
        number:'',
        photo:'',})
    console.log(person)
    const handleInput=(e)=>{
        let obj={
            ...person,
            [e.target.name]:e.target.value,
        }
        setPerson(obj)


    }
    return (
        <Box sx={{display:'flex',alignItems:'center',m:4,gap:'20px'}}>
            <TextField  id="outlined-basic" label="Name" variant="outlined" name='name' onChange={handleInput} value={person.name || ''}/>
            <TextField id="outlined-basic" label="Number" variant="outlined" name='number' onChange={handleInput} value={person.number|| ''}/>
            <TextField id="outlined-basic" label="Photo" variant="outlined" name='photo' onChange={handleInput} value={person.photo|| ''}/>
            <Button style={{filter:'drop-shadow(0.35rem 0.35rem 0.4rem  #9c27b0)'}} variant="contained" color="secondary" size='large' onClick={()=>{addContact(person);setPerson({ name: "", number: "", photo: "" }) }} >ADD CONTACT</Button>
        </Box>
    );
};

export default AddContact;