import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SignupModal from './SignupModal'

export default function LoginModal({showModal}) {
   const [open, setOpen] = React.useState(showModal);
   const [phone,setPhone]=useState('');
   const [showBtn,setShowBtn]=useState(true)
   const [showSignupModal,setShowSignupModal]=useState(false)
  const styleFlex={
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
  const handleChange=(e)=>{
      const {value}=e.target;
      if(value.length==10){
          setShowBtn(!showBtn)
          setPhone(value)
      }
  }
  
  const handleClick=()=>{
      console.log(true)
      setShowSignupModal(true)
  }



  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        {
            showSignupModal && <SignupModal showSignupModal={showSignupModal} phone={phone} />
        }
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
            type="text"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
            <Button variant="contained" color="secondary" fullWidth disabled={showBtn} onClick={handleClick}>Tiếp tục</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
