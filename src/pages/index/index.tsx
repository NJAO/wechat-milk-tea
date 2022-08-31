import { Component } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
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
          className='swiper-container'
          circular
          indicatorDots
          autoplay
        >
        {[1,2,3].map(item => <SwiperItem key={item} className='swiper-item'></SwiperItem>)}
        </Swiper>
        <View>
          
        </View>
        <View>{this.state.name}</View>
      </View>
    )
  }
}
