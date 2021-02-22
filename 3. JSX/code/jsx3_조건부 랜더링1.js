import React, { Component, Fragment } from "react";

class App extends Component {
    render() {
        return (
            <Fragment>
                <div>
                {/* 삼항연산자 */}
                    {
                        1 + 1 === 3 
                        ? (<div>맞아요!</div>)
                        : (<div>틀려요!</div>)
                    }
                </div>
                <div>
                {/* AND 연산자 */}
                    {
                        1 + 1 === 2 && (<div>맞아요!</div>)
                    }
                </div>
            </Fragment>
        );
    }
}


export default App;
