"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var LoginForm = /** @class */ (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm(props) {
        var _this = _super.call(this, props) || this;
        //  In a traditional DOM (browser), input elements are rendered and the browser manages the state 
        // (its rendered value).As a result, the state of the actual DOM will differ from that of the 
        // component.This is not ideal as the state of the view will differ from that of the component.
        // In React, components should always represent the state of the view and not only at the point of
        // initialization. To enforce that, functions like this are used to automatically update the
        // component's state whenever it changes.
        _this.handleInputChange = function (e) {
            // Store the name and value of the inputbox that fired the event
            var _a = e.target, name = _a.name, value = _a.value;
            // Update the state nodes with the values
            if (name == 'crewID') {
                _this.setState({ crewID: value });
            }
            else {
                _this.setState({ password: value });
            }
        };
        _this.handleLogin = function (e) {
            // Stop the HTML element from sending a POST request
            e.preventDefault();
            //const currentState { crewID, password } = this.state;
            // Clear existing errors    
            _this.setState({ errorMsg: '' });
            console.log(_this.state.crewID + ' ' + _this.state.password);
            /* Sanitise and check the crewID */
            if (_this.state.crewID === null) {
                _this.setState({ errorMsg: "Crew ID can't be blank" });
            }
            else if (isNaN(parseInt(_this.state.crewID))) {
                _this.setState({ errorMsg: "Crew ID must be a number" });
            }
            // Sanitise and check the password
            if (_this.state.password === null || _this.state.password === '') {
                _this.setState({ errorMsg: "Password can't be blank" });
            }
            if (_this.state.errorMsg !== '') {
                console.log("Good login credentials entered");
                // Message box confirming success, plus re-reoute the page to the Journey Log
                //window.location.reload()
            }
            else {
                console.log(_this.state.errorMsg + ' yh got here ');
            }
        };
        // LoginForm defaults
        _this.state = {
            crewID: '',
            password: '',
            errorMsg: '',
            submitted: false,
            loading: false
        };
        // You have to bind the instance of this to each function that needs it
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.handleLogin = _this.handleLogin.bind(_this);
        return _this;
    }
    LoginForm.prototype.render = function () {
        return (React.createElement("div", { className: "Login" },
            React.createElement("form", { onSubmit: this.handleLogin },
                React.createElement("label", null, "Email"),
                React.createElement("input", { type: "text", name: "crewID", placeholder: "Enter your crew ID", onChange: this.handleInputChange }),
                React.createElement("label", null, "Password"),
                React.createElement("input", { type: "password", name: "password", placeholder: "Enter your password", onChange: this.handleInputChange }),
                React.createElement("button", { type: "submit" }, "Sign-In"))));
    };
    return LoginForm;
}(React.Component));
exports.default = LoginForm;
//export default LoginForm;
//# sourceMappingURL=LoginForm.js.map