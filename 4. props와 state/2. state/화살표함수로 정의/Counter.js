import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
  };

  handleIncrease = () => {
    console.log('this: ', this);
    this.setState({
      number: this.state.number + 1,
    });
  };

  //좀 더 간결하게!
  handleDecrease = () => {
    this.setState(state => ({
      number: state.number - 1,
    }));
  };

  /* 

     객체 비구화 할당으로 간결하게!
     : (state) 가 ({ number }) 로 
       작성하는 것을 비구조 할당이라한다. 

       
    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
            number: number - 1
            })
        );
    } 

  */

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>

        {/* 이벤트 설정 */}
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
