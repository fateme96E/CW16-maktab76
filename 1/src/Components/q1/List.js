import React, { Component } from 'react';
import './style.css';

class List extends Component {
    state = {}
    render() {
        return (
            <ul>{this.props.colors.map((item) => 
            <li style={{backgroundColor:item}} className="styleList">{item}</li>)}</ul>
);
    }
}
export default List;