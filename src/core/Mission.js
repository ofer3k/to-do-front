import React,{useState,useReducer,useContext,useEffect} from 'react'
import productUpdateContext from "../context/app-context";
import axios from 'axios'
import './../styles/main.css'

export default function Mission() {
    const {list,dispatch} = useContext(productUpdateContext);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/read/list')
        .then(function (response) {
            dispatch({type:'init_list',list:response.data})    
            console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
        console.log(list,'datadatadata')
      },[]);
    return (
        <div class="container">
<div class="div1_container">
    <p className={'div1_container__title'}>
        MY to-do-list
    </p>
 </div>
<div class="div2_container">
    {/* {
    list.map((mission)=> {
        return (<p>{mission.title}</p>)
      })
    } */}
</div>
</div>
    )
}
