import axios from 'axios'

const addMission=async (title,description)=>{
    axios.post('http://localhost:8000/api/products/create', {
        title,
        description
      })
      .then(function (response) {
        return(response);
      })
      .catch(function (error) {
        return(error);
      });
}

const removeMission=async (title)=>{
    axios.post('http://localhost:8000/api/products/remove', {
        title,
      })
      .then(function (response) {
        return(response);
      })
      .catch(function (error) {
        return(error);
      });
}
const updateMission=async(title,isDone)=>{
    axios.post('http://localhost:8000/api/products/update/product', {
        title,
        isDone
      })
      .then(function (response) {
        return(response);
      })
      .catch(function (error) {
        return(error);
      });
}
const validationCheck=async (title,description,list)=>{
    if(title.length<1||description.length<1)
     return false 
     const found = list.some(el => el.title === title);
        if(found) return false      

     return true
}

export {addMission,removeMission,updateMission,validationCheck}