import Button from './Button';
import React,{useState,useContext,useEffect} from 'react'
import productUpdateContext from "../context/app-context";
import {validationCheck, addMission } from "../controller/main"
export default function FormInput() {
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const {list,dispatch} = useContext(productUpdateContext);
    const [isError,setIsError]=useState(false)
    const errorMsg=('you can not sign up this task')
    
    const handleSubmit=async(event,title,description,list)=>{
        event.preventDefault()
        const isValid=await validationCheck(title,description,list)
        if(isValid)
        {
            // change in server
            await addMission(title,description)
            // change in state
            dispatch({type:'add_mission',title,description})
        }
        else
        setIsError(true)
        }

        const handleChange=name=>event=>{
            console.log(name)
            switch (name) {
                case 'title':
                    setTitle(event.target.value)
                    break;
                case 'description':
                    setDescription(event.target.value)
                    break;    
                default:
                    return;
            }
        }
        useEffect(async() => {
            setIsError(false)
            },[title]); 

    return (
        <div>
            <div className="form_input">
<form className={'parent_form'} onSubmit={(e) => {handleSubmit(e,title,description,list)}}>
<div class="div1_form"><span>Title</span></div>
<div class="div2_form">
<input onChange={handleChange('title')} type='text' name='title' placeholder={'Please insert a title'} ></input>
</div>
<div class="div3_form">
<span>Desctiption</span>
</div>

<div class="div4_form">
<input onChange={handleChange('description')} name='description' placeholder={'Insert a description'} ></input>
    
</div>
<div class="div5_form">
    <Button type='submit' content={'New Task'} backgroungColor={'#003366'} color={'white'} />
</div>

<span className={'error_msg'}>{isError&&
            <p>{errorMsg}</p>
            }</span>                

     </form>
     </div>
        </div>
    )
}
