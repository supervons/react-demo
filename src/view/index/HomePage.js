import React from 'react';

/**
 * @desc JSX 写法及动态 state 改变数值学习
 * @author supervons
 * @date 2020/08/05
 */
class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '你好',
            time: new Date(),
            condition: false,
            numbers: [1, 2, 3, 4, 5],
            msg: '1'
        }
        this.changeText = this.changeText.bind(this)
    }

    componentDidMount() {
        this.autoTikTok()
    }

    autoTikTok() {
        setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    onResize() {
        return <h1>{this.state.text}</h1>
    }

    changeText() {
        this.setState({text: '改变为点击字符'})
    }

    conditionRender() {
        if (this.state.condition) {
            return <UserGreeting/>
        } else {
            return <GuestGreeting/>
        }
    }

    /*
     * 循环渲染组件
     **/
    loopRender(){
        const listItems = this.state.numbers.map((number) =>
            <li key={number}>{number}</li>
        );
        return listItems
    }

    addMaps(){
        const temp = this.state.numbers
        temp.push(Math.random().toFixed(2) * 100)
        this.setState({numbers: temp})
    }

    changeHandle=(e)=>{
        this.setState({
            msg:e.target.value
        })
    }

    inputChange=()=>{

    }

    render() {
        return (
            <div style={{backgroundColor: 'yellow', height: '300px', width: '300px'}}>
                {this.onResize()}
                {this.state.time.toLocaleTimeString()}
                {this.conditionRender()}
                <input value={this.state.msg} onChange={this.changeHandle}/>
                {this.state.msg}
                <ul>
                    {this.loopRender()}
                </ul>
                {/*阻止渲染*/}
                <WarningBanner warn={false}/>

                <WelcomeDialog/>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button onClick={()=>this.addMaps()}>数组增加</button>
                    <button onClick={this.changeText}>点击</button>
                    {/*条件渲染*/}
                    <button onClick={()=>this.setState({condition : !this.state.condition})}>条件渲染</button>
                </div>
            </div>
        );
    }
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}


export default HomePage;
