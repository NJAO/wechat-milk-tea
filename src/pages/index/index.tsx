import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  
  componentWillMount () { }
 
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  logName():void {
    console.log();
  }

  render () {
    return (
      <View className='index'>
        <Text>Helsld!</Text>
        <Button onClick={this.logName}>点击</Button>
      </View>
    )
  }
}
