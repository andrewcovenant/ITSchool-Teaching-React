export const initialState = {products: []}


export const reducer = (state,action)=>{
    initialState.products.push(action.payLoad.title);
    //de facut verificare daca exista deja produsul 
    switch(action.type){
        case 'addToCart':
                initialState.products.push(action.payLoad.title);
            break;
        default:
            return
    }
}