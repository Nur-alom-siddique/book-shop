export default function CartReducer(state, action) {  
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) return state;

      const updatedCart = [...state.items, { ...action.payload, quantity: 1 }];
      const total = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

      return { ...state, items: updatedCart, total };
    }

    case 'REMOVE_FROM_CART': {
      const updatedCart = state.items.filter(item => item.id !== action.payload.id);
      const total = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

      return { ...state, items: updatedCart, total };
    }

    case 'INCREMENT': {
      const updatedCart = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      const total = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

      return { ...state, items: updatedCart, total };
    }

    case 'DECREMENT': {
      const updatedCart = state.items
        .map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);
      const total = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

      return { ...state, items: updatedCart, total };
    }
      
    case 'CLEARALL': {
      return {
          ...state, 
          items: []
        }      
      }

    default:
      return state;
  }
};

