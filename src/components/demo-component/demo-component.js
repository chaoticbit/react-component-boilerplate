import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './demo-component.css';

export default class DemoComponent extends Component {
    constructor(props) {
        super(props);
        /** Component State and Methods initialization if necessary */
    }

    static defaultProps = {
        message: 'This is a React demo component'
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return(            
            <div className="demo-component">
                {this.props.message}
            </div>                                            
        )
    }
}

DemoComponent.propTypes = {
    message: PropTypes.string.isRequired
}