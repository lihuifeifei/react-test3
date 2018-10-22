import React, { Component } from 'react';
import './App.css';
import Test from './Test'
import PropTypes from 'prop-types'
class Title extends  Component{
    static propTypes={
        title:PropTypes.string
    }
    render(){
        return(
            <div>{this.props.title}</div>
        )
    }
}
Title.defaultProps={
    title:"默认标题"
}
class App extends Component {
    constructor(props){
        super(props)
        this.state={
            isRenderTest:true
        }
    }
    handleClick(){
        this.setState(
            {isRenderTest:!this.state.isRenderTest}
        )
    }
  render() {
     
    return (
      <div >
          {this.state.isRenderTest?<Test/>:"不渲染Test"}
          <hr/>
          <button onClick={()=>this.setState({})}>APP setstate更新</button>
          <button onClick={()=>this.handleClick()} >
              切换test渲染
          </button>
          <Title title="这是标题"/>
      </div>
    );
  }
}

export default App;
