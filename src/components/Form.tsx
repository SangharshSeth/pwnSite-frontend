import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        margin: '40px',

    },
    signUpForm: {
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        width: '400px',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    username: {
        width: '320px',
    },
    password: {
        width: '320px',
        marginTop: '20px'
        
    },
    submitButton: {
        display: 'flex',
        width: '100px',
        marginTop: '20px'
    }
})

interface IFormProps{

}
const Form: React.FC<IFormProps> = () => {

    //make styles
    const classes = useStyles()

    //states
    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')

    //functions
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const obj = {'username': '', 'password': ''}
        obj.username = userName
        obj.password = password
        console.log(obj)
    }

    //jsx 
    return <div className={classes.root}>
        <form className={classes.signUpForm} onSubmit={handleSubmit}>
            <TextField
                variant='outlined'
                label='Username'
                className={classes.username}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
                variant='outlined'
                label='Password'
                className={classes.password}
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />
            <Button type='submit' color='primary' className={classes.submitButton} variant='contained'>Sign Up</Button>
        </form>
    </div>
}

export default Form
