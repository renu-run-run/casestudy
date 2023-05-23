import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from "@mui/material";
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function FormDialog({data,setData
  ,setUserNamecb,userNamedata
  ,setUserEmailcb,userEmaildata
  ,userUserPhonedata,setUserPhonecb
  ,deleted,setDeleted}) {
  
  console.log(data);
  
  const [open, setOpen] = React.useState(false);
  const [isFavourite, setFavourite] = useState(false);
  const toggleFavourite = () => {
    if (isFavourite) {
      setFavourite(false);
    } else {
      setFavourite(true);
    }

  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const handleCloseCancel = () => {
  setUserNamecb("");
}
const handleDelete = (id) => {
   const newArr = data.filter((ele) => ele.id !== id);
   console.log("delete")
   setData(newArr);
}
  return (
    <div>
      <IconButton size="large" color="error" onClick={toggleFavourite}>
        {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      &nbsp;
      <IconButton variant="outlined" onClick={handleClickOpen}>
       <EditIcon/>
      </IconButton>
      &nbsp;
      <IconButton variant="outlined" onClick={()=>handleDelete(1)}>
       <DeleteIcon/>
      </IconButton>
      &nbsp;
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit the user data, please enter your name, email address, phone, website here. We
            will updates it.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            value={userNamedata}
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=>setUserNamecb(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            value={userEmaildata}
            type="email"
            fullWidth
            variant="standard"
            onChange={(e)=>setUserEmailcb(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone no."
            value={userUserPhonedata}
            type="tel"
            fullWidth
            variant="standard"
            onChange={(e)=>setUserPhonecb(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Website"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCancel}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}