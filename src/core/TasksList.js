import React,{useContext} from 'react'
import productUpdateContext from '../context/app-context';
import Task from './Task'
export default function TasksList() {
    const {list} = useContext(productUpdateContext);
    return (
        <div>
            {
   list.map((mission)=> {
        return (
        <div className={'task'} key={Math.random()}>
            <Task mission={mission} /> 
        </div>)
        })
}
        </div>
    )
}
