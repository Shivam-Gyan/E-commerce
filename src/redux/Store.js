import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './CartSlice'

export const store=configureStore({
    reducer:{
        cart:cartSliceReducer,
    },
    devTools:true,
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   thunk: {
    //     extraArgument: myCustomApiService,
    //   },
    //   serializableCheck: false,
    // }),
})