import { makeStyles } from '@material-ui/styles'
import React from 'react'


const useStyles = makeStyles({
    root: {
        margin: '40px',

    },

})

interface IErrorPageProps{

}
const ErrorPage: React.FC<IErrorPageProps> = () => {

    //make styles
    const classes = useStyles()

    //states


    //functions


    //jsx 
    return <div className={classes.root}>
        <p style={{textAlign: 'center', fontSize: '100px', fontWeight: 'bold', color: 'orange'}}>404</p>
    </div>
}

export default ErrorPage
