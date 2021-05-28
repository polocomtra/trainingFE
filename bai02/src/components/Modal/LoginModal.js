import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

export default function FormDialog({showModal}) {
   const [open, setOpen] = React.useState(showModal);
  const styleFlex={
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }


//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
            <div style={styleFlex}>
                <h5 style={{fontWeight:'bold'}}>
                    Chào mừng bạn đã trở lại với Meete
                </h5>
                <span onClick={handleClose}>
                    <img src="https://meete.co/img/icons/close.svg" style={{width:'24px',height:'24px',paddingLeft:'10px'}}></img>
                </span>
            </div>
            <div style={styleFlex}>
                <small>Săn ưu đãi khủng nào!!!</small>
            </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nhập số điện thoại"
            type="email"
            fullWidth
            
          />
        </DialogContent>
        <DialogActions>
            <Button variant="contained" fullWidth>Tiếp tục</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
