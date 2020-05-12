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
        return _super.call(this, props) || this;
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
    LoginForm.prototype.render = function () {
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
        return (React.createElement("div", { className: "Login" },
            React.createElement("form", null,
                React.createElement("label", null, "Email"),
                React.createElement("input", { type: "text", name: "email", placeholder: "Enter your email", value: this.props.formData }),
                React.createElement("label", null, "Password"),
                React.createElement("input", { type: "password", name: "password", placeholder: "Enter your password" }),
                React.createElement("button", { type: "submit" }, "Sign-In"))));
    };
    LoginForm.defaultProps = {
        formData: "noone@nowhere.com",
        errors: "perfect",
        formSubmitted: false,
        loading: false
    };
    return LoginForm;
}(React.Component));
exports.default = LoginForm;
//# sourceMappingURL=LoginForm.js.map