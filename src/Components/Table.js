import React from 'react';

import {QuestionAdd , QuestionDelete,getAllQuestion1 ,QuestionUpdate } from '../state/actions/QuestionAction'
import Modal from './Modal';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';


const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
    icon: {
      margin: theme.spacing(1),
      fontSize: 32,
    },
  }))(TableCell);

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
            updatemodal :false,
            properties : {},
      }
  }
  componentDidMount=()=>{
    console.log('componentDidMount');
    this.props.getAllQuestion1();
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  Clickclose=()=>{
    this.setState({ open: false ,updatemodal : false,properties : {} });
  }
  handleSubmitQuestion = updatedQuestion => e => {
    e.preventDefault();
    console.log('updatedquestion111',updatedQuestion)
    if(this.state.updatemodal){
      console.log('condition true ');
      this.setState({ open: false ,updatemodal: false, properties : {} })
      this.props.QuestionUpdate(updatedQuestion,this.state.id);
    }else{
      this.setState({ open: false , properties : {} });
      this.props.QuestionAdd(updatedQuestion)
    }
  };
  openupdatemodal=(question) =>{
    console.log('Table openUpdateModal', question );
    this.setState({ open: true ,updatemodal : true,id : question._id , properties : question });
  }

  render(){  
    const { classes } = this.props;
    console.log('state',this.state)
  return (
      <div>
        <Modal SubmitQuestion={this.handleSubmitQuestion} handleclose={this.Clickclose} Open={this.state.open} Close={this.state.open}  properties={this.state.properties}/>
      <Button variant="contained" onClick={this.handleClickOpen} style={{textAlign:'center'}}> Add Question </Button>
      { this.props.loading ? 
        <div style={{display: "flex", justifyContent: "center", marginTop: "200px"}} >
          <CircularProgress className={classes.progress} />
        </div>  :
      <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
            <TableRow> 
              <CustomTableCell>Question</CustomTableCell> 
              <CustomTableCell align="right">A</CustomTableCell>
              <CustomTableCell align="right">B</CustomTableCell>
              <CustomTableCell align="right">C</CustomTableCell>
              <CustomTableCell align="right">D</CustomTableCell>
              <CustomTableCell align="right">Answer</CustomTableCell>
              <CustomTableCell align="right"> Delete </CustomTableCell>
              <CustomTableCell align="right"> Update </CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log('this.props.question',this.props.Questions)}
            {this.props.Questions.map(row => (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.questionstring}
                </CustomTableCell> 
                <CustomTableCell align="right">{row.option.a}</CustomTableCell>
                <CustomTableCell align="right">{row.option.b}</CustomTableCell>
                <CustomTableCell align="right">{row.option.c}</CustomTableCell>
                <CustomTableCell align="right">{row.option.d}</CustomTableCell>
                <CustomTableCell align="right">{row.answer}</CustomTableCell>
                {/* <CustomTableCell align="right"><Button onClick={()=>this.props.QuestionDelete(row._id)}>Delete</Button></CustomTableCell> */}
                <CustomTableCell align="right"><DeleteIcon className={classes.icon} onClick={()=>this.props.QuestionDelete(row._id)}/> </CustomTableCell>
                <CustomTableCell align="right"><Button onClick={()=>this.openupdatemodal(row)}>Update</Button></CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>  }
      {console.log('props',this.props.Questions)}
    </div>
  );
 }
}


const mapStateToProps = ( {question} )=> {
    const { Questions,loading } = question ;
    return { Questions,loading }
 
}; 

export default  (connect(mapStateToProps,{QuestionAdd , QuestionDelete,getAllQuestion1 ,QuestionUpdate}))(withStyles(styles)(CustomizedTable));
