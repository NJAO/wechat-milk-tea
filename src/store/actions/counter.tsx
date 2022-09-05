import { ADD, MINUS } from '../constants/counter'
  
export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的 action
export const asyncAdd = ():object => {
  return (dispatch:Function):void =>  {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}