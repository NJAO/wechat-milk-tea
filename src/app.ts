import { Component } from 'react'
import './app.scss'

class App extends Component{
  state: Readonly<{}> ={
    myName: 'sdsd'
  }

  componentDidMount () {
    console.log(this.state.myName);
  }

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
