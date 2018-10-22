/**
 * Created by ant on 2018/10/21.
 */
import React, { Component } from 'react';
export default class Text extends Component{
    constructor(props){
        super(props)
        console.log("constructor")
        this.state={
            time:new Date()
        }
    }
    tick(){
        this.setState(
            {
                time:new Date()
            })
    }
    componentWillMount(){
        console.log("即将加载组件 componentWillMount")
       this.timeId= setInterval(()=>this.tick(),1000)
    }
    componentDidMount(){
         console.log("组件已经加载  componentDidMount")
    }
    componentWillReceiveProps(){
        console.log("组件将要接收参数 componentWillReceiveProps")
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("组件是否应该更新 shouldComponentUpdate ")
        if(nextState.time.getSeconds()%2==0){ return true}
       return false
    }
    componentWillUpdate(){
        console.log("组件将要更新 componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("组件已经更新完毕 componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("组件将要卸载 componentWillUnmount")
        clearInterval(this.timeId )
    }
    
    render(){
        console.log("render")
        return(
            <div style={{border:"solid black 1px"}}>
                <p>Test</p>
                <p>{this.state.time.getSeconds()}</p>
            <button onClick={()=>this.setState({})}>setState点击更新</button>
                <button onClick={()=>this.forceUpdate()}>forceUpdate点击更新</button>
            </div>
        )
    }
}