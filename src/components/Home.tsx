import * as React from 'react'
import { Button, Card, CardActionArea, CardActions, CardMedia, makeStyles } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom'
import banner from './banner.png'
import axios from 'axios'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: '40px',
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    media: {
        height: 140,
    },

})

interface IHomeProps extends RouteComponentProps {

}
const Home: React.FC<IHomeProps> = ({history}) => {

    //make styles
    const classes = useStyles()

    //functions
    const fetchExpress = () => {
        axios.get('/express').then(response => {
            console.log(response)
        })
    }
    //jsx 
    return (<>
     <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={banner}
                    title="Contemplative Reptile"
                />
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" variant='contained' onClick={() => history.push('/signup')}>
                    Sign Up
                </Button>
                <Button size="small" color="primary" variant='contained' onClick={fetchExpress}>
                    Log In
                </Button>
            </CardActions>
        </Card>
   </> )
}

export default Home