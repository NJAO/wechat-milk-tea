import { Component } from 'react'
import { View, Button } from '@tarojs/components'
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
  state = {
    name:'点单',
  }
  componentWillMount () { }
 
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button>{this.state.name}</Button>
      </View>
    )
  }
}
