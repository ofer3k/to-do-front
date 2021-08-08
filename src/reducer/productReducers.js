export const productReducer=(state,action)=>{
    
    switch (action.type) {
        case 'init_list':
            console.log({...action.list},'state')
            return{...action.list}

        case 'add_task':
        // product[action.name]=action.value    
        return{...state}

        default:
            break;
    }

}