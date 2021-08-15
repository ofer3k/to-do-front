import React,{useContext,useEffect} from 'react'
import productUpdateContext from "../context/app-context";
import axios from 'axios'
import './../styles/main.css'
// components
import Header from './Header'
import FormInput from './FormInput';
import TasksLeftMsg from './TasksLeftMsg';
import TasksList from './TasksList';
export default function ToDoFullForm() {
    const {dispatch} = useContext(productUpdateContext);
    const initial=()=>{
        axios.get('http://localhost:8000/api/products/read/list')
        .then(function (response) {
            dispatch({type:'init_list',list:response.data})    
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    useEffect(async() => {
    initial()
    },[]); 
        
    return (
<div className={'full_page'}>
    <div className="container">
        <Header/>
            <div className="div2_container">
            <FormInput />
                <div className="display_data">
                    <TasksLeftMsg   />   
                    <TasksList />
                </div>
            </div>
    </div>
</div>
        )
    }
