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
var reactstrap_1 = require("reactstrap");
var react_router_dom_1 = require("react-router-dom");
require("./NavMenu.css");
var FlightTabs = /** @class */ (function (_super) {
    __extends(FlightTabs, _super);
    function FlightTabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false
        };
        _this.toggle = function () {
            _this.setState({
                isOpen: !_this.state.isOpen
            });
        };
        return _this;
    }
    FlightTabs.prototype.render = function () {
        return (React.createElement(reactstrap_1.Container, null,
            React.createElement(reactstrap_1.NavbarToggler, { onClick: this.toggle, className: "mr-2" }),
            React.createElement(reactstrap_1.Collapse, { className: "d-sm-inline-flex flex-sm-row-reverse", isOpen: this.state.isOpen, navbar: true },
                React.createElement("ul", { className: "navbar-nav flex-grow" },
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: "/" }, "Home")),
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: "/counter" }, "Counter")),
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: "/fetch-data" }, "Fetch data"))))));
    };
    return FlightTabs;
}(React.Component));
var JourneyLog = /** @class */ (function (_super) {
    __extends(JourneyLog, _super);
    function JourneyLog(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeSector: 0,
            blockOffTime: _this.props.sectors[0].scheduleTimeOfDep,
            blockOnTime: _this.props.sectors[0].scheduleTimeOfArr,
            arrival: _this.props.sectors[0].arrival
        };
        // You must bind 'this' to every event function, so it knows what this is!
        _this.handleChange = _this.handleChange.bind(_this);
        _this.changeFlight = _this.changeFlight.bind(_this);
        return _this;
    }
    JourneyLog.prototype.handleChange = function (event) {
        console.log(event.target.value);
    };
    JourneyLog.prototype.changeFlight = function (event, sectorID) {
        this.setState({
            activeSector: (sectorID - 500)
        });
    };
    JourneyLog.prototype.render = function () {
        var _this = this;
        // Use the LET keyword to declare a local variable (previously 'var')
        // Use the CONST keyword to declare a local constant - NB: MUST be initialized at creation and NOT changed!
        // Create a list of button elements containing a string of the full flight code: callsign + flight number
        var flightNumbers = this.props.sectors.map(function (sectorKey) {
            return React.createElement("button", { onClick: function (event) { return _this.changeFlight(event, sectorKey.flightNumber); } }, sectorKey.callsign + sectorKey.flightNumber);
        });
        return (React.createElement("div", { className: "sectorRecord" },
            flightNumbers,
            React.createElement("h1", null, this.props.sectors[this.state.activeSector].callsign + this.props.sectors[this.state.activeSector].flightNumber),
            React.createElement("p", null, this.props.sectors[this.state.activeSector].departure),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Block Off Time:",
                    React.createElement("input", { type: "text", value: this.props.sectors[this.state.activeSector].scheduleTimeOfDep, onChange: this.handleChange })),
                React.createElement("li", null,
                    "Take-off Time:",
                    React.createElement("input", { type: "text" })),
                React.createElement("li", null,
                    "Landing Time:",
                    React.createElement("input", { type: "text" })),
                React.createElement("li", null,
                    "Block On Time:",
                    React.createElement("input", { type: "text", value: this.props.sectors[this.state.activeSector].scheduleTimeOfArr, onChange: this.handleChange }))),
            React.createElement("input", { type: "text", value: this.props.sectors[this.state.activeSector].arrival })));
    };
    return JourneyLog;
}(React.Component));
exports.default = JourneyLog;
//# sourceMappingURL=JourneyLog.js.map