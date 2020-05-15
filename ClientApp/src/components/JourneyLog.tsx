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

interface JourneyLogProps {
    flightNumber: string
}

interface JourneyLogState {
    flightNumber: string
}

export default class JourneyLog extends React.Component<JourneyLogProps, JourneyLogState> {
    constructor(props: JourneyLogProps) {
        super(props)

        this.state = {
            flightNumber: this.props.flightNumber
        }
    }

    render() {
        return (
            <h1>{ this.state.flightNumber }</h1>
        );
    }
}