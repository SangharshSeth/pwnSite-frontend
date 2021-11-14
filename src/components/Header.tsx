import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: "60px",
  },
  active: { fontSize: "14px", fontFamily: "Roboto",cursor: 'pointer'},
  inactive: {
    fontSize: "14px",
    fontFamily: "Roboto",
    color: "grey",
    cursor: 'pointer'
  },
});

interface IHeaderProps {

}
const Header: React.FC<IHeaderProps> = () => {
  //assets

  //styles
  const classes = useStyles();
  const history = useHistory();


  //states
  const [active, setActive] = React.useState('')
  //jsx
  return (
    <div className={classes.root}>
      <div
        style={{
          fontSize: "14px",
          fontFamily: "Arvo",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <p
          className={window.location.href.split('/')[3] === 'home' ? classes.active : classes.inactive}
          onClick={() => history.push("/home")}
          style={{marginLeft: 'auto'}}
        >
          Home
        </p>
        <div
          style={{
            height: "8px",
            width: "8px",
            backgroundColor: "#00838F",
            borderRadius: "50%",
          }}
        ></div>
        <p className={active === 'learn' ? classes.active : classes.inactive} onClick={() => history.push("/learn")}>Learn</p>
        <div
          style={{
            height: "8px",
            width: "8px",
            backgroundColor: "#00838F",
            borderRadius: "50%",
          }}
        ></div>
        <p className={active === 'hack' ? classes.active : classes.inactive}>Hack</p>
        <p
          style={{
            marginLeft: "auto",
            fontSize: "14px",
            padding: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
          onClick={() => history.push("/signup")}
        >
          J<span style={{ color: "cyan" }}>O</span>IN
        </p>
      </div>
    </div>
  );
};

export default Header;
