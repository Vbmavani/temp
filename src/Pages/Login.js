import {login} from '../state/actions/AuthAction'

import {connect} from 'react-redux'
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import { withStyles } from '@material-ui/styles';

import {withRouter,Link as LinkRouter,Redirect} from 'react-router-dom'


const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email : '',
            password :'',
        }
    }
    handleChangeInputText=()=>{
        this.setState({
          [event.target.name]: event.target.value
        });
        console.log(this.state);
    }
    HandleLogin=()=>{
        event.preventDefault();
        this.props.login(this.state.email,this.state.password)
    }
    
    render(){
    const { classes } = this.props;
    if(this.props.studentdashboard){
        return <Redirect to="/Quiz" />
    }
    console.log('render')
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <form className={classes.form} onSubmit={this.HandleLogin}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={this.handleChangeInputText}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.handleChangeInputText}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                  {this.props.loading ? "Loading" : "Sign In" }  
                </Button>
                <Grid container>
                    <Grid item xs>
                    <LinkRouter to="/login" >
                        Forgot password?
                    </LinkRouter>
                    </Grid>
                    <Grid item>
                    <LinkRouter to="/register" >
                        Don't have an account? Sign Up
                        </LinkRouter>
                    </Grid>
                </Grid>
                </form>
            </div>
            </Container>
        );
    }
}

const mapStateToProps = ( {auth}) => {
  console.log('auth',auth);
  const { loading, studentdashboard } = auth ;
  return { loading, studentdashboard } 

}; 

export default  (connect(mapStateToProps,{login}))(withStyles(styles)(Login));
