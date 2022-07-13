export const initialState = {products: []}

export function reducer(state, action) {
    switch(action.type) {
        case "addToCard":
            initialState.products.push(action.payload.title)
            break;

        default:
            return
      }
  }
  
   