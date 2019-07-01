import React from 'react';


import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  root: {
    width: '100%',
    // marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class CustomizedTable extends React.Component {
  constructor(props){
      super(props);
      this.state={
            open :false,
            questionstring :'',
            a :'',
            b :'',
            c: '',
            d: '',
            answer : '',
      }
  }
  componentDidUpdate(prevProps,prevState){
    console.log('----componentDidlUpdate',prevProps,prevState);
    if(prevProps != this.props){
        if(this.props.properties.questionstring){
            this.setState({
                questionstring :this.props.properties.questionstring,
                    a :this.props.properties.option.a,
                    b :this.props.properties.option.b,
                    c: this.props.properties.option.c,
                    d: this.props.properties.option.d,
                    answer : this.props.properties.answer,
            })
        }else{
            this.setState({
                questionstring :"",
                    a :"",
                    b :"",
                    c: "",
                    d: "",
                    answer : "",
            })
        } 
    }
    }
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    
  };

  render(){  
    const { classes } = this.props;
    const updatedQuestion={
        questionstring :this.state.questionstring,
          a :this.state.a,
          b :this.state.b,
          c: this.state.c,
          d: this.state.d,
        answer : this.state.answer,
  }
    console.log('state',this.state)
  return (
      <div>
    <Dialog
        open={this.props.Open}
        onClose={this.props.Close}
        aria-labelledby="form-dialog-title"
    >
        <form className={classes.form} onSubmit={ this.props.SubmitQuestion(updatedQuestion)}>      
        <DialogTitle id="form-dialog-title">Add Question</DialogTitle>
        <DialogContent>
        
        <TextField
            autoFocus
            margin="dense"
            id="question"
            label="Question"
            value={this.state.questionstring}
            onChange={this.handleChange("questionstring")}
            fullWidth
        />
        <div style={{display: 'flex' ,justifyContent : 'space-between'}}>
        <TextField
            autoFocus
            onChange={this.handleChange("a")}
            variant="outlined"
            margin="dense"
            id="a"
            value={this.state.a}
            label="A"
            halfWidth
        />
        <TextField
            autoFocus
            onChange={this.handleChange("b")}
            margin="dense"
            variant="outlined"
            id="b"
            value={this.state.b}
            label="B"
            halfWidth
        />
        </div>
        <div style={{display: 'flex' ,justifyContent : 'space-between'}}>
        <TextField
            autoFocus
            margin="dense"
            variant="outlined"
            id="c"
            value={this.state.c}
            label="C"
            onChange={this.handleChange("c")}
            halfWidth
        />
        <TextField
            autoFocus
            margin="dense"
            variant="outlined"
            id="d"
            value={this.state.d}
            label="D"
            onChange={this.handleChange("d")}
            halfWidth
        />
        </div>
        <TextField
                  name="answer"
                  id="standard-with-placeholder"
                  value={this.state.answer}
                  select
                  label="Correct Answer"
                  // className={classes.textField}
                  value={this.state.answer}
                  onChange={this.handleChange("answer")}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  helperText="Please select correct answer"
                  margin="dense"
                  variant="outlined"
                >
                    <option  value="a"> A </option>
                    <option  value="b"> B </option>
                    <option  value="c"> C </option>
                    <option  value="d"> D </option>
                </TextField>
        </DialogContent>
        <DialogActions>
        <Button onClick={this.props.handleclose} color="primary">
            Cancel
        </Button>
        <Button  color="primary" type="submit" >
            Submit
        </Button>
        </DialogActions>
        </form>
    </Dialog>
    {console.log('props',this.props.Questions)}
    </div>
  );
 }
}

export default  withStyles(styles)(CustomizedTable);