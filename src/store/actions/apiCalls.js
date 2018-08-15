import * as actionTypes from "./actionTypes";
import * as utils from "../utils";
export const fetchResultsSuccess = ( results ) => {
    return {
        type: actionTypes.FETCH_RESULT_SUCCESS,
        results: results
    };
};



export const fetchResultsStart = () => {
    return {
        type: actionTypes.FETCH_RESULT_START
    };
};

export const fetchResults = () => {
    return dispatch => {
        dispatch(fetchResultsStart());
        let results = [];
        let maxTotalDet = {marks: 0, index: ''};
        setTimeout(() => {
         results =  dummmData.map((item,ind)=>{
             item.totalMarks = 0;
             item.passed = "Pass";
             item.name = utils.convertFirstLetterToUpperCase(item.name);
             item.maxMarks = false;
             for(let i in item.marks) {
                item.totalMarks += item.marks[i];
                item.passed = (item.passed === "Pass" && item.marks[i] >=20 ? "Pass": "Fail");
             }
             if(item.totalMarks > maxTotalDet.marks) {
                maxTotalDet = {marks : item.totalMarks, index: ind }
             }
             return item;
         });
         results[maxTotalDet.index].maxMarks = true;  
         results = utils.sortByCharacters(results, "name");
         
         console.log('results', results);
         dispatch(fetchResultsSuccess(results));   
        }, 1000);
    } 
};

const dummmData = [
    { name: 'raJiv kuMAr',
    marks: {
    Maths: 18,
    English: 21,
    Science: 45
    },
    rollNumber: 'KV2017-5A2'
    },
    { name: 'abhishek',
    marks: {
    Maths: 43,
    English: 30,
    Science: 37
    },
    rollNumber: 'KV2017-5A1'
    },
    { name: 'zoya',
    marks: {
    Maths: 42,
    English: 31,
    Science: 50
    },
    rollNumber: 'KV2017-5A3'
    }]
    ;