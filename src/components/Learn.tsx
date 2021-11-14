
import React from "react";
import { Card, Grid, makeStyles, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import webIcon from './web.svg'
import binaryIcon from "./binary.png";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    flexWrap: "wrap",
    margin: "50px",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    height: "200px",
    width: "200px",
    backgroundColor: "#1f2833",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ILearnProps {}
const Learn: React.FC<ILearnProps> = () => {
  //assets
  
  //styles
  const classes = useStyles();
  const history = useHistory();

  //states

  //jsx
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.cards}>
        <Card className={classes.paper}>
          <img src={webIcon} alt="web" height="60px" width="60px" />
          <p style={{ color: "white", fontSize: "18px" }}>Web</p>
        </Card>
        <Card className={classes.paper}>
          {" "}
          <img src={binaryIcon} alt="web" height="60px" width="60px" />
          <p style={{ color: "white", fontSize: "18px" }}>Binary Exploitation</p>
        </Card>
        <Card className={classes.paper}>card 2</Card>
        <Card className={classes.paper}>card 4</Card>
      </div>
    </div>
  );
};

export default Learn;
