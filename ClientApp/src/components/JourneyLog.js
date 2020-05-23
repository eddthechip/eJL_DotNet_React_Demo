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
require("./NavMenu.css");
var TPicker_1 = require("./TPicker");
var JourneyLog = /** @class */ (function (_super) {
    __extends(JourneyLog, _super);
    function JourneyLog(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeSector: props.sectors[0].sectorID,
            blockOffTime: props.sectors[0].scheduleTimeOfDep,
            blockOnTime: props.sectors[0].scheduleTimeOfArr,
            arrival: props.sectors[0].arrival
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
            activeSector: (sectorID)
        });
    };
    JourneyLog.prototype.render = function () {
        var _this = this;
        // Use the LET keyword to declare a local variable (previously 'var')
        // Use the CONST keyword to declare a local constant - NB: MUST be initialized at creation and NOT changed!
        // Create a list of button elements containing a string of the full flight code: callsign + flight number
        var flightNumbers = this.props.sectors.map(function (sectorKey) {
            return React.createElement("button", { className: _this.state.activeSector === (sectorKey.sectorID) ? "btn-tab-active" : "btn-tab", onClick: function (event) { return _this.changeFlight(event, sectorKey.sectorID); } }, sectorKey.callsign + sectorKey.flightNumber);
        });
        return (React.createElement("div", null,
            React.createElement("div", { className: "sector-nav-bar" }, flightNumbers),
            React.createElement("div", { className: "sector-record" },
                React.createElement("h1", null, this.props.sectors[this.state.activeSector].callsign + this.props.sectors[this.state.activeSector].flightNumber),
                React.createElement("p", null, this.props.sectors[this.state.activeSector].departure),
                React.createElement("ul", null,
                    React.createElement("li", { className: "input-list" },
                        "Block Off Time:",
                        React.createElement(TPicker_1.TPicker, { time: this.props.sectors[this.state.activeSector].scheduleTimeOfDep, changeCallback: this.handleChange })),
                    React.createElement("li", { className: "input-list" },
                        "Block Off Time:",
                        React.createElement(TPicker_1.TPicker, { changeCallback: this.handleChange })),
                    React.createElement("li", { className: "input-list" },
                        "Block Off Time:",
                        React.createElement(TPicker_1.TPicker, { changeCallback: this.handleChange })),
                    React.createElement("li", { className: "input-list" },
                        "Block Off Time:",
                        React.createElement(TPicker_1.TPicker, { time: this.props.sectors[this.state.activeSector].scheduleTimeOfArr, changeCallback: this.handleChange }))),
                React.createElement("input", { type: "text", value: this.props.sectors[this.state.activeSector].arrival }))));
    };
    return JourneyLog;
}(React.Component));
exports.default = JourneyLog;
//# sourceMappingURL=JourneyLog.js.map