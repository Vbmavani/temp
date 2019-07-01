import axios from "axios";
import {QUESTION_ADD,QUESTION_DELETE,QUESTION_GETALL,QUESTION_GETALL_SUCCESS,QUESTION_GETALL_FAILURE,QUESTION_UPDATE} from  './actionTypes'
const head='eyJhbGciOiJIUzI1NiJ9.NWNmNjQyZGYyMThkNzYzZWZlZjM2MzJk.wNGWmxLObXRL1MTkuJ7A3zwTO1SblIF5l7ei9z5gESw'

export const getall = () => {  
  console.log('getall action1');
  return {
      type: QUESTION_GETALL,
  };
  
};

export const getallsuccess = (updatequestion) => {  
    console.log('getall action2');
    return {
        type: QUESTION_GETALL_SUCCESS,
        question : updatequestion
    };
    
};
export const getallfailure = () => {  
  console.log('getall action3');
  return {
      type: QUESTION_GETALL_FAILURE
  };
  
};

export const addQuestion = (questionupdate) => {  
    return {
        type: QUESTION_ADD,
        question : questionupdate,
    };
};
export const updateQuestion = (questionupdate, questionid ) => {  
    return {
        type: QUESTION_UPDATE,
        question : questionupdate,
        id : questionid
    };
};

export const deleteQuestion = (Questionid) => {  
    return {
        type: QUESTION_DELETE,
        id : Questionid,
    };
};






export const getAllQuestion1 = () => async dispatch =>{
    console.log('getall action 1');
    dispatch( getall() )
    let headers = {
        headers: {
          Authorization: `bearer ${head}`
        }
    };
    let body = {
        level: 1,
    };
    axios
        .post(
          `http://157.230.174.240:3006/api/v1/question/getall`,
          body,
          headers
        )
        .then(response => {
          console.log('response getall',response);
          dispatch( getallsuccess(response.data.data) )
        })
        .catch(error => {
          console.log('error',error);
          dispatch( getallfailure() )
        });
    
}

export const QuestionAdd = (questionupdate) => async dispatch =>{
    console.log('AddQuestion');
    let headers = {
        headers: {
          Authorization: `bearer ${head}`
        }
    };
    let body = {
        level: 1,
        questionstring : questionupdate.questionstring,
        option:{
          a: questionupdate.a,
          b: questionupdate.b,
          c: questionupdate.c,
          d: questionupdate.d,
        },
        answer : questionupdate.answer,
  };
      axios
        .post(
          `http://157.230.174.240:3006/api/v1/question/addquestion`,
          body,
          headers
        )
        .then(response => {
          console.log('response addquestion',response);
          dispatch( addQuestion(response.data.data) )
        })
        .catch(error => {
          console.log('error',error);
        });
    
    
}

export const QuestionUpdate = (questionupdate,id) => async dispatch =>{
    console.log('QuestionUpdatestart',questionupdate)
      let headers = {
        headers: {
          Authorization: `bearer ${head}`
        }
      };
      let body = {
        level: 1,
        questionstring : questionupdate.questionstring,
        option:{
          a: questionupdate.a,
          b: questionupdate.b,
          c: questionupdate.c,
          d: questionupdate.d,
        },
        answer : questionupdate.answer,
  };
      axios
        .patch(
          `http://157.230.174.240:3006/api/v1/question/update/${id}`,
          body,
          headers
        ) 
        .then(response => {
            console.log('updateQuestionresponse',response);
            dispatch( updateQuestion(response.data.data, id ) );
        })
        .catch(error => {
          console.log('error',error);
        });
    
    // let headers={
    //     headers: {
    //         Authorization : `bearer ${head}`
    //     }
    // };
    // let body = {
    //     level: 1,
    //     questionstring : questionupdate.questionstring,
    //     option:{
    //       a: questionupdate.a,
    //       b: questionupdate.b,
    //       c: questionupdate.c,
    //       d: questionupdate.d,
    //     },
    //     answer : questionupdate.answer,
    // };
    // axios.patch(
    //     `http://157.230.174.240:3006/api/v1/question/update/${id}`,
    //     headers,
    //     body,
    // ).then(response=>{
    //     console.log('updateQuestionresponse',response);
    //     dispatch( updateQuestion(response.data.data) );
    // }).catch(error => {
    //     console.log('error',error);
    // }) 
}

export const QuestionDelete = (id) => async dispatch =>{
    //console.log('QuestionDelete',question)
    let headers={
        headers: {
            Authorization : `bearer ${head}`
        }
    };
    axios.delete(
        `http://157.230.174.240:3006/api/v1/question/deletequestion/${id}`,
        headers,
    ).then(response=>{
        console.log('deletequestion',response);
        dispatch( deleteQuestion(id) );
    }).catch(error => {
        console.log('error',error);
    })
}


