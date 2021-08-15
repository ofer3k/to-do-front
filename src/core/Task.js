import React,{useContext} from 'react'
import {  Col, Form, Row } from 'react-bootstrap';
import {removeMission,updateMission } from "../controller/main"
import productUpdateContext from "../context/app-context";

export default function Task(props) {
    const {list,dispatch} = useContext(productUpdateContext);
    const handleDelete= async(event)=>{
        event.preventDefault()
        // change in server        
        await removeMission(event.target.name)
        // change in state
        dispatch({type:'remove_mission',title:event.target.name})
    }

    const handleUpdate=async(event)=>{
    event.preventDefault()  
    let answer;
    event.target.value==='false'?answer=false:answer=true
    // change in server
    await  updateMission(event.target.name,!answer)
    // change in state
    dispatch({type:'update_mission',title:event.target.name,isDone:event.target.value})    
    }
    
    return (
            <Form >
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
    <span className={props.mission.isDone?'unCheck':'check'}>
    <input type={'checkbox'}  name={props.mission.title} value={props.mission.isDone} onClick={handleUpdate} />
    </span>
    </Form.Label >
    <Col sm="10">
    <p className={props.mission.isDone?'done':'not_done'}>{props.mission.title}</p>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    <button name={props.mission.title} onClick={handleDelete} >DELETE</button>
    </Form.Label>
    <Col sm="10">
      <Form.Control style={{textAlign:'center'}} plaintext disabled readOnly placeholder={props.mission.description} />
    </Col>
  </Form.Group>
</Form>
    )
}
