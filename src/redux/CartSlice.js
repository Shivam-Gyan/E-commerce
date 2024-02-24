import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataService } from "../firebase/Database/Database";

const initialState={
    carts:[]
};


export const fetchCart=createAsyncThunk(
    "cart/fetchCart",
    async(userId)=>{
        const response= await DataService.getFromCartDatabase(userId);
        return response
    }
)

export const addCart=createAsyncThunk(
    "cart/addCart",
    async({userId,addItem})=>{
        const response= await DataService.AddToCartDatabase(userId,addItem);
        return response
    }
)


export const updateCart=createAsyncThunk(
    "cart/updateCart",
    async({userId,dataId,newItem})=>{
        const response= await DataService.updateCartItem(userId,dataId,newItem);
        return response;
    }
)

export const deleteCart=createAsyncThunk(
    "cart/deleteCart",
    async({ userId, itemId })=>{
        await DataService.deleteCartItem(userId,itemId);
        return itemId;
    }
)


const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        clearCart(state) {
            state.carts = []; // Clear the carts array
          },

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCart.fulfilled,(state,action)=>{
            state.carts=action.payload;
        })
        .addCase(addCart.fulfilled,(state,action)=>{
            state.carts.push(action.payload);
        })
        .addCase(deleteCart.fulfilled,(state,action)=>{
            state.carts = state.carts.filter(item => item.dataId !== action.payload);
        })
        .addCase(updateCart.fulfilled,(state,action)=>{
            const index=state.carts.findIndex(item=>item.dataId===action.payload.dataId)
            state.carts.splice(index,1,action.payload);
            
        })
    
    }
})


export const {clearCart}=cartSlice.actions;

export default cartSlice.reducer;