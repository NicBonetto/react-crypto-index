import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import fetchData from '../utils/fetch-data';

const FlexOuterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  box-sizing: border-box;
`;

const DashboardContainer = styled.div`
  height: 460px;
  width: 100%;
  box-sizing: border-box;  
`;

const FlexInnerWrapper = styled.div`
  flex-direction: column;
  flex: 1 1 0%;
  box-sizing: border-box;  
`;

class Panel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bitcoinRate: null
    };
  }

  async getData() {
    const data = await fetchData();
    return data;
  }

  async componentWillMount() {
    const data = await this.getData();

    this.setState(prevState => {
      return Object.assign({}, prevState, {bitcoinRate: data});
    });
  }

  render() {
    const { children } = this.props;
    const childrenWithProps = React.Children.map(children, child => 
      React.cloneElement(child, { rate: this.state.bitcoinRate })
    );

    return (
      <FlexOuterWrapper>
        <DashboardContainer>
          <FlexInnerWrapper>
            { childrenWithProps }
          </FlexInnerWrapper>
        </DashboardContainer>
      </FlexOuterWrapper>
    );
  }
}

export default Panel;