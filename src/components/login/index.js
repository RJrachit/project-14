import { TextField, Modal, InputAdornment, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import AccountCircle from "@mui/icons-material/AccountCircle";
import { PASSWORD } from "../../constant";
import "./login.scss";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 275,
  bgcolor: "#e8e8e8",
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
  cursor: 'pointer',
};

function Login(props) {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    props.setPassword(e.target.value);
    if(e.target.value === PASSWORD) {
      console.log(11111111);
      navigate("/project-14/homepage");
    }
  }
  return (
    <div className="login">
      <div className={active ? `black-layer active` : `black-layer`}>
        <Modal
          open={true}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {active ? (
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                id="password"
                label="Password"
                variant="standard"
                onChange={handleChange}
              />
            ) : (
              <div onClick={() => setActive(true)}>Hey there ! Bite me.</div>
            )}
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Login;
