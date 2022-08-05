import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useContext} from "react";

import {Link} from "react-router-dom";
import {contactContext} from "../../contactContext";

export default function ContactCard({el}) {
    const {deleteContact,editContact}=useContext(contactContext)

    return (
        <Card  sx={{ maxWidth: 500 ,m:4}}>
            <CardMedia
                component="img"
                height="140"
                image={el.photo}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {el.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {el.number}
                </Typography>
            </CardContent>
            <CardActions>
                <Button sx={{color:'red', border:'1px solid red'}} size="normal" onClick={()=>deleteContact(el.id)}>DELETE</Button>

                <Link to='/edit'>
                    <Button sx={{border:'1px solid #1976d2',m:2,textDecoration:'none'}} size="normal" onClick={()=>editContact(el.id)}>EDIT</Button>
                </Link>

            </CardActions>
        </Card>
    );
}
