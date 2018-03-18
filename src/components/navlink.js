import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = styled.div`
  height: 54px;
  margin-right: 8px;
  display: inline-block;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid rgb(6, 103, 208);
    box-sizing: border-box;
}
`;

const NavFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;  
`;

const NavText = styled.h4`
  display: inline-block;
  box-sizing: border-box;  
`;

const Middot = styled.span`
  margin-left: 3px;
  margin-right: 3px;
  box-sizing: border-box;  
`;

const NavDollar = styled.p`
  display: inline-block;
  box-sizing: border-box;  
`;

const NavLink = (props) => {
  return (
    <Nav>
      <NavFlexWrapper>
        <NavText>{ props.header }</NavText> <Middot>{String.fromCharCode(183)}</Middot> <NavDollar>{'$' + props.dollars }</NavDollar>
      </NavFlexWrapper>
    </Nav>
  )
}

NavLink.defaultProps = {
  header: 'Bitcoin',
  dollars: '$0.00'
};

export default NavLink;