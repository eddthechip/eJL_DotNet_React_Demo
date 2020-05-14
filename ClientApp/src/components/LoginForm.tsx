import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';

// State structure for the LoginForm
/* Define an interface for all component properties
 * Use syntax parameter?: to make the property optional */
interface LoginFormProps {
    crewID: string,      // Crew ID (number or null)
    password?: string,
    errors: {                   // Login field errors
        loginError: boolean,
        crewIDError: string,
        passwordError: string
    },
    formSubmitted?: false,       // Indicates submit status of login form
    loading?: false              // Indicates in progress state of login form
}

export default class LoginForm extends React.Component<LoginFormProps> {

    constructor(props: LoginFormProps) {
        super(props)

        // LoginForm defaults
        this.state = {
            crewID: '',
            password: '',
            errors: {
                loginError: false,
                crewIDError: '',
                passwordError: ''
            },
            formSubmitted: false,
            loading: false
        }

        // You have to bind the instance of this to each function that needs it
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    //  In a traditional DOM (browser), input elements are rendered and the browser manages the state 
    // (its rendered value).As a result, the state of the actual DOM will differ from that of the 
    // component.This is not ideal as the state of the view will differ from that of the component.
    // In React, components should always represent the state of the view and not only at the point of
    // initialization. To enforce that, functions like this are used to automatically update the
    // component's state whenever it changes.
    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Store the name and value of the inputbox that fired the event
        const { name, value } = e.target;

        // Update the state nodes with the values
        this.setState({ [name]: value });
    }

    handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        // Stop the HTML element from sending a POST request
        e.preventDefault();

        // Clear existing errors
        this.setState({
            errors: {
                loginError: false,
                crewIDError: '',
                passwordError: ''
            }
        });

        // Sanitise and check the crewID
        if (this.props.crewID === null) {
            this.setState({
                errors: {
                    loginError: true,
                    crewIDError: "Crew ID can't be blank"
                }
            })
        }
        else if (isNaN(parseInt(this.props.crewID))) {
            this.setState({
                errors: {
                    loginError: true,
                    crewIDError: "Crew ID must be a number"
                }
            })
        }

        // Sanitise and check the password
        if (this.props.password === null || this.props.password === '') {
            this.setState({
                errors: {
                    loginError: true,
                    passwordError: "Password can't be blank"
                }
            })
        }

        if (this.props.errors.loginError) {
            console.log("Good login credentials entered");
            // Message box confirming success, plus re-reoute the page to the Journey Log
            window.location.reload()
        }
        else {
            console.log(this.props.errors.crewIDError + ' yh got here ' + this.props.errors.passwordError);
            this.setState({
                formSubmitted: true
            });
        }
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleLogin}>
                    <label>Email</label>
                    <input type="text" name="crewID" placeholder="Enter your crew ID" onChange={this.handleInputChange} />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password" onChange={this.handleInputChange} />
                    <button type="submit">Sign-In</button>
                </form>
            </div>
        )
    }
}

//export default LoginForm;