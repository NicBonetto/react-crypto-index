import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import fetchData from '../utils/fetch-data';
import fetchHistory from '../utils/fetch-history';

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
      bitcoinRate: null,
      bitcoinHistory: null
    };
  }

  async getData() {
    const data = await fetchData();
    return data;
  }

  async getHistory() {
    const data = await fetchHistory();
    return data;
  }

  async componentWillMount() {
    const data = await this.getData();
    const history = await this.getHistory();
    console.log(history)
    this.setState(prevState => {
      return Object.assign({}, prevState, {bitcoinRate: data}, {bitcoinHistory: history});
    });
  }

  render() {
    const { children } = this.props;
    const childrenWithProps = React.Children.map(children, child => 
      React.cloneElement(child, { rate: this.state.bitcoinRate, history: this.state.bitcoinHistory })
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