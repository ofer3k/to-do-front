import { addMission,removeMission,updateMission } from "../controller/main"
export const productReducer= (state,action)=>{
    
    switch (action.type) {
        case 'init_list':
            console.log([...action.list],'state')
            return[...action.list]

        case 'add_mission':
        addMission(action.title,action.description)
        return[...state,{title:action.title,description:action.description,isDone:false}]
        
        case 'remove_mission':
            removeMission(action.title)
            let stateAfterFilter = state.filter(function(value){return value.title !== action.title;});
        return[...stateAfterFilter]
        
        case 'update_mission':
        let answer;
        action.isDone==='false'?answer=false:answer=true
        let objIndex = state.findIndex((obj => obj.title === action.title));
        console.log(objIndex,'a')
        updateMission(action.title,!answer)
        state[objIndex].isDone=(!answer)
        return[...state]        
        default:
            break;
    }

}