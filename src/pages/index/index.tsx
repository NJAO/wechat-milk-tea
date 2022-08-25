import { Component } from 'react'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  state = {
    name:'index'
  }
  componentWillMount () { }
 
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          data-vertical
          circular
          indicatorDots
          autoplay
        >
        <SwiperItem>
          <View className='demo-text-1'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}
