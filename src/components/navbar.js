import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavLink from './navlink';

const NavWrapper = styled.nav`
  flex-shrink: 0;
  height: 54px;
  padding: 0 20px;
  border-bottom: 1px solid rgb(218, 225, 233);
  box-sizing: border-box;  
`;

const NavFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;  
`;

const NavLeft = styled.div`
  float: left;
  display: inline-block;
  box-sizing: border-box;  
`;

const NavRight = styled.div`
  float: right;
  display: inline-block;
  box-sizing: border-box;  
`;

const NavBar = (props) => {
  return (
    <NavWrapper>
      <NavFlexWrapper>
        <NavLeft>
          <NavLink header={props.header} dollars={props.dollars}/>
          <NavLink header={props.header} dollars={props.dollars}/>
        </NavLeft>
      </NavFlexWrapper>
    </NavWrapper>
  );
}

export default NavBar;