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
// A component to display an attractive Time input
var TPicker = /** @class */ (function (_super) {
    __extends(TPicker, _super);
    function TPicker(props) {
        var _this = _super.call(this, props) || this;
        var startTime = {
            hour: 0,
            minute: 0
        };
        if (props.time !== undefined) {
            // Convert the time property string to numeric state using the +string operator
            startTime = {
                // Hour is first two characters of time string, or 0 if undefined
                hour: (props.time.substring(0, 2) !== undefined) ? +props.time.substring(0, 2) : 0,
                // Minute is third and fourth characters of time string, or 0 if undefined
                minute: (props.time.substring(3, 5) !== undefined) ? +props.time.substring(3, 5) : 0
            };
            console.log(props.time);
        }
        // Correct erroneous time ranges
        if (startTime.hour < 0)
            startTime.hour = 0;
        if (startTime.hour > 23)
            startTime.hour = 23;
        if (startTime.minute < 0)
            startTime.minute = 0;
        if (startTime.minute > 59)
            startTime.minute = 59;
        // Default component state
        _this.state = {
            hour: startTime.hour,
            minute: startTime.minute,
            error: ''
        };
        // Function binding
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    TPicker.prototype.handleChange = function (event) {
        // Prevent default
        //event.preventDefault;
        // Create a flag to determine whether to fire the changeCallback function
        var timeValid = true;
        if (event.target.name === "hour") {
            this.setState({
                hour: +event.target.value
            });
            if (+event.target.value > 23 || +event.target.value < 0) {
                this.setState({
                    hour: +event.target.value,
                    error: 'Hour must be between 0 and 23'
                });
                //Prevent changeCallback firing
                timeValid = false;
            }
            else {
                // Clear errors
                this.setState({
                    hour: +event.target.value,
                    error: ''
                });
            }
        }
        else {
            var newMinute = +event.target.value;
            this.setState({
                minute: +event.target.value
            });
            if (+event.target.value > 59 || +event.target.value < 0) {
                this.setState({
                    minute: +event.target.value,
                    error: 'Minute must be between 0 and 59'
                });
                // Prevent changeCallback firing
                timeValid = false;
            }
            else {
                // Clear errors
                this.setState({
                    minute: +event.target.value,
                    error: ''
                });
            }
        }
        // If time is valid, clear errors and changeCallback defined, fire a change event to the parent component
        if (timeValid && this.props.changeCallback !== undefined) {
            this.props.changeCallback(event);
        }
    };
    TPicker.prototype.render = function () {
        var hourLeadingZeros = +this.state.hour < 10 ? '0' + this.state.hour : '' + this.state.hour;
        var minLeadingZeros = +this.state.minute < 10 ? '0' + this.state.minute : '' + this.state.minute;
        return (React.createElement("span", { className: "time-picker" },
            React.createElement("input", { type: "number", name: "hour", className: "time-input", onChange: this.handleChange, maxLength: 2, value: hourLeadingZeros, defaultValue: 0 }),
            React.createElement("strong", null, ":"),
            "\u00A0\u00A0\u00A0",
            React.createElement("input", { type: "number", name: "minute", className: "time-input", onChange: this.handleChange, maxLength: 2, value: minLeadingZeros, defaultValue: 0 }),
            React.createElement("span", { className: "error-msg" }, this.state.error)));
    };
    return TPicker;
}(React.Component));
exports.TPicker = TPicker;
//# sourceMappingURL=TPicker.js.map