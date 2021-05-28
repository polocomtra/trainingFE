import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function SignuoModal({ phone, showSignupModal }) {
  const [open, setOpen] = useState(showSignupModal);

  const styleFlex = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const handleClose = () => {
    setOpen(false);
  };

  const backToHistory=()=>{
    // handle Back Button
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <div style={styleFlex}>
            <span onClick={backToHistory}>
              <img
                src="https://meete.co/img/icons/arrow-left.svg"
                style={{ width: "20px", height: "20px" }}
              ></img>
            </span>
            <h5 style={{ fontWeight: "bold" }}>Tạo tài khoản mới</h5>
            <span onClick={handleClose}>
              <img
                src="https://meete.co/img/icons/close.svg"
                style={{ width: "24px", height: "24px", paddingLeft:'10px' }}
              ></img>
            </span>
          </div>
          <div className="d-flex justify-content-center">
            <small style={{ fontSize: ".8rem" }}>
              Số điện thoại {phone} chưa có tài khoản MEETE, tạo ngay nào!!!
            </small>
          </div>
        </DialogTitle>
        <DialogContent>
          <form>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Họ và tên đệm</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <div class="input-group" id="show_hide_password">
                      <input class="form-control" type="password" />
                      <div class="input-group-addon">
                        <a href="">
                          <i class="fa fa-eye-slash" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Xác nhận mật khẩu
                    </label>
                    <div class="input-group" id="show_hide_password">
                      <input class="form-control" type="password" />
                      <div class="input-group-addon">
                        <a href="">
                          <i class="fa fa-eye-slash" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="secondary" fullWidth>
            Đăng kí
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
