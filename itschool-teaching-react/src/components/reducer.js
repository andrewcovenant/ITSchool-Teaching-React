export const initialState = {
    products: []
}


export function reducer(state, action){
    switch(action.type){
        case 'ADD_TO_CART':{
           console.log(state, action);
           initialState.products.push(action.payLoad)
           return initialState;
         
            }
        }
    }
    
