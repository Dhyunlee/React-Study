import React, { Component, Fragment } from "react";

class App extends Component {
    render() {
        const value = 15;
        const age = 20;
        return (
            <Fragment>
                <div>
                    {/* if 조건부 랜더링 */}
                    {
                        (function() {
                            if(value === 1) return <div>1이다.</div> 
                            if(value === 2) return <div>2이다.</div> 
                            if(value === 3) return <div>3이다.</div> 
                            return <div>조건에 해당되지 않은 숫자</div> 
                        })()
                    }
                </div>
                <div>
                    {/* 화살표 함수로! */}
                    {
                        (() =>{
                            if(age <= 13) return <div>어린이입니다.</div> 
                            if(age <= 19) return <div>청소년입니다.</div> 
                            return <div>성인이다.</div> 
                        })()
                    }
                </div>
            </Fragment>
        );
    }
}


export default App;
