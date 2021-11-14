import React from "react";
import { makeStyles } from "@material-ui/core";
import twitterIcon from "./twitter-icon.svg";
import githubIcon from "./githubIcon.svg";
import instagramIcon from "./instagram-icon.png";
import emailIcon from "./emailIcon.svg"

const useStyles = makeStyles({
  root: {
    height: "100px",
    marginTop: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#61892F'
  },
});

interface IFooterProps { }
const Footer: React.FC<IFooterProps> = () => {
  //assets

  //styles
  const classes = useStyles();
  //jsx
  return (
    <div className={classes.root}>
      <div
        style={{
          fontSize: "20px",
          fontFamily: "Roboto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          flex: "1",
        }}
      >
        <img src={twitterIcon} alt="twitter icon" height="30px" width="30px" style={{ cursor: 'pointer' }} />
        <img src={githubIcon} alt="github icon" height="30px" width="30px" style={{ cursor: 'pointer' }} />
        <img src={emailIcon} alt="email Icon" height="30px" width="30px" style={{ cursor: 'pointer' }} />
        {/* <img src={instagramIcon} alt="insta icon" height="30px" width="30px" style={{ cursor: 'pointer' }} />  */}
      </div>
    </div>
  );
};

export default Footer;
