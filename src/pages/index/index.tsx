import { Component, Dispatch } from 'react'
import { AnyAction } from 'redux'
import { connect } from 'react-redux'
import { counterState } from 'src/store/reducers/counter'
import { View, Swiper, SwiperItem, Button } from '@tarojs/components'
import { RootState } from 'src/store/reducers'
import { add, minus } from '../../store/actions/counter'
import './index.scss'
import service from '../../services'


interface IProps extends counterState{  
  addClick:() => RootState
  minusClick: () => RootState
}

const mapStateToProps = (state:RootState) => {
  const { counter } = state
  return {
    num:counter.num
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
      addClick: () => {
        dispatch(add())
      },
      minusClick: () => {
        dispatch(minus())
      }
  }
};

class Index extends Component<IProps> {
  state = {
    name:'joan'
  }
  componentWillMount () { }
 
  componentDidMount () {}

  componentWillUnmount () {}

  componentDidShow () { }

  componentDidHide () { }

  getHttp() {
    service.getFilmList()
  }

  render () {
    const { num, addClick, minusClick} = this.props
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
          {num + this.state.name}
        </View>
        <Button onClick={() => {addClick()}}>
            +1
        </Button>
        <Button onClick={() => {minusClick()}}>
            -1
        </Button>
        <Button onClick={() => {this.getHttp()}}>
            请求
        </Button>
      </View>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)