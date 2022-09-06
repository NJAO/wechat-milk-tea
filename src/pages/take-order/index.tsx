import { View,Button } from '@tarojs/components'
import  { Component, Dispatch } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import { RootState } from 'src/store/reducers'
import { counterState } from 'src/store/reducers/counter'
import { add } from '../../store/actions/counter'


interface IProps extends counterState{
  addClick:() => RootState
  minusClick: () => RootState
} 

const mapStateToProps = (state:RootState) => {
  const { counter } = state
  return {
    ...state,
    num:counter.num
  }
}

const mapDispatchToProps = (dispatch:Dispatch<AnyAction>) => ({
  addClick: () => {
    dispatch(add())
  }
})

class TakeOrder extends Component<IProps> {
  render() {
    const { num, addClick } = this.props
    return (
      <View className='take-order'>
        {num}
        <Button onClick={()=> addClick()}>+1</Button>
      </View>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TakeOrder)