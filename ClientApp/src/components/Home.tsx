import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
    <h2>eJourneyLog remastered using using:</h2>
    <ul>
      <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
      <li><a href='https://facebook.github.io/react/'>React</a> and <a href='https://redux.js.org/'>Redux</a> for client-side code</li>
      <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
    </ul>
    <p>Click "Login" to see more...</p>
  </div>
);

export default connect()(Home);
