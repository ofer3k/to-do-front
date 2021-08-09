import React,{useState,useReducer,useContext,useEffect,useMemo} from 'react'
import productUpdateContext from "../context/app-context";
import axios from 'axios'
import './../styles/main.css'
import { validationCheck } from '../controller/main';
import Button from './Button';
import {  Col, Form, Row } from 'react-bootstrap';
export default function Mission() {
    const {list,dispatch} = useContext(productUpdateContext);
    const unDone = useMemo(() => unDoneTodoCounter(list), [list]);
    
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const [isError,setIsError]=useState(true)
    const [errorMsg,setErrorMsg]=useState('you can not sign up this task')

    const initial=async ()=>{
        axios.get('http://localhost:8000/api/products/read/list')
        .then(function (response) {
            console.log(response,'response.dataresponse.dataresponse.data')
            dispatch({type:'init_list',list:response.data})    
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    const handleSubmit=async(event,title,description,list)=>{
        event.preventDefault()
         validationCheck(title,description,list).then(res=>res?dispatch({type:'add_mission',title,description}):setIsError(true))
        }

    const handleDelete=(event)=>{
        event.preventDefault()
        console.log(event.target)
        dispatch({type:'remove_mission',title:event.target.name})    
    }

    const handleUpdate=(event)=>{
    event.preventDefault()  
    console.log(event.target)
        dispatch({type:'update_mission',title:event.target.name,isDone:event.target.value})    
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
    initial()
    setIsError(false)
    },[description,title]); 
      
    function unDoneTodoCounter(list) {
          let unDoneMissions=list.filter(obj => obj.isDone === false);
        return unDoneMissions.length;
      }
    

    return (
        <div className={'full_page'}>
        <div className="container">
    <div className="div1_container">
    <p className={'div1_container__title'}>
        MY to-do-list
    </p>
 </div>
<div className="div2_container">
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
    <Button type={'submit'} content={'New Task'} backgroungColor={'#003366'} color={'white'} />
</div>
<span className={'error_msg'}>{isError&&
            <p>{errorMsg}</p>
            } </span>
                
     </form>
     </div>
    <div className="display_data">
    {list.length===0&&<p>Your list is empty</p>}
    <>
    {list.length>0&&
        <div className={'memo_title'}> 
    <span className={'memo_title__text'}>
    Tasks left unfinished   {unDone}/{list.length}
    </span> 
    </div >}
        {
        list.map((mission)=> {
            return (
            <div className={'task'} key={Math.random()}>
<Form >
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
    <span className={mission.isDone?'unCheck':'check'}>
    <input type={'checkbox'}  name={mission.title} value={mission.isDone} onClick={handleUpdate} />
    </span>
    </Form.Label >
    <Col sm="10">
    <p className={mission.isDone?'done':'not_done'}>{mission.title}</p>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    <button name={mission.title} onClick={handleDelete} >DELETE</button>
    </Form.Label>
    <Col sm="10">
      <Form.Control style={{textAlign:'center'}} plaintext disabled readOnly placeholder={mission.description} />
    </Col>
  </Form.Group>
</Form>
            </div>)
        })
        }
        </>
     </div>
        
    </div>
    </div>
    </div>
        )
    }
