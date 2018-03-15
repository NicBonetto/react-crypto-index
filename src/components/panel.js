import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Panel = styled.div`
  background-color: ${props => props.bGColor};
  width: ${props => props.wdth};
  height: ${props => props.hght};
`;

const Panel = ({ bGColor, wdth, hght }) => {
  return (
    <Panel bGColor={props.bGColor} wdth={props.wdth} hght={props.hght}>
      { props.children }
    </Panel>
  );
}

Panel.defaultProps = {
  bGColor: '#fff',
  wdth: '300px',
  hght: '250px'
};

Panel.propTypes = {
  bGColor: PropTypes.string,
  wdth: PropTypes.string,
  hght: PropTypes.string,
  children: PropTypes.element.isRequired
};

export default Panel;