import * as React from 'react';
import './NavMenu.css';
import { TPicker } from './TPicker';

interface SectorRecord {
    sectorID: number,
    callsign: string,
    flightNumber: number,
    departure: string,
    scheduleTimeOfDep: string,
    scheduleTimeOfArr: string,
    arrival: string
}

// Properties is used to set constants that won't change. Here, the properties passed are a list of SectorRecords
interface JourneyLogProps {
    sectors: SectorRecord[]
}

// State handles variables, things that change as the app moves along
interface JourneyLogState {
    activeSector: number,
    blockOffTime: string,
    takeOffTime?: string,
    landingTime?: string,
    blockOnTime: string,
    arrival: string
}

export default class JourneyLog extends React.Component<JourneyLogProps, JourneyLogState> {
    constructor(props: JourneyLogProps) {
        super(props)

        this.state = {
            activeSector: props.sectors[0].sectorID,
            blockOffTime: props.sectors[0].scheduleTimeOfDep,
            blockOnTime: props.sectors[0].scheduleTimeOfArr,
            arrival: props.sectors[0].arrival
        }

        // You must bind 'this' to every event function, so it knows what this is!
        this.handleChange = this.handleChange.bind(this)
        this.changeFlight = this.changeFlight.bind(this)
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
    }

    changeFlight(event: React.MouseEvent<HTMLButtonElement>, sectorID: number) {
        this.setState({
            activeSector: (sectorID)
        });
    }

    render() {
        // Use the LET keyword to declare a local variable (previously 'var')
        // Use the CONST keyword to declare a local constant - NB: MUST be initialized at creation and NOT changed!
        // Create a list of button elements containing a string of the full flight code: callsign + flight number
        const flightNumbers = this.props.sectors.map((sectorKey) => // Could also use 'function(sectorKey) {'. The => implies a function with a VOID return
            <button
                className={this.state.activeSector === (sectorKey.sectorID) ?  "btn-tab-active" : "btn-tab"}
                onClick={(event) => this.changeFlight(event, sectorKey.sectorID)}>
                {sectorKey.callsign + sectorKey.flightNumber}
            </button>
        );

        return (
            <div>
                <div className="sector-nav-bar">
                    {flightNumbers}
                </div>

                <div className="sector-record">
                    <h1>{this.props.sectors[this.state.activeSector].callsign + this.props.sectors[this.state.activeSector].flightNumber}</h1>
                    <p>{this.props.sectors[this.state.activeSector].departure}</p>
                    <ul>
                        <li className="input-list">Block Off Time:
                            <TPicker time={this.props.sectors[this.state.activeSector].scheduleTimeOfDep} changeCallback={this.handleChange} />
                        </li>
                        <li className="input-list">Block Off Time:
                            <TPicker changeCallback={this.handleChange} />
                        </li>
                        <li className="input-list">Block Off Time:
                            <TPicker changeCallback={this.handleChange} />
                        </li>
                        <li className="input-list">Block Off Time:
                            <TPicker time={this.props.sectors[this.state.activeSector].scheduleTimeOfArr} changeCallback={this.handleChange} />
                        </li>
                    </ul>
                    <input type="text" value={this.props.sectors[this.state.activeSector].arrival} />
                </div>
            </div>
        );
    }
}