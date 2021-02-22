import React, {
    Component
} from 'react';

class Counter extends Component {
    state = {
        number: 0
    }
    constructor(props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this)
        this.handleDecrease = this.handleDecrease.bind(this)
    }
    handleIncrease() {
        this.setState({
            number: this.state.number + 1
        });
    };
    handleDecrease () {
        this.setState({
            number: this.state.number - 1
        });
    } 

    /* 
      [함수 선언식: 메서드]
       : 객체의 메서드를 함수 선언식을 사용해서 
         정의할 때, this는 어떤 값인지 모른다. 
         (엄밀히 말하면 window객체를 가리킨다.)
         이때 this값을 명시해주어야한다. 

         우선, constructor 메서드에 각 사용할 
         함수를 정의한 후, 정의한 함수의 this값이 
         무엇인지 명시한다.
         (bind 속성으로 해결할 수 있다.)
         

      -> 화살표 함수를 사용하면 좀 더 쉽게 사용
       
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
        )}
}

export default Counter;