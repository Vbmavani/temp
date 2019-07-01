import {QUESTION_ADD,QUESTION_DELETE,QUESTION_GETALL,QUESTION_GETALL_SUCCESS,QUESTION_GETALL_FAILURE,QUESTION_UPDATE} from  '../actions/actionTypes'

const initialState = {
    Questions : [ ],
    loading : false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case QUESTION_ADD:
            return {
                ...state,
                Questions : [...state.Questions,action.question]
            }
        case QUESTION_DELETE:
            let QuestionTotal = state.Questions.filter( (Question) => { return !(Question._id === action.id ) })
            return {
                ...state,
                Questions : QuestionTotal
            } 
        case QUESTION_GETALL:
            console.log('123',action)
            return {
                ...state,
                loading :true,   
            }
        case QUESTION_GETALL_SUCCESS:
            console.log('123',action)
            return {
                ...state,
                Questions : action.question,
                loading :false   
            }
        case QUESTION_GETALL_FAILURE:
            console.log('123',action)
            return {
                ...state,
                loading : false,   
            }       
        case QUESTION_UPDATE:
             let QuestionAll = state.Questions.map( (Question) => { 
            if(Question._id === action.id ){
                return action.question;
            }
            return Question;
            })
            return {
                ...state,
                Questions : QuestionAll
            } 
        
    }
    return state;
};

export default reducer;