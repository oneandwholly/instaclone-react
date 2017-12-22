import React, { Component } from 'react';
import styled from 'styled-components';

class ViewPort extends Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

// styled components
const StyledViewPort = styled(ViewPort)`
    height: 100vh;
    width: 100vw;
`;

export default StyledViewPort;