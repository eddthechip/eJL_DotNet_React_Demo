import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

class FlightTabs extends React.Component {
    public state = {
        isOpen: false
    };

    public render() {
        return (
            <Container>
                <NavbarToggler onClick={this.toggle} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                        </NavItem>
                    </ul>
                </Collapse>
            </Container>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

interface SectorRecord {
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
            activeSector: 0,
            blockOffTime: this.props.sectors[0].scheduleTimeOfDep,
            blockOnTime: this.props.sectors[0].scheduleTimeOfArr,
            arrival: this.props.sectors[0].arrival
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
            activeSector: (sectorID - 500)
        });
    }

    render() {
        // Use the LET keyword to declare a local variable (previously 'var')
        // Use the CONST keyword to declare a local constant - NB: MUST be initialized at creation and NOT changed!
        // Create a list of button elements containing a string of the full flight code: callsign + flight number
        const flightNumbers = this.props.sectors.map((sectorKey) => // Could also use 'function(sectorKey) {'. The => implies a function with a VOID return
            <button onClick={(event) => this.changeFlight(event, sectorKey.flightNumber)}>
                {sectorKey.callsign + sectorKey.flightNumber}
            </button>
        );

        return (
            <div className="sectorRecord">
                {flightNumbers}


                <h1>{this.props.sectors[this.state.activeSector].callsign + this.props.sectors[this.state.activeSector].flightNumber}</h1>

                <p>{this.props.sectors[this.state.activeSector].departure}</p>
                <ul>
                    <li>Block Off Time:<input type="text" value={this.props.sectors[this.state.activeSector].scheduleTimeOfDep} onChange={this.handleChange} /></li>
                    <li>Take-off Time:<input type="text" /></li>
                    <li>Landing Time:<input type="text" /></li>
                    <li>Block On Time:<input type="text" value={this.props.sectors[this.state.activeSector].scheduleTimeOfArr} onChange={this.handleChange} /></li>
                </ul>
                <input type="text" value={this.props.sectors[this.state.activeSector].arrival} />
            </div>
        );
    }
}