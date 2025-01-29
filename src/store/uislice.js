import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      apiResponseData: {},
      isLoading: true,
}

const uiActionSlice = createSlice({
      name: "uiAction",
      initialState,
      reducer: {
            onGetApiResponseHandler: (state, action) => {
                  state.apiResponseData = action.payload
                  state.isLoading = false;
            },
      }

})

export const {onGetApiResponseHandler} = uiActionSlice.actions

export const uiActionSliceReducer = uiActionSlice.reducer