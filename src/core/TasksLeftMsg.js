import React,{useMemo,useContext} from 'react'
import productUpdateContext from '../context/app-context';
export default function TasksLeftMsg() {
    const {list} = useContext(productUpdateContext);
    
    const unDone = useMemo(() => ReduceForIsDone(list), [list]);

    function ReduceForIsDone(list){
       let num= list.reduce(function (accumulator, currentValue){
            if(currentValue.isDone)
            return accumulator+=1
    
            return accumulator},0)
    return num
    }

// Another way to track memo
    // function unDoneTodoCounter(list) {
    //     let unDoneMissions=list.filter(obj => obj.isDone === false);
    //   return unDoneMissions.length;
    // }

    return (
        <div>
            {list.length===0&&<p>Your list is empty</p>}
    {list.length>0&&
        <div className={'memo_title'}> 
    <span className={'memo_title__text'}>
    Tasks left unfinished   {unDone}/{list.length}
    </span> 
    </div >}
        </div>
    )
}
