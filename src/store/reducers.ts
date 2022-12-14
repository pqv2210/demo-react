import { combineReducers } from "@reduxjs/toolkit"
import { homePageReducer } from "../reducers"

export function createReducer() {
  return combineReducers({
    homePage: homePageReducer,
  })
}
