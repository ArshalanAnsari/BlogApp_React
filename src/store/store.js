import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import { uiActionSliceReducer } from './uislice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
        ui: uiActionSliceReducer,
    }
});


export default store;