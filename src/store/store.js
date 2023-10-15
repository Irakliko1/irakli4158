import { configureStore } from "@reduxjs/toolkit";
import CartServiceReducer from '../slices/cart/cart.slice'
import RemoveFromCartReducer from '../store/cart/cart'
import AuthReducer from '../slices/auth/auth.slice'


const store = configureStore({
    reducer: {
        cartService: CartServiceReducer,
        removeFromCart:RemoveFromCartReducer,
        auth : AuthReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store