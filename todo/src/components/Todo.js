import React, { useState } from 'react';
import './Todo.css';
import db from '../firebase';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { Grid, Input, IconButton, Avatar, Modal, Button, List, ListItem, ListItemText, ListItemAvatar, ListItemIcon, ListItemSecondaryAction } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [ open, setOpen ]= useState(false);
    const [ input, setInput] = useState();

    const updateTodo = () => {
        //update todo with new input text
        db.collection('maintodos').doc(props.listObj.id).set({
            tasks: input
            // merge = prevents you from overwriting what was written. 
        }, { merge: true });
        setOpen(false);
    }
    return (
        <Grid item xs={12} md={6}  display="flex" alignItems="center" justifyContent="center">
        <Modal open={open} onClose={event => setOpen(false)} >
            <div className={classes.paper}>
                <h1>Edit your Task in a Snap!</h1>
                <Input placeholder={props.listObj.value} value={input} onChange={event => setInput(event.target.value)}  />
                <Button  disabled={!input} onClick={updateTodo} variant="contained" color="primary">Update Todo</Button>
            </div>
        </Modal>
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <AssignmentTurnedInIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.listObj.value} secondary="Dummy Deadline"/>
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon onClick={event => db.collection('maintodos').doc(props.listObj.id).delete()}/>
                    </IconButton>
                    <Button onClick={e => setOpen(true)}> Edit</Button>
                </ListItemSecondaryAction>
            </ListItem>
        </List>

        </Grid>
    )
}

export default Todo
