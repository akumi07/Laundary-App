import {createSlice} from"@reduxjs/toolkit"

export const CartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            //if item already present then just incerase number .
            const itemPresent=state.cart.find((item)=>item.id==action.payload.id) ;
            if(itemPresent){
                itemPresent.quantity++;
            }
            else{
                state.cart.push({...action.payload,quantity:1})
            }
        },
        removeFromCart:(state,action)=>{
            const removeItem=state.cart.filter((item)=>item.id!==action.payload.id);
            state.cart=removeItem;

        },
        incrementQuantity:(state,action)=>{
            const itemPresent=state.cart.find((item)=>item.id==action.payload.id) ;
            itemPresent.quantity++;
        },
        decrementQuantity:(state,action)=>{
            const itemPresent=state.cart.find((item)=>item.id==action.payload.id) ;
            if(itemPresent.quantity==1){
                itemPresent.quantity=0;
                const removeItem=state.cart.filter((item)=>item.id!==action.payload.id);
            state.cart=removeItem;
            }
            else{
                itemPresent.quantity--;
            }

        },
        cleanCart:(state)=>{
            state.cart=[];
        }
    }
});

export const {addToCart,removeFromCart,incerementQuantity,decrementQuantity,cleanCart}=CartSlice.actions

export default CartSlice.reducer;