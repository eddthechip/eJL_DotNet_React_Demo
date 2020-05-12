import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';

// State details for the Login form
type LoginFormState = {
    formData: string, // Contains login form data
    errors: {}, // Contains login field errors
    formSubmitted: false, // Indicates submit status of login form
    loading: false // Indicates in progress state of login form
}

class LoginForm extends React.Component<LoginFormState> {

    constructor(props: LoginFormState) {
        super(props)
    }

    static defaultProps = {
        formData: "noone@nowhere.com",
        errors: "perfect",
        formSubmitted: false,
        loading: false
    }

    /*handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }

    validateLoginForm = (e) => {

        let errors = {};
        const { formData } = this.state;

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        } else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
            errors.password = "Password's length must between 6 to 16";
        }

        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    }

    login = (e) => {

        e.preventDefault();

        // let errors = this.validateLoginForm();

        if (errors === true) {
            alert("You are successfully signed in...");
            window.location.reload()
        } else {
            this.setState({
                errors: errors,
                formSubmitted: true
            });
        }
    }*/

    render() {

        /*const { errors, formSubmitted } = this.state;
        
        return (
            <div className="Login">
                <form onSubmit={this.login}>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Enter your email" onChange={this.handleInputChange} />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password" onChange={this.handleInputChange} />
                    <button type="submit">Sign-In</button>
                </form>
            </div>
        )*/
        return (
            <div className="Login">
                <form>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Enter your email" value={this.props.formData} />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password" />
                    <button type="submit">Sign-In</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;