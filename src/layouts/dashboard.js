import React from 'react';
import Panel from '../components/panel';
import PropTypes from 'prop-types';
import NavBar from '../components/navbar';

const Dashboard = (props) => {
  return (
    <Panel>
      <NavBar/>
    </Panel>
  );
}

Dashboard.propTypes = {
  bGColor: PropTypes.string,
  wdth: PropTypes.string,
  hght: PropTypes.string
}

export default Dashboard;