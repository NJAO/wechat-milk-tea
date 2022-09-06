import { AnyAction } from 'redux'
import { ADD, MINUS } from '../constants/counter'

export interface counterState{
  num:number,
}

const INITIAL_STATE:counterState = {
  num: 0,
}

export default function counter (state:counterState = INITIAL_STATE, action:AnyAction) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      } 

    case MINUS:
      return {
        ...state,
        num: state.num - 1
      }
    default:
      return state
  }
}