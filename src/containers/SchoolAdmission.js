import React, {Component} from "react";
import Input from "../components/UI/Input";
// import {connect} from "react-redux";
class SchoolAdmission extends Component {
    state = {
        admissionForm: {
            firstname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your First Name'
                },
                value: '',
                validation: {
                    required: true,
                    maxLength: 20,
                    isCharacter:true
                },
                valid: false,
                touched: false
            },
            lastname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Last Name'
                },
                value: '',
                validation: {
                    required: true,
                    maxLength: 20,
                    isCharacter:true
                },
                valid: false,
                touched: false
            },
            class: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Class'
                },
                value: '',
                validation: {
                    required: true,
                    isAlphaNumeric:true
                },
                valid: false,
                touched: false
            },
            yearOfPassing: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Year of Passing'
                },
                value: '',
                validation: {
                    required: true,
                    inputType: "number",
                    maxValue: 2017
                },
                valid: false,
                touched: false
            },
            percentOfMarks: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Percentage of Marks'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric:true
                },
                valid: false,
                touched: false
            }  
        },
        formIsValid: false  
    };
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.maxValue) {
            isValid = value <= rules.maxValue && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isCharacter) {
            const pattern = /^[a-zA-Z]+$/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isAlphaNumeric) {
            const pattern = /^[a-z0-9]+$/i;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedAdmissionForm = {
            ...this.state.admissionForm
        };
        const updatedFormElement = { 
            ...updatedAdmissionForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedAdmissionForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedAdmissionForm) {
            formIsValid = updatedAdmissionForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({admissionForm: updatedAdmissionForm, formIsValid: formIsValid});
    }
    render() {
        let inputElemArr = [];
        for(let key in this.state.admissionForm) {
            inputElemArr.push({
                id: key,
                config: this.state.admissionForm[key]
            })
        }
        let form = (
            <form>
                {inputElemArr.map((formElement) =>
                    (<Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        label={formElement.config.elementConfig.placeholder}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} 
                        />))}
                  
                  <button type="button"  disabled={!this.state.formIsValid}>Submit</button>
                        
            </form>
        );
        return (
           <div> 
            {form}
           </div> 
        )
    }
}
``
export default (SchoolAdmission);