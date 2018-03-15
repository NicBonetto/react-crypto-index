import React from 'react';
import Panel from '../components/panel';
import PropTypes from 'prop-types';

const Dashboard = (props) => {
  return (
    <Panel>
    </Panel>
  );
}

Dashboard.propTypes = {
  bGColor: PropTypes.string,
  wdth: PropTypes.string,
  hght: PropTypes.string
}

export default Dashboard;