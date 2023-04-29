import React, { Component } from 'react'
import FunctionComponent from './Components/FunctionComponent';
import ClassComponent from './Components/ClassComponent';
import './App.css';

export class App extends Component {
  constructor(){
    super();
    this.state={
      showFunComp: false,
      showClassComp: false,
    }
    this.handleOnclickFunComp = this.handleOnclickFunComp.bind(this);
    this.hadnleOnclickClsComp = this.hadnleOnclickClsComp.bind(this);
  }

  handleOnclickFunComp = ()=>{ this.setState({ showFunComp: !this.state.showFunComp }) }  
  hadnleOnclickClsComp = ()=>{ this.setState({ showClassComp: !this.state.showClassComp}) }

  render() {
    return (
      <div className="App">
        <h1 className="heading">Styling using Functional and Class Component</h1>
        <div className="btn-box">
          <button className="btn btn-func" onClick={this.handleOnclickFunComp}>
            To see styling in Functional Component
          </button>
          <button className="btn btn-cls" onClick={this.hadnleOnclickClsComp}>
            To see styling in Class Component
          </button>
        </div>

        <div className="component-box">
          {this.state.showFunComp && <FunctionComponent />}
          {this.state.showClassComp && <ClassComponent />}
        </div>
      </div>
    )
  }
}

export default App
