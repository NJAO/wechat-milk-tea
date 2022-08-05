import { Component } from 'react'
import './app.scss'

interface state {
  readonly myName:string
  [key:string]:any
}

class App extends Component{
  state: Readonly<state> = {
    myName:'sdsasd'
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
