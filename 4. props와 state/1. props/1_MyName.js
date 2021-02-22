import React, {Component} from 'react';
import PropTypes from 'prop-types';


//새로운 컴포넌트(MyName) 생성
class MyName extends Component {
    static defaultProps = { //defaultProps 설정
        name: '기본이름'
      }
    static propTypes = { //propsTypes 설정
        name: PropTypes.string
      }

    render() {
        return (
            <div>
                안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다. 
            </div>
        )
    }
}


// 위 코드와 동일하다
// MyName.defaultProps = {
//     name: '기본 이름'
// }

// MyName.propsTypes = {
//     name: PropTypes.string
// }

export default MyName
//MyName 컴포넌트를 사용할 수 있게 내보내준다.