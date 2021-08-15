
export const productReducer= (state,action)=>{
    
    switch (action.type) {
        case 'init_list':
            return[...action.list]

        case 'add_mission':
        return[...state,{title:action.title,description:action.description,isDone:false}]
        
        case 'remove_mission':
            let stateAfterFilter = state.filter(function(value){return value.title !== action.title;});
        return[...stateAfterFilter]
        
        case 'update_mission':
        let answer;
        action.isDone==='false'?answer=false:answer=true
        let objIndex = state.findIndex((obj => obj.title === action.title));
        state[objIndex].isDone=(!answer)
        return[...state]        
        default:
            break;
    }

}