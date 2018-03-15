import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => props.bGColor};
  width: ${props => props.wdth};
  height: ${props => props.hght};
`;

const Panel = (props) => {
  return (
    <Wrapper bGColor={props.bGColor} wdth={props.wdth} hght={props.hght}>
      { props.children }
    </Wrapper>
  );
}

Panel.defaultProps = {
  bGColor: '#fff',
  wdth: '400px',
  hght: '250px'
};

Panel.propTypes = {
  bGColor: PropTypes.string,
  wdth: PropTypes.string,
  hght: PropTypes.string,
  children: PropTypes.element.isRequired
};

export default Panel;