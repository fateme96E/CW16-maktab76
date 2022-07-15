import { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import List from './Components/q1/List';

const btnStyle = {
    fontSize: '22px',
    backgroundColor: '#ffffff',
    padding: '8px 55px',
    borderRadius: '8px',
    margin: '15px 0 50px 669px',
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: []
    }
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({colors:[...this.state.colors,color]});
  }
  render() {
    return (
      <div>
        <button style={btnStyle} onClick={this.changeColor}>add color</button>
        <List colors={this.state.colors}/>
      </div>
);
  }
}
