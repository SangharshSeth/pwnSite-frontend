import * as React from 'react'
import { Button, Card, CardActionArea, CardActions, CardMedia, makeStyles } from '@material-ui/core'
import { RouteComponentProps } from 'react-router-dom'
import banner from './banner.png'
import axios from 'axios'
import Header from './Header'
import Learn from './Learn'

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "40px",
    width: "40%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  media: {
    height: 140,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "50px",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  intro: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  text: {
    fontSize: "50px",
    fontFamily: "Roboto",
    marginBottom: "0px",
    marginTop: '0px',
    color: 'white'
  },
});

interface IHomeProps extends RouteComponentProps {

}
const Home: React.FC<IHomeProps> = ({history}) => {

    //make styles
    const classes = useStyles()

    //functions

    //Render Home Component

    //jsx 
    return (
      <>
        <Header />
        <div className={classes.container}>
          <div className={classes.intro}>
            <p className={classes.text} style={{ color: "#FFFFFF" }}>
              <span style={{ color: "#E53935" }}>1</span>337
            </p>
            <p className={classes.text}>
              <span style={{ color: "#E53935" }}>H</span>akerman
            </p>
            <p className={classes.text}>
              <span style={{ color: "#E53935" }}>G</span>oes
            </p>
            <p className={classes.text}>
              <span style={{ color: "#E53935" }}>B</span>rrrr.........
            </p>

          </div>
        </div>
      </>
    );
}

export default Home