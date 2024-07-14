import { saveToLocalStorage } from "../../helpers";
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_COUNT } from "../../action_types/ActionTypes";



const initialState = JSON.parse(localStorage.getItem("users")) || [] ;

const reducer = (state,action) => {

  console.log("reducer", state, action);

let updatedState;

switch (action.type) {
    case ADD_TO_CART:
        let index = state.findIndex((el) => el.id === action.data.id);
        
        if (index < 0) {
            updatedState = [
                ...state,
                {
                    ...action.data,
                    count: action.count
                }
            ];
            saveToLocalStorage("users", updatedState);
        } else {
            updatedState = state;
        }
        break;
        
    case REMOVE_FROM_CART:
        updatedState = state.filter((el) => el.id !== action.payload);
        break;
        
    // case UPDATE_CART_COUNT:
    //       return {
    //         ...state,
    //         cartItems: state.cartItems.map(item =>
    //           item.id === action.payload.productId ? { ...item, count: action.payload.count } : item
    //         )
    // };
    
    default:
        updatedState = state;
        break;
}

saveToLocalStorage("users", updatedState);

return updatedState;

    
}

export { reducer, initialState }

