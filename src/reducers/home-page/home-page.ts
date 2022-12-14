import { Action, createSlice, Dispatch } from "@reduxjs/toolkit"
import { HomePageInitState, HomePageReducerState } from "./types"

const initialState: HomePageInitState = {
  value: 0,
}

export const homePage = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    multiplication: (state, action) => {
      state.value = state.value * action.payload
    },
  },
})

export const { increment, decrement, multiplication } = homePage.actions

export const selectValue = (state: HomePageReducerState) => state.homePage.value

export const multiplicationFunc =
  (amount: number) => (dispatch: Dispatch<Action>, getState: () => HomePageReducerState) => {
    console.log("currentValue", selectValue(getState()))
    dispatch(multiplication(amount))
  }

export const homePageReducer = homePage.reducer
