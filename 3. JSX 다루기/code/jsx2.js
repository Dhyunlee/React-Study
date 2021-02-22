import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    const name = 'lee';
    return (
      <Fragment>
        {/* Fragment 사용 */}
        <div>
          <input type='text' />
        </div>
        <div>
          <h1>hello {name}</h1>
          {/* JSX안에 JS문법 사용 */}
        </div>
      </Fragment>
    );
  }
}

export default App;
