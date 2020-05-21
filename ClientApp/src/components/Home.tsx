import * as React from 'react';
import { connect } from 'react-redux';
import JourneyLog from '../components/JourneyLog';

interface SectorRecord {
    callsign: string,
    flightNumber: number,
    departure: string,
    scheduleTimeOfDep: string,
    scheduleTimeOfArr: string,
    arrival: string
}

let sectorList: SectorRecord[] = [
    {
        callsign: 'BEE',
        flightNumber: 500,
        departure: 'BHX - Birmingham',
        scheduleTimeOfDep: '06:55',
        scheduleTimeOfArr: '08:00',
        arrival: 'GCI - Guernsey'
    },
    {
        callsign: 'BEE',
        flightNumber: 501,
        departure: 'GCI - Guernsey',
        scheduleTimeOfDep: '08:25',
        scheduleTimeOfArr: '08:55',
        arrival: 'JER - Jersey'
    },
    {
        callsign: 'BEE',
        flightNumber: 502,
        departure: 'JER - Jersey',
        scheduleTimeOfDep: '09:20',
        scheduleTimeOfArr: '10:25',
        arrival: 'BHX - Birmingham'
    }
]

const Home = () => (
  <div>
    <h2>eJourneyLog remastered using using:</h2>
    <ul>
      <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
      <li><a href='https://facebook.github.io/react/'>React</a> and <a href='https://redux.js.org/'>Redux</a> for client-side code</li>
      <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
    </ul>
        <JourneyLog sectors={sectorList} />
  </div>
);

export default connect()(Home);
