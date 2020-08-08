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
            text: '你好',
            time: new Date()
        }
        this.changeText = this.changeText.bind(this)
    }

    componentDidMount() {
        this.autoTikTok()
    }

    autoTikTok(){
        setInterval(()=>{
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    onResize(){
        return <h1>{this.state.text}</h1>
    }

    changeText() {
        this.setState({text: '改变为点击字符'})
    }

    render() {
        return (
            <div style={{backgroundColor: 'yellow', height: '300px', width: '300px'}}>
                {this.onResize()}
                {this.state.time.toLocaleTimeString()}
                <button onClick={this.changeText}>点击</button>
            </div>
        );
    }
}

export default HomePage;
