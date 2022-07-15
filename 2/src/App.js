import { Component } from "react";
import styled from 'styled-components';

const Wraper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const BtnStyle = styled.button`
    background-color: #ffffff;
    display: block;
    width: 300px;
    padding: 15px 120px;
    font-size: 32px;
    margin: 15px 45px;
    border-radius: 15px;
    cursor: pointer;
`

const Title = styled.h2`
    margin: 15px 45px;
    border-bottom: 2px solid #00ccff;
    border-top: 2px solid #00ccff;
    line-height: 25px;
    &:nth-of-type(1) {
        width: 50px;
        color: red;
    }
    &:nth-of-type(2) {
        width: 57px;
        color: blue;
        margin-top: 30px;
    }
    &:nth-of-type(3) {
        width: 75px;
        color: #33cc33;
        margin-top: 30px;
    }
`
const ResultContainer = styled.span`
    min-width: 300px;
    font-size: 28px;
    border: 2px solid black;
    border-radius: 20px;    
    padding: 53px 40px;
    text-align: center;
    margin: 35px 0 0 30px;
`


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { green:0, red:0, blue: 0};
  }

  increase(color) {
    if (color === "green" && this.state.green < 255) {
      this.setState((state) => ({
        green: state.green + 1,
      }));
    } else if (color === "red" && this.state.red < 255) {
      this.setState((state) => ({
        red: state.red + 1,
      }));
    } else if (color === "blue" && this.state.blue < 255) {
      this.setState((state) => ({
        blue: state.blue + 1,
      }));
    }else if (this.state.green === 255 || this.state.red === 255 || this.state.blue === 255) {
        alert('Can not increase anymore');
    }
  }

  decrease(color) {
    if (color === "green" && this.state.green > 0) {
      this.setState((state) => ({
        green: state.green - 1,
      }));
    } else if (color === "red" && this.state.red > 0) {
      this.setState((state) => ({
        red: state.red - 1,
      }));
    } else if (color === "blue" && this.state.blue > 0) {
      this.setState((state) => ({
        blue: state.blue - 1,
      }));
    } else if (this.state.green === 0 || this.state.red === 0 || this.state.blue === 0) {
        alert('Can not decrease anymore');
    }
  }

  render() {
    return (
      <Wraper>
          <div>
          <Title >RED</Title>
          <BtnStyle onClick={() => this.increase("red")}> + </BtnStyle>
          <BtnStyle onClick={() => this.decrease("red")}> - </BtnStyle>

          <Title >BLUE</Title>
          <BtnStyle onClick={() => this.increase("blue")}> + </BtnStyle>
          <BtnStyle onClick={() => this.decrease("blue")}> - </BtnStyle>

          <Title >GREEN</Title>
          <BtnStyle onClick={() => this.increase("green")}> + </BtnStyle>
          <BtnStyle onClick={() => this.decrease("green")}> - </BtnStyle>
          </div>
        <ResultContainer>
            RGB({this.state.red}, {this.state.green}, {this.state.blue})
        </ResultContainer>
      </Wraper>
    );
  }
}

export default App;
