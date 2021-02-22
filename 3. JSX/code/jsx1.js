import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/* 감싸져 있는 태그 */}
        <div>
          <input type='text' />
          {/* 꼭 닫혀야 하는 태그 */}
        </div>
        <div>
          <h1>오늘부터 시작이야!</h1>
        </div>
      </div>
    );
  }
}

export default App;
