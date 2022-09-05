import { Component } from 'react'
import { View, Map } from '@tarojs/components'
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
         <Map longitude={113.14} latitude={23.08} />
      </View>
    )
  }
}
