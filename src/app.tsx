import { Component } from 'react'
import { Provider } from 'react-redux'
import configStore from './store'
import './app.scss'

const store = configStore()
interface IPros {
  children:any
}

class App extends Component<IPros>{
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 是将要会渲染的页面
  render () {
      return (
        <Provider store={store}>
          {this.props.children}
        </Provider>
      )
  }
}

export default App
