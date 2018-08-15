import  React, {Component} from "react";
import  Table  from "../components/UI/Table";
import * as actions from "../store/actions/apiCalls";
import {connect} from "react-redux";
import  classes from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class StudentResultBoard extends Component {
    state = {
        results: [],
        loadingData: false
    }
    headerForTable = {
        name: "Student's Name",
        rollNumber: "Roll Number",
        totalMarks: "Total Marks",
        passed: "Status"
        
    }
    
    componentDidMount () {
        if(!this.props.results.length) {
        this.props.onFetchResults();
    }
    }
    render() {
        // debugger;
        let classNames = [classes['page-header'],classes['text-center']];
        return (
            !this.props.loadingData ?  
            <div>
             
             <div className={classNames.join(" ")}>
               <h1>Students​ ​Result​ ​Board</h1>
             </div>
                
            <Table headers={this.headerForTable} results={this.props.results} specialTableType="student" />
            </div>
             : "Loading Results... Please wait"
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchResults: () => dispatch( actions.fetchResults() )
    };
};
const mapStateToProps = state => {
    return {
        results: state.results,
        loadingData: state.loadingData
    }
}
export default connect( mapStateToProps, mapDispatchToProps ) (StudentResultBoard);