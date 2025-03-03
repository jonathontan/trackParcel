import { createSlice } from "@reduxjs/toolkit";
import constants from "../constants";

interface UISliceState {
  mobileBreakpoint: boolean
  tabletBreakpoint: boolean
  drawerWidth: number
}

const uiInitialState: UISliceState = {
  mobileBreakpoint: false,
  tabletBreakpoint: false,
  drawerWidth: constants.drawerWidth
}

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    setMobileBreakpoint: (state, action) => {
      state.mobileBreakpoint = action.payload
    },
    setTabletBreakpoint: (state, action) => {
      state.tabletBreakpoint = action.payload
    }
  }
})

export const uiActions = uiSlice.actions
export const uiReducer = uiSlice.reducer