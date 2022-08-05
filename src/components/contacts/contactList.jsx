import React, {useContext, useEffect} from 'react';

import ContactCard from "./contactCard";
import {Box} from "@mui/material";
import {contactContext} from "../../contactContext";

const ContactList = () => {
    const {contacts,getContact}=useContext(contactContext)
    useEffect(()=>{
        getContact()
    },[])
    return (
        <Box sx={{display:'flex',flexWrap:'wrap'}}>

            {
                contacts.map((el,inx)=>(
                    <ContactCard el={el} key={inx}/>
                ))
            }
        </Box>
    );
};

export default ContactList;