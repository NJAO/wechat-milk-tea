import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

interface props {
  [key:string] : any
}
export default class Index extends Component {
  state: Readonly<props> = {
    myName:'sdsds'
  }
  componentWillMount () { }
 
  componentDidMount () { }

  componentWillUnmount () { }
  props: Readonly<props> = {
    myName:'asdasdasd'
  } 
  componentDidShow () { }

  componentDidHide () { }

  logName = ():void => {
    console.log(this.state.myName);
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
