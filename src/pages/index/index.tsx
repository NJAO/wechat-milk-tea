import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

type PageStateProps = {
  myName:string
}

type PageDispatchProps = {
  getRecommendMyName: () => string
}

type PageOwnProps = {}

type PageState = {
  myName:string
}

type IProps =  PageStateProps & PageDispatchProps & PageOwnProps;
export default class Index extends Component {
  componentWillMount () { }
 
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Helsld!</Text>
        <Button>点击</Button>
      </View>
    )
  }
}
