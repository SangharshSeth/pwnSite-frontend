import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import mailIcon from "./mailIcon.svg";
import pwIcon from "./passwordIcon.svg";
import Header from "./Header";
import axios from "axios";
import Footer from "./Footer";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles({
  root: {
    "& .MuinotchedOutline": {
      borderColor: "orange",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "yellow",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
        color: 'red'
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFFFFF",
      },
      "& .MuiOutlinedInput-input": {
        color: 'white'
      },
      "& .MuiInputLabel-outlined": {
        color: 'red'
      },
      "& .MuiFormLabel-root.Mui-focused": {
        color: 'red'
      }
    },
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    boxSizing: "border-box",
  },
  signUpForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    // border: "1px solid #4caf50",
    borderRadius: "4px",
    borderTopRightRadius: "100px",
    borderBottomLeftRadius: "100px",
    width: "50%",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    backgroundColor: '#1f2833',
    height: '100%'
  },
  username: {
    width: "320px",
    marginTop: "20%",
  },
  password: {
    width: "320px",
    marginTop: "20px",
    color: "red",
  },
  submitButton: {
    display: "flex",
    width: "100px",
    marginTop: "auto", 
    backgroundColor: "#27313d", //41B3A3
    color: "#E53935",
    fontSize: "14px",
    fontFamily: "Lato",
    borderRadius: "23px",
    "&:hover": {
      backgroundColor: "#27313d",
    },
  },
  icon: {
    border: "1px dashed green",
  },
  container: {
    display: "flex",
    flexDirection: 'row-reverse',
    flexGrow: 1,
    margin: "50px",
    gap: '100px',
  },
});

interface IFormProps {}
const Form: React.FC<IFormProps> = () => {
  //assets
  const MailIcn = () => {
    return <img src={mailIcon} alt="logo" height="40px" width="40px" />;
  };
  const PwdIcn = () => {
    return <img src={pwIcon} alt="logo" height="40px" width="40px" />;
  };

  //make styles
  const classes = useStyles();

  //states
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [serverData, setServerData] = React.useState('');
  const [error, setError] = React.useState({error: false, errorMessage: ''})
  const [success, setSuccess] = React.useState('');

  //functions
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("dataa" + e.target.value);
    const obj = { username: "", password: "" };
    obj.username = userName;
    obj.password = password;
    console.log(obj);
    axios
      .post("/signUp", obj)
      .then((response) => {
        const type = response.data.type;
        if(type === 'duplicate'){
          const errorObj = {
            error: true,
            errorMessage: 'This user already exists'
          }
          setError(errorObj)
        }
        if(type === 'success'){
          setSuccess(response.data.message)
        }
        setServerData(type)
      });
    
  };

  const handleClose = () => {
    const obj = {
      error: false,
      errorMessage: ''
    }
    setSuccess('');
    setError(obj)
  }

  const handleNameChange = (e: any) => {
    const value = e.target.value;
    if(value.length === 0){
      alert('gib username pls thank u')
      return;
    }
    setUserName(value);
  }

  //jsx
  return (
    <div className={classes.root}>
      <Header/>
      {/* <p style={{fontSize:'40px', fontFamily: 'Arvo', fontWeight: 'bold', color: '#41B3A3'}}>Join Here</p> */}
      <Snackbar open={error.error || success.length > 0} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }} >
        <Alert severity={error.error? 'error': 'success'} onClose={handleClose} variant='filled'>
          {error.error?error.errorMessage: success}
        </Alert>
      </Snackbar>
      <div className={classes.container}>
        {/* <div style={{border: '1px solid green', height: 'max-content', marginTop: '100px'}}>
          <img src={leftIcon} alt='leftIcon' height='100%' width='500px'/>
        </div> */}

        <form className={classes.signUpForm} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            label="Username"
            className={classes.username}
            value={userName}
            onChange={handleNameChange}
            InputProps={{
              endAdornment: <MailIcn />,
            }}
            InputLabelProps={{
              style: { color: '#90A4AE'}
            }}
            required
          />
          <TextField
            variant="outlined"
            label="Password"
            className={classes.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: <PwdIcn />,
            }}
            InputLabelProps={{
              style: { color: '#90A4AE' },
            }}
            type="password"
            required
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "auto",
              marginBottom: "100px",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              className={classes.submitButton}
              variant="contained"
            >
             JOIN
            </Button>
          </div>
        </form>
      </div>
      {/* <div
        style={{
          height: "1px",
          width: "100%",
          backgroundColor: "#B2DFDB",
          borderRadius: "2px",
        }}
      ></div> */}
      <Footer />
    </div>
  );
};

export default Form;
