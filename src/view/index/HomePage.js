import React from 'react';

/**
 * @desc JSX 写法及动态 state 改变数值学习
 * @author supervons
 * @date 2020/08/05
 */
class HomePage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            text: '你好'
        }
    }

    onResize(){
        return <h1>{this.state.text}</h1>
    }

    render() {
        return (
            <div style={{backgroundColor: 'yellow', height: '300px', width: '300px'}}>
                {this.onResize()}
                <button onClick={()=>this.setState({text: '改变为点击字符'})}>点击</button>
            </div>
        );
    }
}

export default HomePage;
