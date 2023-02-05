import { TextField, Modal, InputAdornment, Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
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
  function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
      let chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }
  const handleChange = (e) => {
    props.setPassword(hashCode(e.target.value));
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
                type="password"
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
